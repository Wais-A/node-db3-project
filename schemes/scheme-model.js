const db = require('../data/db-config.js')

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes').where({id})
}

function findSteps(id){
    return db('schemes').where({id})
}

function add(schemeData){
    return db('schemeData').insert(schemeData)
}

function remove(id){
    return db('schemes').where({id}).del
}

module.exports ={
    find,
    findById,
    findSteps,

}