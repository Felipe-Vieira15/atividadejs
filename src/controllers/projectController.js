const Project = require('../models/project')

class ProjectController {
    static insertProjects(req, res){
        const { id, nome, descricao } = req.body

        const project = new Project(id, nome, descricao)
        project.save()

        res.status(201).json(project)
    }

    static findAll(req, res){
        const projects = Project.fetchAll()

        res.json(projects)
    }

    static updateProjects(req, res){
        const id = Number(req.params.id)
        const { nome, descricao } = req.body

        const project = Project.findById(id)
        if(!project){
            return res.status(404).json({ error: "Projeto não encontrado" })
        }

        project.nome = nome
        project.descricao = descricao

        res.json(project)
    }

    static removeProjects(req, res){
        const { id } = req.params

        const project = Project.findById(id)
        project.remove()

        res.status(204).send()
    }
}

module.exports = ProjectController