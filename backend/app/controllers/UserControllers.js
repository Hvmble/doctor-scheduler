
const { request, response } = require('express')
const { userModel } = require('../models/user.model')

const getAllUsers = async (req = request, res = response) => {
    try {
        const documents = await userModel.find({});
        res.json({ message: 'success', data: documents })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }

}
const getUserById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await userModel.findById(id);
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })

    }
}
const createUser = async (req = request, res = response) => {
    try {
        const { name, email, password, active, token } = req.body;
        const document = await userModel.create({ name, email, password, active, token });
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }

}
const updateUser = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name, email, password, active, token } = req.body;
        const document = await userModel.findByIdAndUpdate(id, { name, email, password, active, token }, { new: true });
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }
}
const deleteUser = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { active, } = req.body;
        const document = await userModel.findByIdAndUpdate(id, { active }, { new: true });
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }