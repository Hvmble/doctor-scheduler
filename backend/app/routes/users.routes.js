const { Router } = require('express')
const router = Router()
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/UserControllers')

router.get("/", getAllUsers)

router.get("/:id", getUserById)

router.post("/", createUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

module.exports = router