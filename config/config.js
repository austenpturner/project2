module.exports = {
  development: {
    username: 'root',
    password: 'ms47I60Iq@3M',
    database: 'passport_demo',
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql'
  }
};
