'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.getOne = async(id) => {
    const res = await Order.findById(id).select({_id: 0, __v:0});
    return res;
}

exports.getAll = async() => {
    const res = await Order.find().select({_id: 0, __v:0});
    return res;
}

exports.create = async(data) => {
    const order = new Order(data);
    //salva no BD
    await order.save();
}

exports.update = async(id, data) => {
    const res = await Order.findByIdAndUpdate(id, {
        $set: {
            kindFood: data.kindFood,
            amount: data.amount,
            price: data.price,
            extra: data.extra
        }
    });
    return res;
}

exports.remove = async(id) => {
    const res = await Order.findByIdAndDelete(id);
    return res;
}