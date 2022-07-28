const http = require('http')
const express = require('express')
const Connection = require('./server/server')
const cors = require('cors')
const { Server } = require('socket.io')
const cookieParser = require('cookie-parser')
const Login = require('./Routes/Login')
const Signup = require('./Routes/Signup')
require('dotenv').config()

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
)

app.get('/', (req, res) => {
  res.send('Welcome')
})
// app.use('/login', Login)
// app.use('/signup', Signup)

server.listen(port, async (err, res) => {
  try {
    await Connection
    console.log('Connected Successfully')
  } catch (err) {
    console.log(err)
  }

  if (err) {
    return console.log('Something went wrong')
  }
  console.log('Sever is live at http://localhost:8080')
})
