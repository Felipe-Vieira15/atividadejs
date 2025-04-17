const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');

const JWT_SECRET_KEY = 'batata';

class UserController {
    async insertUsers(req, res){
        const { nome, email, senha } = req.body

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Nome, email e senha são obrigatórios" })
        }

        const emailExist = await User.findOne({ where: { email } });
        if (emailExist) {
            return res.status(400).json({ error: "Email já cadastrado" })
        }

        try {
            const senhaCriptografada = await bcrypt.hash(senha, 10);
            const user = await User.create({ nome, email, senha: senhaCriptografada });
            res.status(201).json(user)
        }catch (error) {
            res.status(400).json({ error: "Erro ao criar usuário" })
        }

        res.status(201).json(user)
    }

    static findAll(req, res){
        const users = User.findAll()

        res.json(users)
    }

    async updateUsers(id, nome, email, senha) {
        if (
            id === undefined
            || nome === undefined
            || email === undefined
            || senha === undefined
        ) {
            throw new Error('Id, nome, email e senha são obrigatórios');
        }

        const user = await this.buscarPorId(id);

        user.nome = nome;
        user.email = email;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);
        user.senha = senhaCriptografada;
        user.save();

        return user;
    }

    static removeUsers(req, res) {
        const { id } = req.params;
    
        const user = User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
    
        user.remove();
        
    
        res.status(204).send();
    }
}

module.exports = UserController;