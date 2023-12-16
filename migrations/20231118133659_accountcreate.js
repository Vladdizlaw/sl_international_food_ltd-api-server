/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.dropTableIfExists('accounts')
		.createTable('account_statuses', function (table) {
			table.increments('id')
			table.string('name', 255).notNullable()
		})
		.createTable('accounts', function (table) {
			table.increments('id')
			table.string('name', 255).unique().notNullable()
			table.string('email', 255).unique().notNullable()
			table.string('company', 255)
			table.string('company_vat', 10)
			table.string('billing_address', 255)
			table.string('delivery_address', 255)
			table.string('phone', 14).notNullable()
			table.string('vat', 10)
			table.integer('status_id').notNullable()
			table
				.foreign('status_id')
				.references('account_statuses.id')
				.deferrable('deferred')
			table.string('note', 255)	
			table.string('password', 255).notNullable()
			table.string('role', 255).notNullable()
			table.timestamps(true, true)
		})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTable('accounts')
		.dropTable('account_statuses')
}
