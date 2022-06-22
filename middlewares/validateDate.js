const regexDate = /^\d{2}\/\d{2}\/\d{4}$/;

const validateDate = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    console.log('passou aqui');
    if (!watchedAt) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }

    if (!regexDate.test(watchedAt)) {
        return res.status(400)
            .send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

module.exports = validateDate; 