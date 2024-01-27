
const { request, response } = require('express')
const  userModel  = require('../models/user.model')
const Role = require('../models/role.model')

const getAllUsers = async (req = request, res = response) => {
    try {
        const documents = await userModel.find().populate('role');
        res.json({ message: 'success', data: documents })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }

}
const getUserById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await userModel.findById(id).populate('role');
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })

    }
}
const createUser = async (req = request, res = response) => {
    try {
        const { name, email, password, active, roleId } = req.body;

        const existingRole = await Role.findById(roleId);
        if (!existingRole) {
            return res.status(400).json({ message: 'Role not found' });
        }

        const document = await userModel.create({
            name,
            email,
            password,
            active,
            role: roleId
        });

        res.json({ message: 'success', data: document });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error', data: error });
    }

}
const updateUser = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name, email, password, active, roleId } = req.body;
        const document = await userModel.findByIdAndUpdate(id, { name, email, password, active, role: roleId }, { new: true });
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }
}
const deleteUser = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await userModel.findByIdAndDelete(id);
        res.json({ message: 'ok', data: document })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error })
    }
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser }