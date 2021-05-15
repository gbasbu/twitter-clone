const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async findByEmail(email){
        return this.model.findOne({ email: email })
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
}

module.exports = new UserService()