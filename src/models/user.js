const users = []

class User{
    constructor(id, nome, email, senha){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    save(){
        users.push(this)
    }

    static fetchAll(){
        return users
    }

    static findById(id) {
        return users.find(user => user.id == id);
    }

    remove(){
        const index = users.findIndex(user => user.id === this.id)
        users.splice(index, 1)
    }
}

module.exports = User