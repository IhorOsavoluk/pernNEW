const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController.js')

router.post('/',brandController.create)
router.get('/',brandController.getAll)
router.delete('/',)


module.exports = router