
import { NextApiHandler } from 'next/types'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

export type APIResponse = {
  status: string
  message?: string
  name?: string
}

dotenv.config()


const sendEmail: NextApiHandler<APIResponse> = async (req, res) => {
  try {
    const { name, email, UF, cidade, escola } = req.body
    
    const mailTransporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'dutecbot@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mail = {
      title: 'Requisição de testes',
      body: `${name} requisitou testar o software do kit Dutec.
      O estudante percence a instituição '${escola}' e mora em ${cidade}-${UF}.
      Email para contato: ${email}`
    }
    
    const mailData = {
      from: 'dutecbot@gmail.com',
      to: 'desenvolvimento@dulino.com.br',
      subject: `Requisitção de teste, por ${name}`,
      text: mail.body,
      html: `<h1>${mail.title}</h1>\n<p>${mail.body}</p>`
    }
    
    return new Promise((resolve, reject) => {
      mailTransporter.once('error', reject)
      try {
        return mailTransporter.sendMail(mailData, (err, info) => {
          if (err) {
            const { message, name } = err
            res.status(502).json({
              status: 'send error',
              message,
              name
            })
            console.log(name, ': ', message)
            reject(err)
          }
          else {
            resolve(res.status(200).json({ status: 'Done! ' }))
            console.log(info)
          }
        })
      } catch (err) {

        const { message, name } = err
        console.log(name, ': ', message)
        
        res.status(500).json({ status: 'internal error', message, name })
        
        return reject(err)
      }
    })
  } catch (error) {
    
    const { message, name } = error
    console.log(name, ': ', message)
    
    res.status(500).json({ status: 'server error', message, name })
    return new Promise<void>((resolve, reject) => reject(error))
  }
}

export default sendEmail