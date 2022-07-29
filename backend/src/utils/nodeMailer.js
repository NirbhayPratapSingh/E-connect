const nodemailer = require('nodemailer')
const hbs = require('hbs')
require('dotenv').config()

const mail = async (data) => {
    console.log(data,"nodemailer")
  try {
    let transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_APP_EMAIL,
        pass: process.env.MAIL_APP_PASSWORD,
      },
    })

    const content = `
        <div style="margin: auto;">
            <h1>Hello, {{username}}</h1>
            <p>Here is your Reset Password link</p>
            <p>Note: Please Note that the link is one time use only and it will expires in 15min.</p>
            <a href="http://localhost:3000/forgotpassword/{{code}}">Click here to reset your password</a>
            <p>If you did not do this please reset your password immediately.</p>
        </div> `

    const template = hbs.compile(content)

    let info = await transport.sendMail({
      from: 'E-connect Econnect@gmail.com',
      to: data.email,
      subject: 'Forgot Password',
      html: template({ username: data.username, code: data.token }),
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports = mail
