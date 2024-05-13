const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },
    // order_date:{
    //     type: String,
    //     required: true,
    // },
});

module.exports = mongoose.model('Order', OrderSchema)