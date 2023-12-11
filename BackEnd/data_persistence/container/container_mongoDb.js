const { Connect } = require('./config_mongo')
const loggerCustom = require('../../utils/log4js')


class ContainerMongoDb extends Connect {

    async getAll() {
        try {
            const models = await this.model.find()
            return models
        } catch (error) {
            loggerCustom.error(`no ${this.model} found, ${error}`)
        }
    }

    async getById(id) {
        try {
            const product = await this.model.find({_id: id})
            return product
        } catch (error) {
            loggerCustom.error(`product in ${this.model} not found, ${error}`)
        }
    }

    async save(item) {
        try {
            const newitem = new this.model(item)
            await newitem.save()
            loggerCustom.info(`new product added ${newitem}`)
        } catch (error) {
            loggerCustom.error(`problem saving ${item}, ${error}`)
        }
    }

    async update(product, id) {
        try {
            await this.model.updateOne({_id: id}, {$set: {nombre: product.nombre, precio: product.precio, marca: product.marca, fecha: product.fecha}})
            console.log('product updated')
        } catch (error) {
            loggerCustom.error(`problem updating ${product} in cart ${id}, ${error}`)
        }
    }

    async deleteById(id) {
        try {
            await this.model.deleteOne({_id: id})
            loggerCustom('product deleted')
        } catch (error) {
            loggerCustom.error(`problem deleting item ${id}, ${error}`)
        }
    }
}

module.exports = ContainerMongoDb