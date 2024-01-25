const { Router } = require('express')
const router = Router()
const { getRoles,getRoleById, createRole, updateRole, deleteRole } = require('../controllers/RoleController')

router.get('/', getRoles)

router.get('/:id', getRoleById)

router.post('/', createRole)

router.put('/:id', updateRole)

router.delete('/:id', deleteRole)

module.exports = router;