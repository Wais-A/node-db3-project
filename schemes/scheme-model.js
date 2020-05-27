
const db = require('../data/dbConfig.js');


module.exports = {
 find,
 findById,
 findSteps,
 add,

 remove,
 addStep

}

// finds the schemes database
function find() {
 return db('schemes')
}

// finds select information by it's id from the scheme table
function findById(id){
 return db('schemes')
 .where({id})
 .first();
}

// finds certain foreign keys by it's id
function findSteps(id){
  return db( 'schemes' ).join( 'steps', 'schemes.id', 'steps.scheme_id' ).select( 'steps.scheme_id', 'step_number', 'instructions').where('schemes.id', id)
}


// adds a new ingredients 
function add(insert){
 return db('schemes')
 .insert(insert)
 .then(ids => {
  return findById(ids[0])
 })
}

// adds steps to the ingredients 
// function addStep(insert, id){
//  return db('steps')
//    .insert( {scheme_id: id}, insert)
//  .then(ids => {
//   return findById(ids[0])
//  })
// }
function addStep(step, id){
 return db('steps')
   .insert({scheme_id: Number(id), step_number: step.step_number, instructions: step.instructions})
  
 
}


// removes ingredients
function remove(id) {
 return db('schemes')
 .where('id', id)
 .del();

}