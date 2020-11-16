import Knex from "knex";

export async function seed(knex: Knex) {
  await knex('videos').insert([
    { youtube_id: 'yqzfo0gRgFw', time_duration:192},
  ])
}