
const { Router } = require('express');
const router = Router();
const { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment, getAppointmentsPatient, getAppointmentsDoctor } = require("../controllers/AppointmentController")

router.get('/', getAppointments);

router.get('/:id', getAppointmentById);

router.get('/patient/:id', getAppointmentsPatient);

router.get('/doctor/:id', getAppointmentsDoctor);

router.post('/', createAppointment);

router.put('/:id', updateAppointment);

router.delete('/:id', deleteAppointment);

module.exports = router;
