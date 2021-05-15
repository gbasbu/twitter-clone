const cloudinary = require('cloudinary')

cloudinary_url = URL.parse(process.env.CLOUDINARY_URL)

cloudinary.config({
    cloud_name : cloudinary_url.host,
    api_key    : cloudinary_url.auth.split(':')[0],
    api_secret : cloudinary_url.auth.split(':')[1]
})

module.exports = cloudinary