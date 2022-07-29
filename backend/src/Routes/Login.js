const { Router } = require('express')
const userModel = require('../Models/User')
const jwt = require('jsonwebtoken')

const route = Router()

route.post('/', async (req, res) => {
  const { username, email, password } = req.body
  if (!email || !password) {
    return res.status(401).send({ error: 'please provide all the fields' })
  }
  try {
    const exist = await userModel.findOne({ email })

    if (!exist) {
      return res.status(401).send({
        error: 'user dont have a account please register',
      })
    }

    const user = await userModel.findOne(req.body)

    if (!user) {
      return res.status(401).send({
        error: 'please enter valid credentials',
      })
    }

    const refreshToken = jwt.sign({ username, email }, process.env.JWTSECRET, {
      expiresIn: '7d',
    })
    const accessToken = jwt.sign({ username, email }, process.env.JWTSECRET, {
      expiresIn: '15m',
    })

    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false })
    res.cookie('accessToken', accessToken, { httpOnly: true, secure: false })

    res.send({ username: user.username, email: user.email })
  } catch (e) {
    res.status(500).send({ error: 'something wrong in login' })
  }
})

module.exports = route
