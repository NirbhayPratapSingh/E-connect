const { Router } = require('express')
const userModel = require('../models/User')
const jwt = require('jsonwebtoken')
const argon2 = require('argon2')

const Signup = Router()

Signup.post('/', async (req, res) => {
  const { username, password, email } = req.body
  if (!username || !password || !email) {
    return res.status(401).send({ error: 'please provide all fields' })
  }
  if (password.length < 6) {
    return res.status(406).send({ error: 'please provide 6 digits password ' })
  }

  try {
    const hash = await argon2.hash(password)
    const exist = userModel.find(req.body)
    if (exist.length > 0) {
      return res.status(406).send({ error: 'user already registered' })
    }

    const user = new userModel({ username, email, password: hash })

    user.save().then(() => {
      const refreshToken = jwt.sign(
        { username, email },
        process.env.JWTSECRET,
        { expiresIn: '7d' },
      )
      const accessToken = jwt.sign({ username, email }, process.env.JWTSECRET, {
        expiresIn: '15m',
      })

      res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false, sameSite: "none" })
      res.cookie('accessToken', accessToken, { httpOnly: true, secure: false, sameSite: "none" })

      return res.status(201).send({ username, email })
    })

    // res.status(401).send(username, password)
  } catch (e) {
    console.log(e.message)
    res.status(500).send({ error: 'something went wrong in signup' })
  }
})

module.exports = Signup
