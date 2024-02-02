const { request, response } = require('express');
const doctorModel = require('../models/doctor.model');
const patientModel = require('../models/patient.model');
const  appointmentModel  = require('../models/appointment.model');
const userModel = require('../models/user.model');


const getAppointments = async (req = request, res = response) => {
    try {
        const documents = await appointmentModel.find();
        res.json({ message: 'success', data: documents });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }

}
const getAppointmentById = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const documents = await appointmentModel.find(id);
        res.json({ message: 'success', data: documents });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}
const createAppointment = async (req = request, res = response) => {
    try {
        const { patientId, doctorId, description, date, time } = req.body;
        const existingPatient = await patientModel.findById(patientId);
        const existingDoctor = await doctorModel.findById(doctorId);
        if (!existingPatient || !existingDoctor) {
            return res.status(400).json({ message: 'User not found' });
        }
        const appointment = await appointmentModel.create({ patient:patientId, doctor:doctorId, description, date, time });

        res.json({ message: 'success', data: appointment });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}
const updateAppointment = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const { userId, doctorId, description, date, time } = req.body;
        const existingUser = await userModel.findById(userId);
        const existingDoctor = await doctorModel.findById(doctorId);
        if (!existingUser || !existingDoctor) {
            return res.status(400).json({ message: 'User not found' });
        }
        const appointment = await appointmentModel.findByIdAndUpdate(id, { userId, doctorId, description, date, time }, { new: true });

        res.json({ message: 'success', data: appointment });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const deleteAppointment = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const appointment = await appointmentModel.findByIdAndDelete(id);
        res.json({ message: 'success', data: appointment });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'error', data: error });
    }
}

const getAppointmentsPatient = async (req = request, res = response) => {
    try {
        const { id } = req.params;


        const existingPatient = await patientModel.findById(id);
        if (!existingPatient) {
            return res.status(400).json({ message: 'Patient not found' });
        }

        const appointments = await appointmentModel.find({ patient: id }).populate('doctor');

        res.json({ message: 'Appointments retrieved successfully', data: appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving appointments', data: error.message });
    }
}
const getAppointmentsDoctor = async (req = request, res = response) => {
    try {
        const { id } = req.params;


        const existingPatient = await patientModel.findById(id);
        if (!existingPatient) {
            return res.status(400).json({ message: 'Patient not found' });
        }

        const appointments = await appointmentModel.find({ patient: id }).populate('doctor');

        res.json({ message: 'Appointments retrieved successfully', data: appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving appointments', data: error.message });
    }
}




module.exports = { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment,getAppointmentsPatient,getAppointmentsDoctor }