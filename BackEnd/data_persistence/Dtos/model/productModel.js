const { Schema, model} = require('mongoose')

const productSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        max: 100
    },
    precio: {
        type: Number,
        max: 999999,
        required: true
    },
    fecha: {
        type: String,
        required: true, 
        max: 300
    },
    marca: {
        type: String,
        required: true, 
        max: 300
    }
})
module.exports = model('Products', productSchema)