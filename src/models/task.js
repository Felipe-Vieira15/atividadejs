const tasks = []

class Task {
    constructor (id, titulo, status, idProject, idUser) {
        this.id = id
        this.titulo = titulo
        this.status = status
        this.idProject = idProject
        this.idUser = idUser
    }

    save () {
        tasks.push(this)
    }

    static fetchAll() {
        return tasks
    }

    static findById (id) {
        return tasks.find(task => task.id == id)
    }

    remove () {
        const index = tasks.findIndex(task => task.id === this.id)
        tasks.splice(index, 1)
    }
    
}

module.exports = Task