// promisify help to convert callback base to promise base 
// with that u can use await 
const { promisify } = require('util');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { User } = require('../models/userModel');
const base = require('./baseController');

const createToken = user => {
    return jwt.sign(
        { user }, process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRED_TIME }
    );
};

exports.signup = async (req, res, next) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        });

        const token = createToken(user._id);

        //remove password before send response to client
        user.password = undefined;

        res.status(201).json({
            status: 'success',
            token,
            data: {
                user,
            },
        });
    }
    catch (err) {
        res.status(400);
        console.log('fail to create new user');
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //1 check if email and password exits
        if (!email || !password) {
            res.status(404).send('email and password are requires!');
            return;
        }

        //2 check if user exist and password is correct
        const user = await User.findOne({
            email,
        }).select("+password");

        if (!user || !(await user.comparePassword(
            password, user.password))) {
            res.status(401).send('email or password is incorrect!');
            return;
        }

        //remove password before sending it to client
        user.password = undefined;

        //3 all correct send jwt to the client 
        const token = createToken(_.pick(user, ['_id', 'role']));

        res.status(200).json({
            status: 'success',
            token,
            data: user,
        })
    }
    catch (err) {
        next(err);
    }
}

exports.getOne = base.getOne(User);

exports.getAll = base.getAll(User);

exports.update = base.updateOne(User);

exports.delete = base.deleteOne(User);