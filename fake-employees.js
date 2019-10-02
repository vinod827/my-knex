const faker = require("faker");

const createFakeEmployees = () => ({
    email: faker.internet.email(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
});

exports.seed = async function(knex, Promise) {

};