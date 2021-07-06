const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const db = knex(config[env])

function listTodos () {
    return db('todos').select()
}

function findTodo (id){
    return db('todos').where({id}).select().first()
}

function addTodo (newTodo) {
    return db('todos')
    .insert(newTodo)
    .then(ids => {
        return findTodo(ids[0])
    })
}

function updateTodo (id, updatedTodo){
    return db('todos')
    .where('id', id)
    .update(updatedTodo)
    .then(itemsChanged => {
        return findTodo(id)
    })
}

function deleteTodo (id) {
    console.log("db functions line:32", id)
    return db('todos')
    .where('id', id)
    .delete()
}

module.exports = {
    listTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    findTodo
}
