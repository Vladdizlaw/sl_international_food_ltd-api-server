/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.dropTableIfExists('order_items')
		.dropTableIfExists('order_statuses')
		.dropTableIfExists('orders')
		.createTable('order_statuses', function (table) {
			table.increments('id')
			table.string('name', 255).unique().notNullable()
		})
		.createTable('orders', function (table) {
			table.increments('id')
			table.integer('status_id').notNullable()
			table
				.foreign('status_id')
				.references('order_statuses.id')
				.deferrable('deferred')
			table.integer('account_id').notNullable()
			table
				.foreign('account_id')
				.references('accounts.id')
				.deferrable('deferred')
			table.integer('total_amount').notNullable()
			table.timestamp('delivery_date')
			table.integer('discount')
			table.timestamps(true, true)
		})
		.createTable('order_items', function (table) {
			table.increments('id')
			table.integer('order_id')
			table
				.foreign('order_id')
				.references('orders.id')
				.deferrable('deferred')
			table.integer('product_id').notNullable()
			table
				.foreign('product_id')
				.references('products.id')
				.deferrable('deferred')
			table.integer('product_quantity').notNullable()
			table.integer('amount').notNullable()
			table.integer('account_id').notNullable()
			table
				.foreign('account_id')
				.references('accounts.id')
				.deferrable('deferred')
			table.timestamps(true, true)
		})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTable('orders')
		.dropTable('order_statuses')
		.dropTable('order_items')
}
