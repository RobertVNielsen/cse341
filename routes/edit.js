const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit_controller');
const auth = require('../middleware/is_auth')

router.post('/', auth, editController.postEditProduct)
router.get('/:oldtitle', auth, editController.getEditProduct)

module.exports = router;