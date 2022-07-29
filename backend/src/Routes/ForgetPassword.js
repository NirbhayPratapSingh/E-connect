const { Router } = require('express')
const userModel = require('../Models/User')
const jwt = require('jsonwebtoken')

const route = Router()

route.post('/', async (req, res) => {
  const { email } = req.body

  try {
    const user = await userModel.findOne({ email })
    if (!user) {
      return res
        .status(404)
        .send({ error: 'User dont have any account please create a account' })
    }

    const token = jwt.sign(
      { username: user.username, email: user.email },
      process.env.JWTSECRET,
      { expiresIn: '10m' },
      )
      
      

  } catch (e) {}
})
