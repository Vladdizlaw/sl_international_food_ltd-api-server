/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('invoice_statuses').del()
  await knex('invoice_statuses').insert([
    {name: 'unpaid'},
    {name: 'paid'}
  ]);
};
