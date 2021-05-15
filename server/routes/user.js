const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const UserService = require('../services/user-service')
const key = require('../config/keys').tokenKey;
const cloudinary = require('cloudinary')
const upload = require('../utils/multer')

// Control user email
router.post('/email_control', async (req, res) => {
    const user = await UserService.findByEmail(req.body.email)
    if(user) res.status(400).json({ status: false, msg: 'Email has already been taken.' })
    else res.status(200).json({ status: true, msg: 'Email is available.' })
})

// Register
router.post('/register', async (req, res) => {
    await UserService.create(req.body)
})

// Add Password
router.post('/add_password', async (req, res) => {
    const user = await UserService.findByEmail(req.body.email)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err
            req.body.password = hash
            UserService.createPass(user, req.body.password)
        })
    })
})

// Login
router.post('/login', async (req, res) => {
    const user = await UserService.findByEmail(req.body.email)
    bcrypt.compare(req.body.password, user.password).then(() => {
        const payload = {
            _id: user._id,
            name: user.name,
            email: user.email
        }
        jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
            res.status(200).json({
                success: true,
                user: user,
                token: `Bearer ${token}`
            })
        })
    })
})

// Chance Profile Picture
router.post('/change_picture', upload.single('image'), passport.authenticate('jwt', { session: false }), async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path)
    await UserService.changeProfilePicture(req.user, result.secure_url, result.public_id )
})

// Login Request
router.post('/login_request', async (req, res) => {
    const user = await UserService.findByEmail(req.body.email)
    if(!user){
        res.send({
            status: false, 
            msg: 'The email and password you entered did not match our records. Please double-check and try again.'
        })
    }
    if(user) {
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            if(isMatch){
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user: user,
                        token: `Bearer ${token}`
                    })
                })
            }else{
                res.send({
                    success: false,
                    msg: 'There was unusual login activity on your account. To help keep your account safe, please enter your phone number or username to verify it’s you.'
                })
            }
        })
    } 
      
})







module.exports = router 