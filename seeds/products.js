/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('products').del()
	await knex('products').insert([
		{
			item_name: 'Cesu Premium Original Lager',
			item_code: '01',
			barcode: 'Z123KW',
			country_name: 'US',
			price: 1000,
			unit_size: 0.568,
			quantity_pack: 24,
			category_id: 21,
			image_file: 'none',
      
		},
		{
			item_name: 'Cesu Premium Amber Lager',
			item_code: '02',
			barcode: 'Z123KJ',
			country_name: 'US',
			price: 1000,
			unit_size: 0.568,
			quantity_pack: 24,
			category_id: 21,
			image_file: 'none'
		},
		{
			item_name: 'Volfas Engelman Pilsner',
			item_code: '03',
			barcode: 'Z1346SW',
			country_name: 'US',
			price: 1000,
			unit_size: 0.568,
			quantity_pack: 24,
			category_id: 24,
			image_file: 'none'
		},
		{
			item_name: 'Volfas Engelman ‘Imperial Porter',
			item_code: '04',
			barcode: 'L483KW',
			country_name: 'US',
			price: 1200,
			unit_size: 0.568,
			quantity_pack: 20,
			category_id: 23,
			image_file: 'none'
		},
		{
			item_name:
				'Volfas Engelman Flavours of The World India Pale Ale',
			item_code: '05',
			barcode: 'Z893KW',
			country_name: 'US',
			price: 1500,
			unit_size: 0.568,
			quantity_pack: 24,
			category_id: 22,
			image_file: 'none'
		}
	])
}
