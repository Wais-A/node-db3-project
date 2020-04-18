
const db = require('../data/dbConfig.js');


module.exports = {
 find,
 findById,
 findSteps,
 add,
 addStep,
 remove
}


function find() {
 return db('schemes')
}

function findById(id){
 return db('schemes')
 .where({id})
 .first();
}

function findSteps(id){
  return db( 'schemes' ).join( 'steps', 'schemes.id', 'steps.scheme_id' ).select( 'steps.scheme_id', 'step_number', 'instructions').where('schemes.id', id)
}
// ( 'schemes' ).join( 'steps', 'schemes.id', '=', 'steps.scheme_id' ).where( 'scheme_id', id )
function add(insert){
 return db('schemes')
 .insert(insert)
 .then(ids => {
  return findById(ids[0])
 })
}

function addStep(step, id){
 return db('steps')
   .insert({scheme_id: Number(id), step_number: step.step_number, instructions: step.instructions})
  
 
}

function remove(id) {
 return db('schemes')
 .where('id', id)
 .del();

}