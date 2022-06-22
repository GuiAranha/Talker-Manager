const generateToken = require('./generateToken');
const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const postLogin = require('./postLogin');
const postTalker = require('./postTalker');
const putTalkerId = require('./putTalkerId');
const deleteTalker = require('./deleteTalker');

module.exports = {
    generateToken,
    getAllTalkers,
    getTalkerById,
    postLogin,
    postTalker,
    putTalkerId,
    deleteTalker,
};
