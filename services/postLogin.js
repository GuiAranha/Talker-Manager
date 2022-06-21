const services = require('./generateToken');

const postLogin = (req, res) => {
    const { email, password } = req.body;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) return res.status(400).send({ message: 'O campo "email" é obrigatório' });
    if (!regex.test(email)) {
        return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    if (!password) return res.status(400).send({ message: 'O campo "password" é obrigatório' });
    if (password.length < 6) {
        return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    const token = services(email, password);
    return res.status(200).send({ token });
};

module.exports = postLogin;