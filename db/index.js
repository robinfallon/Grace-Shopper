const { Client } = require("pg");

const client = new Client("postgres://localhost:5432/capstone");

async function createUser({ username, password, seller, shoppingcart }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, seller, shoppingcart)
      VALUES ($1, $2, $3, $4);
    `,
      [username, password, seller, shoppingcart]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function createProduct({
  itemname,
  description,
  price,
  category,
  image,
}) {
  try {
    const result = await client.query(
      `
    INSERT INTO products(itemname, description, price, category, image)
    VALUES ($1, $2, $3, $4, $5);
    `,
      [itemname, description, price, category, image]
    );
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

async function createReview({ productId, userId, review }) {
  try {
    const result = await client.query(
      `
    INSERT INTO reviews("productId", "userId", review )
    VALUES ($1, $2, $3);
    `,
      [productId, userId, review]
    );
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// async function getAllProducts() {
//   const { rows } = await client.query(
//     `
//     SELECT * FROM products
//     `
//   );
//   return rows;
// }

async function getAllProducts() {
  const { rows } = await client.query(`
   SELECT id, itemname, description, price, category, image
   FROM products;
  `);
  const productswithreviews = await Promise.all(
    rows.map(async (product) => {
      const { rows: reviewIds } = await client.query(
        `
      SELECT *
      FROM reviews
      WHERE "productId"=$1
      `,
        [product.id]
      );
      const reviews = await Promise.all(
        reviewIds.map((review) => getReviewsByID(review.id))
      );
      product.reviews = reviews;
      return product;
    })
  );
  return productswithreviews;
}

async function getProductsById(id) {
  try {
    const { rows } = await client.query(
      `
    SELECT * 
    FROM products
    WHERE id=$1
    `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT username, seller, shoppingcart
    FROM users;
  `
  );

  return rows;
}

async function getAllTaxes(){
  const {rows} = await client.query(
    `
    SELECT state, rate
    FROM taxrates;
    `
  );
  return rows;
}

async function createTaxRate({ state, rate}){
  try {
    const result = await client.query(
      `
    INSERT INTO taxrates(state, rate)
    VALUES ($1, $2);
    `,
      [state, rate]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function getUsersByID(id) {
  try {
    const { rows } = await client.query(
      `
    SELECT username, seller, shoppingcart
    FROM users
    WHERE id=$1
    `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllReviews() {
  const { rows } = await client.query(
    `
    SELECT * FROM reviews
    `
  );
  return rows;
}

async function getReviewsByID(id) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM reviews
    WHERE id=$1
    `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  getAllUsers,
  createUser,
  createProduct,
  getAllProducts,
  getAllReviews,
  createReview,
  getProductsById,
  getUsersByID,
  getReviewsByID,
  getAllTaxes,
  createTaxRate,
};
