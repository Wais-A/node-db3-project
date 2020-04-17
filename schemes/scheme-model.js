const db = require('../data/dbConfig.js');


module.exports = {
 find,
 findById,
 findSteps,
 add,
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
 return db('schemes as s')
  .join( 'steps as st', 'st.id', 's.scheme_id' )
  .select( 's.id', 's.text', 'st.step_number as Number of Steps')
  .where('s.scheme_id', id)
}

function add(insert){
 return db('schemes')
 .insert(insert)
 .then(ids => {
  return findById(ids[0])
 })
}

function remove(id) {
 return db('schemes')
 .where('id', id)
 .del();
}