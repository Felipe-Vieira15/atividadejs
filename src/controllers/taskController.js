const Task = require('../models/task')

class TaskController {
    static insertTasks(req, res){
        const { id, titulo, status, idProject, idUser } = req.body

        const task = new Task(id, titulo, status, idProject, idUser)
        task.save()

        res.status(201).json(task)
    }

    static findAll(req, res){
        const tasks = Task.fetchAll()

        res.json(tasks)
    }

    static updateTasks(req, res) {
        const id = Number(req.params.id);
        const { titulo, status } = req.body;

        const task = Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        task.titulo = titulo;
        task.status = status;

        res.json(task);
    }

    static removeTasks(req, res) {
        const { id } = req.params;

        const task = Task.findById(id);
        if (!task) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        task.remove();
        

        res.status(204).send();
    }
}

module.exports = TaskController