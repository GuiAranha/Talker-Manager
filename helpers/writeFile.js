const fs = require('fs').promises;

const write = async (data) => {
    try {
        const res = await fs.writeFile('./talker.json', JSON.stringify(data));
        return res;
    } catch (err) {
        console.log(err, 'erro');
    }
};

module.exports = write;