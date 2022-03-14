const dbQuery = require('./db-query/db-query.service.js');
const employee = require('./employee/employee.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(dbQuery);
  app.configure(employee);
};
