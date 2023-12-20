/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.dropTableIfExists('invoice_statuses')
		.dropTableIfExists('invoices')
		.createTable('invoice_statuses', function (table) {
			table.increments('id')
			table.string('name', 255).unique().notNullable()
		})
		.createTable('invoices', function (table) {
			table.increments('id')
			table.string('number', 255).unique().notNullable()
			table.integer('status_id').notNullable()
			table
				.foreign('status_id')
				.references('invoice_statuses.id')
				.deferrable('deferred')
			table.integer('account_id').notNullable()
			table
				.foreign('account_id')
				.references('accounts.id')
				.deferrable('deferred')
			table.integer('order_id').notNullable()
			table
				.foreign('order_id')
				.references('orders.id')
				.deferrable('deferred')
			table.integer('total_amount').notNullable()
			table.timestamps(true, true)
		})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTable('invoice_statuses')
		.dropTable('invoices')
}
