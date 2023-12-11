const ContainerMongoDb = require('../../container/container_mongoDb.js')

const Products = require('../../Dtos/model/productModel.js')

class ProductsDaoMongoDb extends ContainerMongoDb {
    constructor() {
        super(Products)
    }
}

module.exports = ProductsDaoMongoDb