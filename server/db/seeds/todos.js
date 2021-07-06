
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, priority: 2, task: 'Clean house', completed: false},
        {id: 2, priority: 1, task: 'Do washing', completed: true},
        {id: 3, priority: 3, task: 'Cook dinner', completed: false},
      ]);
    });
};
