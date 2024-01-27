const { Router } = require('express');
const router = Router();
const { getPatients, getPatientById, createPatient, updatePatient, deletePatient } = require('../controllers/PatientController');

router.get("/", getPatients)

router.get("/:id", getPatientById)

router.post("/", createPatient)

router.put("/:id", updatePatient)

router.delete("/:id", deletePatient)


module.exports = router