/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_statuses').del()
  await knex('order_statuses').insert([
    {name: 'pending'},
    {name: 'in_progress'},
    {name: 'completed'},
  ]);
};
