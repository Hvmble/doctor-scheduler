const { request, response } = require('express');
const userModel = require('../models/user.model');
const patientModel = require('../models/patient.model');
const  appointmentModel  = require('../models/appointment.model');


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
const getAppointmentsByPatientName = async (req, res) => {
    try {
        const { name } = req.params;

        const matchingPatients = await patientModel.find({name: name });

        const appointments = await appointmentModel.find({ patient: { $in: matchingPatients.map(patient => patient._id) } }).populate('doctor');

        res.json({ message: 'Appointments retrieved successfully', data: appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving appointments', data: error.message });
    }
};

module.exports = { getPatients, getPatientById, createPatient,updatePatient,deletePatient, getAppointmentsByPatientName  };