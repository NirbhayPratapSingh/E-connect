const { Router } = require('express')

const route = Router()

route.post('/', (req, res) => {
    console.log("ikkade")
  try {
    res.clearCookie('refreshToken')
    res.clearCookie('accessToken')

    res.status(200).send({ message: 'successfully Loggedout' })
  } catch (e) {
    res.status(500).send({ error: 'somthing went wrong' })
  }
})

module.exports = route
