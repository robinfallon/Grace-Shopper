const {
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
} = require("./index");

async function createInitialReviews() {
  try {
    console.log("Starting to create reviews");

    const review1 = await createReview({
      id: 1,
      userId: 1,
      review: "It works at least",
    });

    console.log("Finished creating reviews!");
  } catch (error) {
    throw error;
  }
}

async function createInitialProducts() {
  try {
    console.log("Starting to create products...");

    const lappytop = await createProduct({
      itemname: "ASUS VivoBook L203MA Laptop",
      description:
        "15.6 Full HD display The 1920 x 1080 resolution boasts impressive color and clarity. Energy-efficient LED backlight.. AMD Radeon RX Vega 10 Integrated graphics chipset with shared video memory provides solid image quality for Internet use, movies, basic photo editing and casual gaming.",
      price: "230.99",
      category: "computer",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SL1500_.jpg",
    });
    const tabletytablet = await createProduct({
      itemname: "Fire 7 Tablet",
      description:
        '7" IPS display; 16 or 32 GB of internal storage (add up to 512 GB with microSD) Faster 1.3 GHz quad-core processor Up to 7 hours of reading, browsing the web, watching video, and listening to music Hands-free with Alexa, including on/off toggle 1 GB of RAM 2 MP front and rear-facing cameras with 720p HD video recording Dual-band Wi-Fi',
      price: "49.99",
      category: "tablet",
      image:
        "https://static.techspot.com/images/products/2019/tablets/org/2019-06-18-product-3.jpg",
    });
    console.log("Finished creating products!");
  } catch (error) {
    console.error("Error creating products!");
    throw error;
  }
}

async function createTables() {
  try {
    await client.query(`
         CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar(255) UNIQUE NOT NULL,
          password varchar(255) NOT NULL,
          seller varchar(255) NOT NULL,
          shoppingcart varchar(255)
      );
     CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        itemname varchar(255) UNIQUE NOT NULL,
        description text NOT NULL,                                                    
        price varchar(255) NOT NULL,                                                 
        category varchar(255) NOT NULL,
        image varchar(255)
      );  
      CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          "productId" SERIAL REFERENCES products (id),
          "userId" SERIAL REFERENCES users (id),
          review text NOT NULL
      );
     CREATE TABLE productreviews (
          id SERIAL PRIMARY KEY,
          "productId" SERIAL REFERENCES products (id),
          "reviewId" SERIAL REFERENCES reviews (id),
          UNIQUE("productId", "reviewId")
      );
    `);
  } catch (error) {
    throw error;
  }
}
// "username" INTEGER REFERENCES users(id),
//                       "productId" INTEGER REFERENCES products(id),

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS taglinks;
    DROP TABLE IF EXISTS reviews;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    const arman = await createUser({
      username: "arman",
      password: "bertie99",
      seller: true,
    });
    const james = await createUser({
      username: "james",
      password: "bertie99",
      seller: true,
    });
    const robin = await createUser({
      username: "robin",
      password: "bertie99",
      seller: true,
    });
    console.log(arman, james, robin);

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialProducts();
    await createInitialReviews();
    const review = await getAllReviews();
    console.log("reviews", review);
    const products = await getAllProducts();
    console.log("line 104", products);
    const users = await getAllUsers();
    console.log(users);
    const prod2 = await getProductsById(1);
    console.log("Product 2", prod2);
    const user2 = await getUsersByID(2);
    console.log("User ID:", user2);
    const reviewed = await getReviewsByID(1);
    console.log("review 2", reviewed);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
