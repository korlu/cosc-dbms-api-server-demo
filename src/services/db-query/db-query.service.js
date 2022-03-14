// Initializes the `db-query` service on path `/api/data-service`
const { DbQuery } = require('./db-query.class');
const hooks = require('./db-query.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate'),
    db: app.get('knexClient')
  };

  // Initialize our service with any options it requires
  app.use('/api/data-service', new DbQuery(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/data-service');

  service.hooks(hooks);
};
