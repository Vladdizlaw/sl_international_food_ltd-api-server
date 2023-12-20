/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.dropTableIfExists('product_categories')
		.createTable('product_categories', function (table) {
			table.increments('id')
			table.string('name', 255).unique().notNullable()
			table.timestamps(true, true)
		})
		.dropTableIfExists('products')
		.createTable('products', function (table) {
			table.increments('id')
			table.string('name', 255).unique().notNullable()
			table.integer('category_id').notNullable()
			table
				.foreign('category_id')
				.references('product_categories.id')
				.deferrable('deferred')
			table.string('country', 255)
			table.string('image_url', 255)
			table.decimal('price').notNullable()
			table.decimal('rrp').notNullable()
			table.integer('stock').notNullable().defaultTo(0)
			table.integer('discount')
			table.integer('shelf_life')
			table.double('unit_size')
			table.string('alc_vol')
			table.string('quantity_pack', 255)
			table.string('unit_mesaure', 255)
			table.timestamps(true, true)
		})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTable('product_categories')
		.dropTable('products')
}
