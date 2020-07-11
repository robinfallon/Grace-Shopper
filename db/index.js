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

async function getAllTaxes() {
  const { rows } = await client.query(
    `
    SELECT state, rate
    FROM taxrates;
    `
  );
  return rows;
}

async function createTaxRate({ state, rate }) {
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

async function getReviewsByUserID(id) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM reviews
    WHERE "userId"=$1
    `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getReviewsByProductID(id) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM reviews
    WHERE "productId"=$1
    `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateReview(productId, fields = {}) {
  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 1}`)
    .join(", ");
  try {
    if (setString.length > 0) {
      const { rows } = await client.query(
        `
        UPDATE reviews
        SET ${setString}
        WHERE id=${productId}
        RETURNING *;
      `,
        Object.values(fields)
      );
      return rows;
    }
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  if (!username || !password) {
    return;
  }
  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const matchingPassword = bcrypt.compareSync(password, user.password);
    if (!matchingPassword) return;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(userName) {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [userName]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function destroyReview(id) {
  try {
    console.log(id, "id");
    const { rows } = await client.query(
      `
      DELETE FROM reviews
      WHERE id=${id}
      RETURNING *;
      `
    );
    console.log(rows);
  } catch ({ name, message }) {
    console.log({ name, message });
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
  getReviewsByProductID,
  getReviewsByUserID,
  updateReview,
  getUser,
  getUserByUsername,
  destroyReview,
};
