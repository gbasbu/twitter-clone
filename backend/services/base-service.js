module.exports = class Service{

    async findAll() {
        return this.model.find()
    }

    async findById(itemId) {
        return this.model.findById(itemId)
    }

    async create(item) {
        return this.model.create(item)
    }

    async deleteById(itemId) {
        return this.model.deleteOne(itemId)
    }

    async updateById(item) {
        return this.model.findByIdAndUpdate({ _id: item.id }, item)
    }

}