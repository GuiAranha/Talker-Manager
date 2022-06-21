const router = require('express').Router();
const read = require('../helpers/readFile');

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

module.exports = router;