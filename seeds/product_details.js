/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('product_categories').del()
	await knex('product_categories').insert([
		{ name: 'Lager' },
		{ name: 'Ale' },
		{ name: 'Porter' },
		{ name: 'Pilsner’' }
	])
}
