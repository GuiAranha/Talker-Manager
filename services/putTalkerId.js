const fs = require('fs').promises;
const read = require('../helpers/readFile');

const putTalkerId = async (req, res) => {
    const id = Number(req.params.id);
    // desestruturacao nao funcionou nesse id ;-;
    const { name, age, talk } = req.body;
    const data = await read();
    const talkers = JSON.parse(data);
    const newTalker = {
        name,
        age,
        id,
        talk,
    };
    
    const allTalkers = talkers.filter((item) => item.id !== (id));
    const newData = [...allTalkers, newTalker];
    await fs.writeFile('./talker.json', JSON.stringify(newData));
    console.log(newTalker);
    res.status(200).json(newTalker);
};

module.exports = putTalkerId;