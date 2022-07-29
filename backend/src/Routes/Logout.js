const { Router } = require('express')

const route = Router()

route.post('/logout', (req, res) => {
  res.clearCookie('refreshToken')
  res.clearCookie('accessToken')

  res.status(200).send({ message: 'successfully Loggedout' })
})

module.exports = route
