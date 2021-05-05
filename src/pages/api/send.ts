
import { NextApiHandler } from 'next/types'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const mailTransporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'dutecbot@gmail.com',
    pass: process.env.password,
  },
  secure: true,
})

const sendEmail: NextApiHandler = (req, res) => {
  const { name, email, UF, cidade, escola } = req.body

  const mailData = {
    from: 'dutecbot@gmail.com',
    to: 'desenvolvimento@dulino.com.br',
    subject: `Requisitção de teste, por ${name}`,
    text: `
${name} requisitou testar o software do kit Dutec.
O estudante percence a instituição '${escola}' e mora em ${cidade}-${UF}.
Email para contato: ${email}`,
    // html: ''

  }
  try {
    mailTransporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err)
        return res.status(502).json(err)
      }
      else {
        console.log(info)
        return res.status(200).json(info)
      }
    })
  } catch (err) {
    return res.status(500).json(err)
  }
}

export default sendEmail