const { request, response } = require('express');
const userModel = require('../models/user.model');
const patientModel = require('../models/patient.model');


const getPatients = async (req = request, res = response) => {
    try {
        const documents = await patientModel.find();
        res.json({ message: 'success', data: documents });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error', data: error });
    }
}

const getPatientById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await patientModel.findById(id).populate('user');
        res.json({ message: 'success', data: document });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error', data: error });
    }
}

const createPatient = async (req = request, res = response) => {
    try {
        const { identification, name, age, gender, address, phone, email, history, userId } = req.body;
        const existingUser = await userModel.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        const document = await patientModel.create({ user: userId, identification, name, age, gender, address, phone, email, history });
        res.json({ message: 'success', data: document });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error', data: error });
    }
}

const updatePatient = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { identification, name, age, gender, address, phone, email, history, userId } = req.body;
        const existingUser = await userModel.findById(userId);
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }
        const document = await patientModel.findByIdAndUpdate(id,{ user: userId, identification, name, age, gender, address, phone, email, history });
       
        res.json({ message: 'success', data: document });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error', data: error });
    }
}

const deletePatient = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const document = await patientModel.findByIdAndDelete(id);
        res.json({ message: 'success', data: document });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error', data: error });
    }
}

module.exports = { getPatients, getPatientById, createPatient,deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient, updatePatient, deletePatient };