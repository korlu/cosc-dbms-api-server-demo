const { Service } = require('feathers-knex');

exports.Employee = class Employee extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'employee'
    });
  }
};
