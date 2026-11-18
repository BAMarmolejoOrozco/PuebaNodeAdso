const pool = require('../config/db');

const getAllProducts = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM products WHERE id'
);
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM products WHERE id = ?', [id]
);
  return rows[0];
};

const createProduct = async ({ name, price, description }) => {
    const [result] = await pool.query(
        'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
        [name, price, description]
    );
    return { id: result.insertId, name, price, description };
};

const updateProduct = async (id, { name, price, description }) => {
    const [result] = await pool.query(
        'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
        [name, price, description, id]
    );
    return result.affectedRows > 0 ? { id, name, price, description } : null;
};

const deleteProduct = async (id) => {
    const [result] = await pool.query(
        'DELETE FROM products WHERE id = ?',
        [id]
    );
    return result.affectedRows > 0;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};