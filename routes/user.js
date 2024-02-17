const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.post('/', user.insertDetails)
router.get('/', user.getDetails);
router.get('/:userId', user.getDetails);
router.put('/:userId', user.updateDetails);
router.delete('/:userId', user.deleteDetails);

module.exports = router;