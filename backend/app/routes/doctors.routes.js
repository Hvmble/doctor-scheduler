const { Router } = require('express')
const router = Router()
const { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('../controllers/DoctorControllers')

router.get('/', getDoctors)

router.get('/:id', getDoctorById)

router.post('/', createDoctor)

router.put('/:id', updateDoctor)

router.delete('/:id', deleteDoctor)

module.exports = router;