const read = require('../helpers/readFile');
const write = require('../helpers/writeFile');

const postTalker = async (req, res) => {
    const { name, age, talk } = req.body;
    const data = await read();
    const talkers = JSON.parse(data);
    const talker = {
        name,
        age,
        id: talkers.length + 1,
        talk,
    };
    const newData = [...data, talker];
    await write(newData);
    res.status(201).json(talker);
};

module.exports = postTalker;