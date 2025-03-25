const User = require('../models/user');

class UserController {
    static insertUsers(req, res){
        const { id, nome, email, senha } = req.body

        const user = new User(id, nome, email, senha)
        user.save()

        res.status(201).json(user)
    }

    static findAll(req, res){
        const users = User.fetchAll()

        res.json(users)
    }

    static updateUsers(req, res) {
        const id = Number(req.params.id);
        const { nome } = req.body;
    
        const user = User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
    
        user.nome = nome;
    
        res.json(user);
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

module.exports = UserController