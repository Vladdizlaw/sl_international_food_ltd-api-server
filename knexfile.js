// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	production: {
		client: 'postgresql',
		connection: {
			database: 'SL_INTERNATIONAL_FOODS_LTD',
			user: 'root_admin',
			password: 'Z0h1!b8*s4$'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'accounts'
		}
	}
}
