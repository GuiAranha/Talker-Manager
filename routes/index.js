const router = require('express').Router();
const services = require('../services');
const middlewares = require('../middlewares');

router.get('/talker', services.getAllTalkers);
router.get('/talker/:id', services.getTalkerById);
router.post('/login', services.postLogin);
router.post('/talker', 
    middlewares.validateToken,
    middlewares.validateTalker,
    middlewares.validateName,
    middlewares.validateDate,
    middlewares.validateAge,
    services.postTalker);

module.exports = router;