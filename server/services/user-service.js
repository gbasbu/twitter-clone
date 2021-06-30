const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async findByEmail(email){
        return this.model.findOne({ email: email })
    }

    async findByUsername(username){
        return this.model.findOne({ username: username })
    }

    async createPass(user, password){
        user.password = password
        await user.save()
    }

    async changeProfilePicture(user, url, id){
        user.profile_img_url = url
        user.cloudinaryId = id
        await user.save()
    }

    async updateVerifyCode(user, code){
        user.verify_code = code
        await user.save()
    }

    async unloadVerifyCode(user){
        user.verify_code = ''
        await user.save()
    }
}

module.exports = new UserService()