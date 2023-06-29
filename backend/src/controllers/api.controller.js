const e = require('express');
const User = require('../models/user.model');
const c = require('config');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all the users.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: err, data: err });
    }
};

const addUser = async (req, res) => {
    const { firstname, lastname, profile_picture, email, password, is_admin } = req.body;

    console.log(firstname, lastname, profile_picture, email, password, is_admin);

    if (
        firstname == null ||
        lastname == null ||
        profile_picture == null ||
        email == null ||
        password == null ||
        is_admin == null
    )
        return res.status(400).send({ statusCode: 400, statusMessage: 'Bad Request', message: null, data: null });

    try {
        const user = new User(1, firstname, lastname, profile_picture, email, password, is_admin);
        await user.save();

        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created a user.',
            data: null,
        });
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: err,
            data: null,
        });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { firstname, lastname, profile_picture, email, password, is_admin } = req.body;
    if (
        !firstname ||
        !lastname ||
        profile_picture == null ||
        !email ||
        !email.trim() ||
        !password ||
        !password.trim() ||
        is_admin == null
    )
        return res.status(400).send({ statusCode: 400, statusMessage: 'Bad Request', message: null, data: null });

    try {
        await User.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated a user.',
            data: null,
        });
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: err,
            data: null,
        });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a user.',
            data: null,
        });
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: err,
            data: null,
        });
    }
};

const retrieveUserByEmail = async (req, res) => {
    const email = req.params.email;

    try {
        await User.findByEmail(email);
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: err,
            data: null,
        });
    }
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    retrieveUserByEmail,
};
