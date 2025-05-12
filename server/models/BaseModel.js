const { pool } = require('../config/database');

class BaseModel {
  constructor(tableName) {
    if (!tableName) {
      throw new Error('Table name is required for BaseModel');
    }
    this.tableName = tableName;
  }

  async findAll(conditions = {}, orderBy = 'id DESC') {
    try {
      if (typeof conditions !== 'object') {
        throw new Error('Conditions must be an object');
      }

      let query = `SELECT * FROM ${this.tableName}`;
      const values = [];
      
      if (Object.keys(conditions).length > 0) {
        const whereClause = Object.keys(conditions)
          .map(key => `${key} = ?`)
          .join(' AND ');
        query += ` WHERE ${whereClause}`;
        values.push(...Object.values(conditions));
      }
      
      if (orderBy) {
        // Sanitize orderBy to prevent SQL injection
        const sanitizedOrderBy = orderBy.replace(/[^a-zA-Z0-9_,\s]/g, '');
        query += ` ORDER BY ${sanitizedOrderBy}`;
      }

      const [rows] = await pool.execute(query, values);
      return rows;
    } catch (error) {
      console.error(`Error in findAll for ${this.tableName}:`, error);
      throw new Error(`Error in findAll: ${error.message}`);
    }
  }

  async findById(id) {
    try {
      if (!id) {
        throw new Error('ID is required for findById');
      }

      const [rows] = await pool.execute(
        `SELECT * FROM ${this.tableName} WHERE id = ?`,
        [id]
      );
      return rows[0];
    } catch (error) {
      console.error(`Error in findById for ${this.tableName}:`, error);
      throw new Error(`Error in findById: ${error.message}`);
    }
  }

  async create(data) {
    try {
      if (!data || typeof data !== 'object') {
        throw new Error('Data must be an object');
      }

      if (Object.keys(data).length === 0) {
        throw new Error('No data provided for create');
      }

      const columns = Object.keys(data).join(', ');
      const placeholders = Object.keys(data).map(() => '?').join(', ');
      const values = Object.values(data);

      const [result] = await pool.execute(
        `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`,
        values
      );

      return { id: result.insertId, ...data };
    } catch (error) {
      console.error(`Error in create for ${this.tableName}:`, error);
      throw new Error(`Error in create: ${error.message}`);
    }
  }

  async update(id, data) {
    try {
      if (!id) {
        throw new Error('ID is required for update');
      }

      if (!data || typeof data !== 'object') {
        throw new Error('Data must be an object');
      }

      if (Object.keys(data).length === 0) {
        throw new Error('No data provided for update');
      }

      const setClause = Object.keys(data)
        .map(key => `${key} = ?`)
        .join(', ');
      const values = [...Object.values(data), id];

      const [result] = await pool.execute(
        `UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`,
        values
      );

      if (result.affectedRows === 0) {
        throw new Error(`No record found with id ${id}`);
      }

      return true;
    } catch (error) {
      console.error(`Error in update for ${this.tableName}:`, error);
      throw new Error(`Error in update: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error('ID is required for delete');
      }

      const [result] = await pool.execute(
        `DELETE FROM ${this.tableName} WHERE id = ?`,
        [id]
      );

      if (result.affectedRows === 0) {
        throw new Error(`No record found with id ${id}`);
      }

      return true;
    } catch (error) {
      console.error(`Error in delete for ${this.tableName}:`, error);
      throw new Error(`Error in delete: ${error.message}`);
    }
  }

  async executeQuery(query, values = []) {
    try {
      if (!query || typeof query !== 'string') {
        throw new Error('Query must be a string');
      }

      if (!Array.isArray(values)) {
        throw new Error('Values must be an array');
      }

      const [rows] = await pool.execute(query, values);
      return rows;
    } catch (error) {
      console.error(`Error in executeQuery for ${this.tableName}:`, error);
      throw new Error(`Error in executeQuery: ${error.message}`);
    }
  }
}

module.exports = BaseModel; 