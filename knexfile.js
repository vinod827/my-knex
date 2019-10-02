// Update with your config settings.

module.exports = {
  development: {
    client: "mssql",
    connection: {
      host: "sqlau301mel5167.globaltest.anz.com\\SymphonyTB",
      user: "AUSQLTBAPIDEVDsa",
      password: "Tr@d3b8l3r",
      database: "SYMTB01D",
    },
    migrations: {
      directory: "./migrations",
      tableName: "Migrations_Employee",
    },
  },
};