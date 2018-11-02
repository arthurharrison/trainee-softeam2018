'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.getOne = async(id) => {
    const res = await Order.findOne(id);
    return res;
}

exports.getAll = async() => {
    const res = await Order.find();
    return res;
}

exports.create = async(data) => {
    const order = new Order(data);
    //salva no BD
    await order.save();
}

exports.update = async(id, data) => {
    await Order.findByIdAndUpdate(id, {
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
    await Order.findByIdAndDelete(id);
    return res;
}