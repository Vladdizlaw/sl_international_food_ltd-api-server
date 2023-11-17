/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('accounts', function (table) {
		table.increments('id')
		table.string('login', 255).unique().notNullable()
		table.string('password', 255).notNullable()
		table.string('role', 255).notNullable()
		table.decimal('balance').notNullable().defaultTo(0)
		table.string('email', 255)
		table.timestamps(true, true)
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('accounts')
}
