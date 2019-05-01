const router = require('express').Router()
const userRoutes = require('../routes/user')

router.use('/api', userRoutes)

module.exports = router