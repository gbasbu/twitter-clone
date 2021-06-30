const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const UserService = require('../services/user-service')
const key = require('../config/keys').tokenKey;
const cloudinary = require('cloudinary')
const upload = require('../utils/multer')
const sgMail = require("@sendgrid/mail");
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Control user email
router.post('/email_control', async (req, res) => {
    const user = await UserService.findByEmail(req.body.email)
    if(user) res.send({ status: false, msg: 'Email has already been taken.' })
    else res.send({ status: true, msg: 'Email is available.' })
})

// Register
router.post('/register', async (req, res) => {
    req.body.username = req.body.name.split(' ').reverse().join('')
    await UserService.create(req.body)
})

// Login When Finish Register
router.post('/login', async (req, res) => {
    const user = await UserService.findByEmail(req.body.email)
    const payload = { _id: user._id, name: user.name, email: user.email }
    jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
        res.status(200).json({
            success: true,
            user: user,
            token: `Bearer ${token}`
        })
    })
})

// Add Password
router.post('/add_password', passport.authenticate('jwt', { session: false }), async (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err
            req.body.password = hash
            UserService.createPass(req.user, req.body.password)
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
                const payload = { _id: user._id, name: user.name, email: user.email }
                jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
                    res.status(200).json({ success: true, user: user, token: `Bearer ${token}` })
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

// Fetch from username
router.post('/get_username', async (req, res) => {
    const user = await UserService.findByUsername(req.body.username)
    if(user) res.send(user)
    if(!user) res.send({ success: false, msg: 'User is not found, please try again.' })
})

// Verify user info
router.post('/verify_user_info', async (req, res) => {
    const user = await UserService.findByUsername(req.body.username)
    if(user) {
        if(user.email !== req.body.email) res.send({ success: false, msg: 'Email incorrect. Please try again.' })
        else res.send({ success: true })
    }
    
})

// Send Verify Code
router.post('/send_verify_code', async (req, res) => {
    const code = Math.floor(Math.random() * (999999 - 100000) + 100000);
    const user = await UserService.findByEmail(req.body.email)
    await UserService.updateVerifyCode(user, code)
    const msg = {
        from: "g.basbug@hotmail.com",
        to: req.body.email,
        subject: "Twitter Clone - Verify Code",
        text: `
        Hello, thanks for registering on my project.
        Your Code: ${code}
        `,
        html: `
        <h2>Hello,</h2>
        <p>Thanks for registering on my project.</p>
        <p><strong>Activation Code: </strong>${code}</p>
        `,
      };
        await sgMail
        .send(msg)
        .then(() => { res.send({ success: true, msg: 'Verify code send your email address. Please check your mail.' }) })
        .catch(() => { res.send({ success: false, msg: 'Something went wrong. Please try again later.' }) }) 
})

// Check Verify Code
router.post('/check_verify_code', async (req, res) => {
    const user = await UserService.findByUsername(req.body.username)
    if(user.verify_code == req.body.verify_code) {
        await UserService.unloadVerifyCode(user)
        res.send({ success: true })
    }else{
        res.send({ success: false, msg:'Verify code incorrect. Please try again.' })
    }
})

// Change Password
router.post('/change_password', async (req, res) => {
    try {
        const user = await UserService.findByUsername(req.body.username)
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if(err) throw err
                req.body.password = hash
                UserService.createPass(user, req.body.password)
                res.send({ success: true })
            })
        })
    } catch (err) {
        res.send({ success: false, msg: 'Something went wrong. Please try again.' })
    }
    
})




module.exports = router 