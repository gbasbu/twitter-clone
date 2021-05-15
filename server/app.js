const express = require('express')
const cors = require('cors')
const passport = require('passport')
require('dotenv').config()

// ENG: initialize app & TR: app oluşturma
const app = express()

// ENG: Middlewares & TR: Orta yazılımlar
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(passport.initialize())
require('./config/passport')(passport)

// ENG: Require database connect & TR: Database bağlantısı
require('./mongo-connection')

// ENG: Bring routes & TR: Routes getirildi
const userRouter = require('./routes/user')

// ENG: initialize routes & TR: routes başlatıldı
app.use('/user', userRouter)


// ENG: Listening server & TR: Server başlatıldı
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});