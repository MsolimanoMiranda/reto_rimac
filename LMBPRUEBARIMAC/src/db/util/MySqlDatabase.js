const MySqlDb = require('mysql');
const Util = require('util');
const ObjectMapper = require('./ObjectMapper');


class MySqlDatabase {
  static async createPool(dbconfig) {
    const poolConnection = MySqlDb.createPool(dbconfig);
    poolConnection.query = Util.promisify(poolConnection.query);
    poolConnection.end = Util.promisify(poolConnection.end);
    return poolConnection;
  }

  static async closePool(poolConnection) {
    try {
      if (poolConnection) {
        await poolConnection.end();
      }
    } catch (error) {
      console.error(error);

    }
  }

  static async executeSQL(sql, bindParams, target, pool) {
 
    try {
      const result = await pool.query(
        sql, bindParams
      );

      const data = result;
      const list = [];
      for (let i = 0, size = data.length; i < size; i += 1) {
        list.push(ObjectMapper.map(data[i], target));
      }
      return list;
    } catch (error) {
      console.error(error);

    }
  }


  static async executeSQLligth(sql, bindParams, target, pool) {
 
    try {
      const result = await pool.query(
        sql, bindParams
      );

      const data = result;
     
      return data;
    } catch (error) {
      console.error(error);

    }
  }
}

module.exports = MySqlDatabase;