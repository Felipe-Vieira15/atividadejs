const express = require('express');
const projectController = require('./controllers/projectController');
const taskController = require('./controllers/taskController');
const userController = require('./controllers/userController');
const app = express();

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/projects', projectController.insertProjects)
app.get('/projects', projectController.findAll)
app.put('/projects/:id', projectController.updateProjects)
app.delete('/projects/:id', projectController.removeProjects)
app.post('/tasks', taskController.insertTasks)
app.get('/tasks', taskController.findAll)
app.put('/tasks/:id', taskController.updateTasks)
app.delete('/tasks/:id', taskController.removeTasks)
app.post('/users', userController.insertUsers)
app.get('/users', userController.findAll)
app.put('/users/:id', userController.updateUsers)
app.delete('/users/:id', userController.removeUsers)

app.listen(3002, () => {
    console.log('Server is running on port 3002')
})