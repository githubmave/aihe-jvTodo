const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.listTodos()
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR', err.message)
    })
})

router.post('/', (req, res) => {
    const newTodo = req.body
    db.addTodo(newTodo)
    .then(newTodo => {
        res.json(newTodo)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id)
    const update = req.body
    db.updateTodo(id, update)
    .then(updatedTodo => {
        res.json(updatedTodo)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log("route line:42 req.params.id", id)
    db.deleteTodo(id)
    .then(res.sendStatus(200))
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router