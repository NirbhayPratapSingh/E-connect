const jwt = require('jsonwebtoken')

const Authorization = async (req, res, next) => {
  const accessToken = req.cookies.accessToken
  const refreshToken = req.cookies.refreshToken
  

  if (!accessToken || !refreshToken) {
    return res.status(401).send({ error: 'authorization failed' })
  }

  const verify = jwt.verify(
    accessToken,
    process.env.JWTSECRET,
    (err, decoded) => {
      if (err) {
        const ref = jwt.verify(
          refreshToken,
          process.env.JWTSECRET,
          (err, decoded) => {
            if (err) {
              res.status(401).status({ error: 'Authorization failed' })
            }
            const { username, email } = decoded
            const newAccessToken = jwt.sign(
              { username, email },
              process.env.JWTSECRET,
              { expiresIn: '15min' },
            )

            res.cookie('accessToken', newAccessToken)
            //   res.status(200).send({ username, email })
            //   next()
          },
        )
      }
      console.log('iam coming man', jwt.decoded)
      const { username, email } = decoded
      // res.status(200).send({ username, email })
      next()
    },
  )
}

module.exports = Authorization
