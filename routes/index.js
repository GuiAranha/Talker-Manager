// const { generateToken } = require('npm-rtg');
const router = require('express').Router();
const read = require('../helpers/readFile');
const services = require('../services');

router.get('/talker', async (_req, res) => {
    const data = await read('talker.json');
    const talkers = JSON.parse(data);
    if (!talkers) return res.status(200).send([]);
    return res.status(200).send(talkers);
});

router.get('/talker/:id', async (req, res) => {
    const { id } = req.params;
    const data = await read('talker.json');
    const talkers = JSON.parse(data);
    const talkerId = talkers.find((item) => item.id === Number(id));
    if (!talkerId) return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).send(talkerId);
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
    if (!regex.test(email)) {
        return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    if (!password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
    if (password.length < 6) {
        return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    const token = services.generateToken(email, password);
    return res.status(200).send({ token });
});

module.exports = router;