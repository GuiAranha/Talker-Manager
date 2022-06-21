const read = require('../helpers/readFile');

const getTalkerById = async (req, res) => {
    const { id } = req.params;
    const data = await read('talker.json');
    const talkers = JSON.parse(data);
    const talkerId = talkers.find((item) => item.id === Number(id));
    if (!talkerId) return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).send(talkerId);
};

module.exports = getTalkerById;