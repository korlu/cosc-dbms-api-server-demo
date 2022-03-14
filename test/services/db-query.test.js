const assert = require('assert');
const app = require('../../src/app');

describe('\'db-query\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/data-service');

    assert.ok(service, 'Registered the service');
  });
});
