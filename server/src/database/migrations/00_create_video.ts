import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('video', table => {
    table.increments('id').primary();
    table.string('youtube_id').notNullable;
    table.bigInteger('time_duration');
    table.bigInteger('time_watched');
    table.boolean('was_watched').defaultTo(false).notNullable;
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('video')
}