const { request, response } = require('express');
const { roleModel } = require('../models/rol.model');

const getRoles = async (req = request, res = response) => {
    try {
        const documents = await roleModel.find();
        res.json({ message: 'success', data: documents });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const getRoleById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await roleModel.findById(id);
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const createRole = async (req = request, res = response) => {
    try {
        const { name } = req.body;
        const document = await roleModel.create({ name });
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const updateRole = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const document = await roleModel.findByIdAndUpdate(id, { name }, { new: true });
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const deleteRole = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await roleModel.findByIdAndDelete(id);
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

module.exports = { getRoles, getRoleById, createRole, updateRole, deleteRole }
