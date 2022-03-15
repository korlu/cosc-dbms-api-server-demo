const moment = require('moment-timezone');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      async context => {
        const items = await context.result;

        if(!items.length) return context;

        const columns = Object.keys(items[0]);

        items.forEach((item, index) => {
          const values = Object.values(item);
          for (const key in values) {
            if(moment.isDate(values[key])) {
              // items[index][key] = moment(values[key]).tz('UTC').format('MM/DD/YYYY');
              items[index][columns[key]] = moment(values[key]).tz('UTC').format('MM/DD/YYYY');
            }
          }
        });
        // context.result = items;
        return context;
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
