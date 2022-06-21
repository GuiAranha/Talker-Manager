const read = require('../helpers/readFile');

const getAllTalkers = async (_req, res) => {
    const data = await read('talker.json');
    const talkers = JSON.parse(data);
    if (!talkers) return res.status(200).send([]);
    return res.status(200).send(talkers);
};

module.exports = getAllTalkers;