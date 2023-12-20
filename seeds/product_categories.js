/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('product_categories').del()
	await knex('product_categories').insert([
		{ name: 'Beer' },
		{ name: 'Cider' },
		{ name: 'Wine' },
		{ name: 'Alcohol Free' },
		{ name: 'Snaks' },
		{ name: 'Cocktails' }
	])
}
