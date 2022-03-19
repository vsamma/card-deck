// import Config from 'knex';

const knexFile = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "root12345",
      database: "katana",
      timezone: "UTC",
      dateStrings: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    debug: true,
  },
  migrations: {
    extension: "ts",
  },
};

export = knexFile;
