const CryptoJS = require('crypto-js');

const generateToken = (msg, key) => {
    const crypto = CryptoJS.AES.encrypt(msg, key).toString();
    const token = crypto.substring(17, 1);
    return token;
};
// inspirado em https://gist.github.com/yakuter/a6d860317b175d6336638ac51a3feaff
module.exports = generateToken;