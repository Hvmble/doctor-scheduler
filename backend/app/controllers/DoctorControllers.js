const { request, response } = require('express');
const { doctorModel } = require('../models/doctor.model');

const getDoctors = async (req = request, res = response) => {
    try {
        const documents = await doctorModel.find();
        res.json({ message: 'success', data: documents });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const getDoctorById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await doctorModel.findById(id);
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const createDoctor = async (req = request, res = response) => {
    try {
        const { id, admin, active } = req.body;
        const document = await doctorModel.create({ id, admin, active });
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}
const updateDoctor = async (req = request, res = response) => {
    try {
        const { id, admin, active } = req.body;
        const document = await doctorModel.findByIdAndUpdate(id, { id, admin, active }, { new: true });
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const deleteDoctor = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await doctorModel.findByIdAndDelete(id);
        res.json({ message: 'success', data: document });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

module.exports = { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor };