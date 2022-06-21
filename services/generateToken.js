const CryptoJS = require('crypto-js');

const generateToken = (msg, key) => {
    const crypto = CryptoJS.AES.encrypt(msg, key).toString();
    const token = crypto.substring(17, 1);
    return token;
};

module.exports = generateToken;