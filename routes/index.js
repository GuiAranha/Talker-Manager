const router = require('express').Router();
const services = require('../services');

router.get('/talker', services.getAllTalkers);
router.get('/talker/:id', services.getTalkerById);
router.post('/login', services.postLogin);

module.exports = router;