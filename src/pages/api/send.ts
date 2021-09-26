import { NextApiHandler } from "next/types";
import nodemailer, { Transporter } from "nodemailer";
import dotenv from "dotenv";

export type APIResponse = {
  status: string;
  message?: string;
  name?: string;
};

dotenv.config();

function getMailMensage(ctx) {
  return {
    title: "Requisição de testes",
    body: `${ctx.name} requisitou testar o software do kit Dutec.
    O estudante percence a instituição '${ctx.escola}' e mora em ${ctx.cidade}-${ctx.UF}.
    Email para contato: ${ctx.email}`,
  };
}

async function sendMail(emailTransponder: Transporter, mensage) {
  return new Promise((resolve, reject) => {
    emailTransponder.sendMail(mensage, (err, info) => {
      if (err) {
        const { message, name } = err;
        console.error(name, ": ", message);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

const sendEmail: NextApiHandler<APIResponse> = async (req, res) => {
  try {
    const { name, email, UF, cidade, escola } = req.body;
    
    const mailTransporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "dutecbot@gmail.com",
        pass: process.env.password,
      },
      secure: true,
    });
    const mail = getMailMensage({
      name,
      email,
      UF,
      cidade,
      escola,
    });

    const mensage = {
      from: "dutecbot@gmail.com",
      to: "desenvolvimento@dulino.com.br",
      subject: `Requisitção de teste, por ${name}`,
      text: mail.body,
      html: `<h1>${mail.title}</h1>\n<p>${mail.body}</p>`,
    };

    sendMail(mailTransporter, mensage)
      .then((info) => {
        res.status(200).json({ status: "Done! " });
        console.log(info);
      })
      .catch((err) => {
        const { message, name } = err;
        res.status(502).json({
          status: "send error",
          message,
          name,
        });
      });
  } catch (err) {
    const { message, name } = err;
    console.log(name, ": ", message);

    res.status(500).json({ status: "internal error", message, name });
  }
};

export default sendEmail;
