/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('account_statuses').del()
    await knex('account_statuses').insert([
      {name: 'active'},
      {name: 'inactive'}
    ]);
  };
  