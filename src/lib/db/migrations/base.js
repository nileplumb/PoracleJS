exports.up = async function (knex) {
	await knex.schema.createTable('humans', (table) => {
		table.string('id').primary().notNullable()
		table.string('type').notNullable
		table.string('name').notNullable()
		table.boolean('enabled').notNullable().defaultTo(true)
		table.text('area').notNullable().defaultTo('[]')
		table.float('latitude').notNullable().defaultTo(0)
		table.float('longitude').notNullable().defaultTo(0)
		table.integer('fails').notNullable().defaultTo(0)
		table.dateTime('last_checked').notNullable().defaultTo(knex.fn.now())
	})

	await knex.schema.createTable('monsters', (table) => {
		table.string('id').notNullable()
		table.foreign('id').references('humans.id').onDelete('CASCADE')
		table.text('ping').notNullable()
		table.boolean('clean').notNullable().defaultTo(false)
		table.integer('pokemon_id').notNullable()
		table.integer('distance').notNullable()
		table.integer('min_iv').notNullable()
		table.integer('max_iv').notNullable()
		table.integer('min_cp').notNullable()
		table.integer('max_cp').notNullable()
		table.integer('min_level').notNullable()
		table.integer('max_level').notNullable()
		table.integer('atk').notNullable()
		table.integer('def').notNullable()
		table.integer('sta').notNullable()
		table.integer('template').notNullable()
		table.integer('min_weight').notNullable()
		table.integer('max_weight').notNullable()
		table.integer('form').notNullable()
		table.integer('max_atk').notNullable()
		table.integer('max_def').notNullable()
		table.integer('max_sta').notNullable()
		table.integer('gender').notNullable()
		table.unique(['id', 'pokemon_id', 'min_iv', 'max_iv', 'min_cp', 'max_cp', 'min_level', 'max_level', 'atk', 'def', 'sta', 'min_weight', 'max_weight', 'form', 'max_atk', 'max_def', 'max_sta', 'gender'], 'monsters_tracking')
	})

	await knex.schema.createTable('raid', (table) => {
		table.string('id').notNullable()
		table.foreign('id').references('humans.id').onDelete('CASCADE')
		table.text('ping').notNullable()
		table.boolean('clean').notNullable().defaultTo(false)
		table.integer('pokemon_id').notNullable()
		table.boolean('exclusive').defaultTo(false)
		table.integer('template').notNullable()
		table.integer('distance').notNullable()
		table.integer('team').notNullable()
		table.integer('level').notNullable()
		table.integer('form').notNullable()
		table.unique(['id', 'pokemon_id', 'exclusive', 'level', 'team'], 'raid_tracking')
	})

	await knex.schema.createTable('egg', (table) => {
		table.string('id').notNullable()
		table.foreign('id').references('humans.id').onDelete('CASCADE')
		table.text('ping').notNullable()
		table.boolean('clean').notNullable().defaultTo(false)
		table.boolean('exclusive').defaultTo(false)
		table.integer('template').notNullable()
		table.integer('distance').notNullable()
		table.integer('team').notNullable()
		table.integer('level').notNullable()
		table.unique(['id', 'team', 'exclusive', 'level'], 'egg_tracking')
	})

	await knex.schema.createTable('quest', (table) => {
		table.string('id').notNullable()
		table.foreign('id').references('humans.id').onDelete('CASCADE')
		table.text('ping').notNullable()
		table.boolean('clean').notNullable().defaultTo(false)
		table.integer('reward').notNullable()
		table.integer('template').notNullable()
		table.boolean('shiny').defaultTo(false)
		table.integer('reward_type').notNullable()
		table.integer('distance').notNullable()
		table.unique(['id', 'reward_type', 'reward'], 'quest_tracking')
	})

	await knex.schema.createTable('invasion', (table) => {
		table.string('id').notNullable()
		table.foreign('id').references('humans.id').onDelete('CASCADE')
		table.text('ping').notNullable()
		table.boolean('clean').notNullable().defaultTo(false)
		table.integer('distance').notNullable()
		table.integer('template').notNullable()
		table.integer('gender').notNullable()
		table.integer('grunt_type').notNullable()
		table.unique(['id', 'gender', 'grunt_type'], 'invasion_tracking')
	})

}

exports.down = async function (knex) {

}