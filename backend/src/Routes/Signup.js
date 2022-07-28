const { Router } = require('express')
const userModel = require('../Models/User')
const jwt = require('jsonwebtoken')

const route = Router()

route.post('/', async (req, res) => {
  const { username, password, email } = req.body
  if (!username || !password || !email) {
    return res.status(401).send({ error: 'please provide all fields' })
  }

  try {
    const exist = userModel.find(req.body)
    if (exist) {
      return res.status(406).send({ error: 'user already registered' })
    }

    const user = userModel.create(req.body)

    user.save().then(() => {
      const refreshToken = jwt.sign(
        { username, email },
        process.env.JWTSECRET,
        { expiresIn: '7d' },
      )
      const accessToken = jwt.sign({ username, email }, process.env.JWTSECRET, {
        expiresIn: '15m',
      })

      res.cookie('refreshToken', refreshToken)
      res.cookie('accessToken', accessToken)

      res.status(201).send({ username, email })
    })

    res.status(401).send(username, password)
  } catch (e) {
    res.status(500).send({ error: 'something went wrong in signup' })
  }
})
