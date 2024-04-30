const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
    const { firstName, LastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.LastName = LastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;