const MySqlDatabase = require('./util/MySqlDatabase');
const MySqlConnection = require('./util/MySqlConnection');
const DbConfig = require("./config");

let poolConnection;

class PCCloudConnection extends MySqlConnection {
  static async getPool() {
    if (!poolConnection) {
      poolConnection = await this.createPool(DbConfig.dbConfig(
      ));
    }
    return poolConnection;
  }

  static async _createPool() {
    if (!poolConnection) {
      poolConnection = await MySqlDatabase.createPool(DbConfig.dbConfig(
      ));
    }
  }

  static async executeSQL(sql, bindParams, target) {
    await this._createPool();
    const result = await MySqlDatabase.executeSQL(sql, bindParams, target, poolConnection);
    return result;
  }

  static async executeSQLligth(sql, bindParams, target) {
    await this._createPool();
    const result = await MySqlDatabase.executeSQLligth(sql, bindParams, target, poolConnection);
    return result;
  }

  

  static async executeInsertUpdateSQL(sql, bindParams) {
    try {
      await this._createPool();
      const result = await poolConnection.query(sql, bindParams);
      const data = {
        insertId: result.insertId,
        affectedRows: result.affectedRows,
        changedRows: result.changedRows,
      };
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PCCloudConnection;