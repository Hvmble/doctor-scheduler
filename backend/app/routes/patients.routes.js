const { Router } = require('express');
const router = Router();
const { getPatients, getPatientById, createPatient, updatePatient, deletePatient, getAppointmentsByPatientName } = require('../controllers/PatientController');

router.get("/", getPatients)

router.get("/:id", getPatientById)

router.get("/appointments/:name", getAppointmentsByPatientName)


router.post("/", createPatient)

router.put("/:id", updatePatient)

router.delete("/:id", deletePatient)


module.exports = router