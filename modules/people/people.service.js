const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  get() {
    console.log(people.all)
    return people.all();
  },

  enqueue(person) {
    return people.enqueue(person);
  },

  dequeue(person) {
    return people.dequeue(person);
  }
};