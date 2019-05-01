const router = require('express').Router()
const userController = require('../controllers/userController')
const { Authenticate } = require('../middlewares/authentication')
const { Authorize } = require('../middlewares/authorization')

router.post('/users/register', userController.add)
router.post('/users/login', userController.login)
router.use(Authenticate)
router.post('/users', Authorize, userController.create)
router.get('/users', Authorize, userController.findAll)
router.get('/users/:id', userController.findOne)
router.put('/users/:id', userController.update)
router.delete('/users/:id', Authorize, userController.remove)

module.exports = router