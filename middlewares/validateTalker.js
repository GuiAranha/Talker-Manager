const validateTalker = (req, res, next) => {
    const { talk } = req.body;
    if (!talk) return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
    if (!talk.rate) return res.status(400).send({ message: 'O campo "rate" é obrigatório' });
    if (talk.rate > 5 || talk.rate < 1) {
            return res.status(400)
            .send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};

module.exports = validateTalker;