/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
		table.increments('id');
		table.string('item_name', 255).unique().notNullable();
		table.string('item_code', 255).notNullable()
		table.string('barcode', 255)
		table.string('country_name', 255)
		table.string('image_file', 255).notNullable()
		table.decimal('price').notNullable()
		table.decimal('unit_size')
		table.string('quantity_pack', 255)
		table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
