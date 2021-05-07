const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: String, required: true },
    password: { type: String, required: true },
    profile_img_url: { type: String, default: 'https://res.cloudinary.com/dnmlcizxx/image/upload/v1620409537/twitter-clone/user_vxydcy.png' },
    
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel