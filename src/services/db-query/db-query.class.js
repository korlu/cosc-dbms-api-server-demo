/* eslint-disable no-unused-vars */
exports.DbQuery = class DbQuery {
  constructor(options) {
    this.options = options || {};
    this.methods = {
      executeSQL: ['params']
    };
  }

  async executeSQL(params) {
    const {
      db
    } = this.options;

    if (!params.query.sql) {
      return {
        message: 'Please provide a SQL statement.',
        hint: 'Use query.sql = \'SELECT * FROM Table1;\''
      };
    }

    try {
      const q = db.raw(params.query.sql);
      const result = await q;
      return result;
    } catch (error) {
      console.log(error.message);
      return {
        error: error.message
      };
    }
  }

  async find(params) {
    // const { db } = this.options;

    // const q = db.raw('SELECT * FROM TABLE');
    // const res = await q;
    // return res;
    // // return [];

    return await this.executeSQL(params);
  }

  async get(id, params) {
    return {
      name: 'api-server',
      description: 'Database Management Systems term project API template',
      version: '1.0.0',
      author: {
        name: 'Dr. Bill Thompson',
        email: 'wvthompson@towson.edu'
      },
      params
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return {
      id
    };
  }
};
