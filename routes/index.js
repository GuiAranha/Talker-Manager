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
    middlewares.validateRate,
    services.postTalker);
router.put('/talker/:id',
    middlewares.validateToken,
    middlewares.validateTalker,
    middlewares.validateName,
    middlewares.validateDate,
    middlewares.validateAge,
    middlewares.validateRate,
    services.putTalkerId);

module.exports = router;