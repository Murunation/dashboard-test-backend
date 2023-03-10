import { pool } from "../config/mysql-config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(`SELECT * FROM product limit ${limit}`);
  return rows;
}
export async function getProduct(id) {
  const [row] = await pool.query(`SELECT * FROM employees where emp_no=${id}`);
  return row[0];
}

export async function createProduct(
  name,
  brand_id,
  category_id,
  created_date,
  description,
  sale,
  price,
  stock,
  image
) {
  const [result] = await pool.query(
    `INSERT INTO product VALUES {?, ?, ?, ?, ?, ?, ?, ?, ?, ?}`,
    {
      name,
      brand_id,
      category_id,
      created_date,
      description,
      sale,
      price,
      stock,
      image,
    }
  );
  return result;
}

export async function getBrand() {
  let [brand] = await pool.query(`SELECT * FROM brands`);
  return brand;
}
// export async function deleteProduct(id) {
//   const [row] = await pool.query(`DELETE FROM product WHERE id=${id}`);
//   return row;
// }
