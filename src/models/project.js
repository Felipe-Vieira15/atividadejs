const projects = []

class Project{

    constructor(id, nome, descricao){
        this.id = id
        this.nome = nome
        this.descricao = descricao
    }

    save(){
        projects.push(this)
    }

    static fetchAll(){
        return projects
    }

    static findById(id){
        return projects.find(project => project.id == id)
    }

    remove(){
        const index = projects.findIndex(project => project.id === this.id)
        projects.splice(index, 1)
    }
}

module.exports = Project