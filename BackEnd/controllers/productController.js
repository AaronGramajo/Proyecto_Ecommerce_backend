const ProductsDaoMongoDb = require('../data_persistence/Daos/products/productDaoMongoDb.js')
const loggerCustom = require('../utils/log4js.js')
const products = new ProductsDaoMongoDb()

const productGET_All = async (req, res) => {
    try {
        res.status(200).json(await products.getAll())
    } catch (error) {
        res.status(404).send(loggerCustom.error(`Products not found ${error}`))
    }
}

const productGET_By_Id = async (req, res) => {
    try {
        const product = await products.getById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(404).send(loggerCustom.error(`Product not found ${error}`))
    }
}

const productPost = async (req, res) => {
    const {nombre, precio, marca, fecha} = req.body
    try {
        if (nombre && precio && marca && fecha) {
            await products.save({nombre, precio, marca, fecha})
            res.status(201).json({message: 'Product added'})
        } 
    } catch (error) {
        res.status(400).send(loggerCustom.error(`Problem adding product ${error}`))
    }
}

const productUpdate = async (req, res) => {
    const {nombre, precio, marca} = req.body
    const updateProduct = {nombre, precio, marca}
    try {
        res.status(201).json(await products.update(updateProduct, req.params.id))
    } catch (error) {
        res.status(400).send(loggerCustom.error(`Problem updating product ${error}`))
    }
}

const productDelete = async (req, res) => {
    try {
        res.status(200).json(await products.deleteById(req.params.id))
    } catch (error) {
        res.status(400).send(loggerCustom.error(`Problem deleting product ${error}`))
    }
}

module.exports = { productGET_All, productGET_By_Id, productPost, productUpdate, productDelete }