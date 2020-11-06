const MySqlDb = require('mysql');
const Util = require('util');

class MySqlConnection {
  static async createPool(dbConfig) {
    console.log('Creating pool connection.');
    const poolConnection = MySqlDb.createPool(dbConfig);
    poolConnection.queryPromise = Util.promisify(poolConnection.query);
    poolConnection.getConnectionPromise = Util.promisify(poolConnection.getConnection);
    poolConnection.endPromise = Util.promisify(poolConnection.end);
    console.log('Pool connection created.');
    return poolConnection;
  }


  static async getPool() {
    throw new BusinessError({
      code: ErrorConstants.DB_ERROR.code,
      httpCode: HttpConstants.INTERNAL_SERVER_ERROR_STATUS.code,
      messages: ['Esta función debe ser implementada.'],
    });
  }

  static async closePool(pool) {
    try {
      console.log('Closing pool connection');
      await pool.endPromise();
      console.log('Pool connection closed');
    } catch (error) {
      console.error(error);
    }
  }

  static async bindQueryParams(connection, sql, bindParams) {
    try {
      let bindSql = `${sql}`;
      Object.keys(bindParams).forEach((tp) => {
        const value = connection.escape(bindParams[tp]);
        bindSql = bindSql.replace(new RegExp(`:${tp}`, 'g'), value);
      });
      return bindSql;
    } catch (error) {
      console.log(error);
    }
  }

  static async getConnection() {
    try {
      console.log('Obtaining database connection.');
      const pool = await this.getPool();
      const connection = await pool.getConnectionPromise();
      console.log('Database connection obtained.');
      return connection;
    } catch (error) {
      console.log(error);
    }
  }

  static async releaseConnection(connection) {
    try {
      console.log('Releasing database connection.');
      connection.release();
      console.log('Database connection released.');
    } catch (error) {
      console.log(error);

    }
  }

  static async closeConnection(connection) {
    try {
      console.log('Closing database connection');
      connection.destroyPromise = Util.promisify(connection.destroy);
      await connection.destroyPromise();
      console.log('Database connection closed');
    } catch (error) {
      console.log(error);
    }
  }


  static async commit() {
   
  }

  
  static async rollback() {
 
  }

  static async _execute(connection, statement) {
    try {
      console.log('Executing SQL statement');
      console.log(statement);
      connection.queryPromise = Util.promisify(connection.query);
      const result = await connection.queryPromise(statement);
      console.log('SQL statement executed');
      return result;
    } catch (error) {
      console.log(error);
    
    }
  }

  static async executeSQLStatement({
    connection,
    statement,
    bindParams = {},
    target,
  }) {
    try {
      connection.queryPromise = Util.promisify(connection.query);
      let result;
      if (typeof statement === 'string') {
        const query = await this.bindQueryParams(connection, statement, bindParams);
        result = await this._execute(connection, query);
      } else {
        result = await this._execute(connection, statement);
      }

      if (target) {
        const data = result;
        const objects = [];
        data.forEach((obj) => {
          objects.push(ObjectMapper.map(obj, target));
        });
        return objects;
      }

      return result;
    } catch (error) {
      console.log(error);

    }
  }


  static async executeQueryPageable({
    connection,
    projection,
    selection,
    bindParams = {},
    target,
    pagination = { page: 0, size: 1 },
  }) {
    try {
      const offset = Number(pagination.page) * Number(pagination.size);
      const query = `
        ${projection} ${selection} limit ${offset}, ${Number(pagination.size)}
      `;

      const queryCount = `select count(*) total ${selection}`;
      const resultCount = await this.executeSQLStatement({
        connection: connection, statement: queryCount, bindParams: bindParams,
      });

      const contenido = await this.executeSQLStatement({
        connection: connection, statement: query, bindParams: bindParams, target: target,
      });
      pagination.total = resultCount[0].total;
      return { pagination: pagination, content: contenido };
    } catch (error) {
      console.log(error);
 
    }
  }
}

module.exports = MySqlConnection;