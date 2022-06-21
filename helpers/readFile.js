const fs = require('fs/promises');

const read = async () => {
    try {
        const res = await fs.readFile('./talker.json', 'utf-8');
        return res;
    } catch (err) {
        console.log(err);
    }
};

module.exports = read;