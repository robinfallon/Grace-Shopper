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
  getAllTaxes,
  createTaxRate,
} = require("./index");

async function createInitialReviews() {
  try {
    console.log("Starting to create reviews");

    const review1 = await createReview({
      productId: 1,
      userId: 1,
      review: "It works at least",
    });
    const review2 = await createReview({
      productId: 2,
      userId: 1,
      review: "It works at least",
    });
    const review3 = await createReview({
      productId: 3,
      userId: 3,
      review: "Lenovo makes a great tablet with this one!",
    });
    const review4 = await createReview({
      productId: 2,
      userId: 1,
      review: "It's still working!",
    });
    const review5 = await createReview({
      productId: 4,
      userId: 3,
      review: 'I promised I would give an updated review after I had owned the tablet for awhile: Honest Reviewer gave a VERY comprehensive review on April 26, 2019, so I will only add a few things. Thin and light weight, easy to hold although I would recommend a case of some kind for any tablet. Screen is beautiful. Speakers/sound is the best we have had in a tablet. No headphone jack understandable to get this thin so you will need bluetooth enabled headphones or speakers for external audio. Our Wi-Fi performance has been good, we have tried to duplicate the wi-fi issue reported by others that wi-fi reception varies with tablet orientation and have not been able to replicate the problem. The default Samsung keyboard covered up a critical portion of one account sign in screen, if this happens to you I would recommend installing Gboard (the free Google keyboard) or Swiftkey ($), which allow vertical size adjustment of the keyboard, before setting up other apps -- you can always switch back to the Samsung keyboard later if you like it better. Seven months in, no problems!',
    });
    const review6 = await createReview({
      productId: 4,
      userId: 3,
      review: '',
    });
    const review7 = await createReview({
      productId: 5,
      userId: 3,
      review: 'This is my third Air and I LOVE this model — and wonder why it’s not FLYING off the (virtual) Amazon shelves! A little less than my Pro, more than the 6th-gen iPad, this is the best in-between model available, I believe. Don’t bother with the 64gig model — the 256 WiFi is the base to shoot for (in the years that I’ve had cell services, I’ve found that I measured the times used over one year in minutes — I did the math & found that I was overpaying for possible, rather than actual, use). Works well with my 1st gen Pencils — FAST, light and a genuine pleasure to use. I’ve three current iPads and this is my favorite daily use model!',
    });
    const review8 = await createReview({
      productId: 6,
      userId: 3,
      review:
      'Okay. I gave it 5 stars because I love the camera itself and do not feel I should downgrade my review because of what the listing says. Also it would not let me put in four and a half. But any buyer should know that the listing says that it comes with "64" of something regarding memory. It does not say 64 of what. Could be Kbites, could be Mbites, could be Gbites, could be raw fish or tooth faerie droppings. Who knows? Turns out there is ZERO. ZIP. NADA. So if you order one of these be sure to buy some memory because it is not included and the camera would be useless without it. Good thing I am a bit of a memory hog and bought an "extra" or I would not have been able to use it at all until I ordered some.',
    });
    const review9 = await createReview({
      productId: 7,
      userId: 2,
      review: "I love this little camera!! For the price, I'm actually quite impressed by the camera's photo and video quality. If someone was wanting a nice quality camera at an affordable price, I definitely recommend this one.",
    });
    const review10  = await createReview({
      productId: 8,
      userId: 1,
      review: "Replacement for my older model Z-5010 which still takes good photos but the recycle time between shots has increased. The AZ-252 uses standard AA batteries and the 25X zoom is about the hand-held limit. The 14 or 16 MP files have more than enough detail for processing. The camera is light-weight, carries easily in a waist pack and the lens cap fits tightly. I find the pressure for focus preview on the shutter button is a bit too sensitive and I wind up with a few inadvertent photos. Very good camera for the price with more features than I will ever use.",
    });
    const review11  = await createReview({
      productId: 9,
      userId: 2,
      review: 'I was a little reluctant to buy this. I Used it for 2 weeks and it’s awesome. I bought my wife a new one from apple and we can’t tell the difference between our phones. Great battery life, large screen, I went from an IPhone 7 256 to this iPhone XSmax 256 and I’m very impressed. I use it a lot.',
    });
    const review12 = await createReview({
      productId: 10,
      userId: 3,
      review: "I will be utmost honest here. This is my first device review. I was hesitant to order a Certified Refurbished phone. Especially since it is...a phone. The meat and bone of daily life and communication. However, upon receiving the phone, everything was inside a white uniform box. Nothing special and nothing damaged at all. Simplistic and efficient packaging. The phone works great and no one can tell it isn't Brand new. Absolutely no scratches or signs it has been touched by another human. 10/10 item and you save 100$ in the process by getting refurbished! I am switching from an iPhone 6 to this S9 on ATnT. Simply pull the SIM out and insert into s9 and you are ready to go.",
    });
    const review13  = await createReview({
      productId: 11,
      userId: 2,
      review: "The hardware demands for 90% of the tasks people use their phones for is fairly low. I've been buying phones in the budget tier for many years now. I need some more time with it, but the Moto G Power is probably the best one I've used.",
    });
    console.log("Finished creating reviews!");
  } catch (error) {
    throw error;
  }
}

// const  = await createReview({
//   productId: ,
//   userId: ,
//   review: "",
// });

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
        'Stunning performance and stylish design combine in this quick, powerful Android tablet, powered by a Quad-Core, 2.0 GHz processor and Android 9 Pie The modern, refined look and feel are accentuated by the full metal cover and 82% panel-to-body ratio The stunning 8" HD (1280 x 800) display brings you a crisper and brighter image, so you can watch your favorite movies and shows without missing a detail Stay connected with built-in Bluetooth 5.0 and WiFi 802.11 a/b/g/n/ac (2.4/5 GHz), and capture the moment with front and rear cameras Long-life battery – watch or browse all day long without the need to recharge with 5000 mAh battery capacity',
      price: "99.99",
      category: "tablet",
      image:
        "https://static.techspot.com/images/products/2019/tablets/org/2019-06-18-product-3.jpg",
    });
    const tablet2 = await createProduct({
      itemname: "Lenovo Tab M8 Tablet",
      description:
        '7" IPS display; 16 or 32 GB of internal storage (add up to 512 GB with microSD) Faster 1.3 GHz quad-core processor Up to 7 hours of reading, browsing the web, watching video, and listening to music Hands-free with Alexa, including on/off toggle 1 GB of RAM 2 MP front and rear-facing cameras with 720p HD video recording Dual-band Wi-Fi',
      price: "49.99",
      category: "tablet",
      image:
        "https://drive.google.com/uc?export=view&id=1BbivP-aSXYR6t5JnfazXRepGriM3XE4L",
    });
      const tablet3 = await createProduct({
        itemname: "Samsung Galaxy Tab S5e 128GB WiFi Tablet",
        description:
          'Weighing in at less than a pound, the incredibly slim Galaxy Tab S5e is perfect for your on-the-go life. Watch your favorite shows and movies come to life on a corner-to-corner 10. 5" Super AMOLED display. Plus, control lights, door locks, the thermostat and other connected home devices right from your tablet with SmartThings. It’s everything you need, all on a thin and light Tab S5e you’ll never want to put down.',
        price: "454.38",
        category: "tablet",
        image: 'https://icdn2.digitaltrends.com/image/digitaltrends/samsung-galaxy-tab-s5e_1-416x3467.jpg',
      });
      const tablet4 = await createProduct({
        itemname: "Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray (Latest Model)",
        description:
        '10.5-inch Retina Display with True Tone and wide Color A12 Bionic chip Touch ID Fingerprint Sensor and Apple Pay 8MP back camera, 7MP FaceTime HD Front camera Stereo speakers 802.11ac Wi-Fi Up to 10 hours of battery life Lightning Connector for charging and accessories iOS 12 with group FaceTime  shared augmented reality experiences, screen time, and more',
        price: "469.00",
        category: "tablet",
        image: 'https://images.idgesg.net/images/article/2019/04/ipad-air-2019-browsing-100792687-large.jpg',
      });
      const camera1 = await createProduct({
        itemname: 'Canon PowerShot ELPH 180 Digital Camera w/ Image Stabilization and Smart AUTO Mode (Silver), 0.90in. x 3.70in. x 2.10in. - 1093C001',
        description: 'Canon PowerShot ELPH 180 Camera. White Balance Control-Auto, Daylight, Cloudy, Tungsten, Fluorescent, Fluorescent H, Custom, Built-in Flash: Auto, On, Slow Synchro, Off , Flash Range: 1.6-9.8 ft. (W), 4.3-4.9 ft. (T), 50.0cm - 3.0m (W), 1.3-1.5m (T). Focusing Range: Normal: 2.0 in. (5.0cm) - infinity (W), 4.3 ft. (1.3m) - infinity (T), Auto: 0.4 in. (1.0cm) - infinity (W), 4.3 ft. (1.3m) - infinity (T), Macro: 0.4 in. - 1.6 ft. (1-50cm) (W), Infinity: 9.8 ft. (3.0m) - infinity (W), 9.8 ft. (3.0m) - infinity (T)',
        price: '109.00',
        category: 'Cameras',
        image: 'https://i.ytimg.com/vi/K_z3dIKqSuQ/maxresdefault.jpg',
      });
      const camera2 = await createProduct({
        itemname: 'Kodak PIXPRO Astro Zoom AZ421-RD 16MP Digital Camera with 42X Optical Zoom and 3" LCD Screen (Red)',
        description: 'Passion and performance go hand in hand with our KODAK PIXPRO AZ421 digital camera from the Astro Zoom Collection. A 42X ultra long zoom lens with optical image stabilization delivers crisp, clear 16 megapixel close-ups, panorama or HD videos. Auto scene, object tracking, post-editing features and a host of powerful yet user-friendly settings make photography easy, fun and zero hassle. KODAK PIXPRO Cameras. Tell your story. Focal length 43 mm (wide) 108.6 mm (Tele)',
        price: '145.99',
        category: 'Cameras',
        image: 'https://i.pinimg.com/originals/26/01/da/2601dac544b483474d66533013a561d3.jpg',
      });
      const camera3 = await createProduct({
        itemname: 'Kodak PIXPRO Astro Zoom AZ252-WH 16MP Digital Camera with 25X Optical Zoom and 3" LCD (White)',
        description: 'Discover a world of creativity at your fingertips. The AZ252 is the perfect bridge camera to pursue your passion for photography. With 16 Megapixels, 25x optical zoom and a wider angle lens than traditional models, This camera might just become your new best friend. Kodak PIXPRO digital cameras - tell your story.',
        price: '129.00',
        category: 'Cameras',
        image: 'https://m.media-amazon.com/images/I/31ozd3OibhL.jpg',
      });
      const phone1 = await createProduct({
        itemname: 'Apple iPhone XS Max, 64GB, Gold - Fully Unlocked (Renewed)',
        description: "iPhone XS Max has a 6.5-inch all-screen Super Retina display. The back is glass, and there's a stainless steel band around the frame. The side button is on the right side of the device. There are 12MP wide-angle and telephoto cameras on the back. There's a Quad-LED True Tone flash on the back and a SIM tray on the right side that holds a fourth form factor (4FF) nano-SIM card. The IMEI is etched on the SIM tray.",
        price: '549.99',
        category: 'Phones',
        image: 'https://www.techwipoca.com/wp-content/uploads/2019/12/71isxv6Wd-L._AC_SX679_.jpg',
      });
      const phone2 = await createProduct({
        itemname: 'Samsung Galaxy S9, 64GB, Lilac Purple - Fully Unlocked (Renewed)',
        description: '5.8-inch Super AMOLED Capacitive Touchscreen, 1440 x 2960 pixels with Corning Gorilla Glass 5 Android OS, Qualcomm Snapdragon 845, Octa-Core (4x2.7 GHz & 4x1.7 GHz), Adreno 630 Internal Memory: 64GB, 4GB RAM - microSD Up to 400GB 12MP Camera with f/1.5-2.4, 26mm lens, Dual Pixel PDAF & 8MP Front Camera with f/1.7, 25mm lens, Auto HDR GSM Unlocked',
        price: '268.88',
        category: 'Phones',
        image: 'https://images-na.ssl-images-amazon.com/images/I/716uqF6uUgL.jpg',
      });
      const phone3 = await createProduct({
        itemname: 'Moto G Power Unlocked Made for US by Motorola 4/64GB 16MP Camera 2020 Black',
        description: 'Set yourself free from chargers and outlets. Say hello to moto g power. With its powerful 5000 mAh battery, you can go up to three full days1 on a single charge—and do the things you want without worrying about recharging. Shoot a panorama, close up, or anything in between with a versatile triple camera system. And thanks to the 6. 4” Max Vision Full HD+ display and dual stereo speakers tuned by Dolby, you’ll have an all-access pass to the world of entertainment. New moto g power. Power for life.',
        price: '249.99',
        category: 'Phones',
        image: 'https://i-cdn.phonearena.com/images/article/123580-two_lead/The-Moto-G-Stylus-and-Moto-G-Power-are-already-on-sale-at-crazy-low-prices.jpg',
      });
                  
    console.log("Finished creating products!");
  } catch (error) {
    console.error("Error creating products!");
    throw error;
  }
}

// const  = await createProduct({
//   itemname: '',
//   description: '',
//   price: '',
//   category: '',
//   image: '',
// });

async function seedTaxes() {
  try{
    console.log("Creating Tax rates")

    const state1 = await createTaxRate({
      state: 'Alabama',
      rate: 9.22,
    });
    const state2 = await createTaxRate({
      state: 'Alaska',
      rate: 1.76,
    });
    const state3 = await createTaxRate({
      state: 'Arizona',
      rate: 8.40,
    });
    const state4 = await createTaxRate({
      state: 'Arkansas',
      rate: 9.47,
    });
    const state5 = await createTaxRate({
      state: 'California',
      rate: 8.66,
    });
    const state6 = await createTaxRate({
      state: 'Colorado',
      rate: 7.65,
    });
    const state7 = await createTaxRate({
      state: 'Connecticut',
      rate: 6.35,
    });
    const state8 = await createTaxRate({
      state: 'Washington D.C.',
      rate: 6.00,
    });
    const state9 = await createTaxRate({
      state: 'Delaware',
      rate: 0,
    });
    const state10 = await createTaxRate({
      state: 'Florida',
      rate: 7.05,
    });
    const state11 = await createTaxRate({
      state: 'Georgia',
      rate: 7.31,
    });
    const state12 = await createTaxRate({
      state: 'Hawaii',
      rate: 4.44,
    });
    const state13 = await createTaxRate({
      state: 'Idaho',
      rate: 6.03,
    });
    const state14 = await createTaxRate({
      state: 'Illinois',
      rate: 9.08,
    });
    const state15 = await createTaxRate({
      state: 'Indiana',
      rate: 7,
    });
    const state16 = await createTaxRate({
      state: 'Iowa',
      rate: 6.94,
    });
    const state17 = await createTaxRate({
      state: 'Kansas',
      rate: 8.68,
    });
    const state18 = await createTaxRate({
      state: 'Kentucky',
      rate: 6,
    });
    const state19 = await createTaxRate({
      state: 'Louisiana',
      rate: 9.52,
    });
    const state20 = await createTaxRate({
      state: 'Maine',
      rate: 5.5,
    });
    const state21 = await createTaxRate({
      state: 'Massachusetts',
      rate: 6.25,
    });
    const state22 = await createTaxRate({
      state: 'Maryland',
      rate: 6,
    });
    const state23 = await createTaxRate({
      state: 'Michigan',
      rate: 6,
    });
    const state24 = await createTaxRate({
      state: 'Minnesota',
      rate: 7.46,
    });
    const state25 = await createTaxRate({
      state: 'Mississippi',
      rate: 7.07,
    });
    const state26 = await createTaxRate({
      state: 'Missouri',
      rate: 8.18,
    });
    const state27 = await createTaxRate({
      state: 'Montana',
      rate: 0,
    });
    const state28 = await createTaxRate({
      state: 'North Carolina',
      rate: 6.97,
    });
    const state29 = await createTaxRate({
      state: 'North Dakota',
      rate: 6.86,
    });
    const state30 = await createTaxRate({
      state: 'New Hampshire',
      rate: 0,
    });
    const state31 = await createTaxRate({
      state: 'New Jersey',
      rate: 6.6,
    });
    const state32 = await createTaxRate({
      state: 'New Mexico',
      rate: 7.82,
    });
    const state33 = await createTaxRate({
      state: 'New York',
      rate: 8.52,
    });
    const state34 = await createTaxRate({
      state: 'Nebraska',
      rate: 6.93,
    });
    const state35 = await createTaxRate({
      state: 'Nevada',
      rate: 8.32,
    });
    const state36 = await createTaxRate({
      state: 'Ohio',
      rate: 7.17,
    });
    const state37 = await createTaxRate({
      state: 'Oklahoma',
      rate: 8.94,
    });
    const state38 = await createTaxRate({
      state: 'Oregon',
      rate: 0,
    });
    const state39 = await createTaxRate({
      state: 'Pennsylvania',
      rate: 6.34,
    });
    const state40 = await createTaxRate({
      state: 'Rhode Island',
      rate: 7,
    });
    const state41 = await createTaxRate({
      state: 'South Carolina',
      rate: 7.46,
    });
    const state42 = await createTaxRate({
      state: 'South Dakota',
      rate: 6.4,
    });
    const state43 = await createTaxRate({
      state: 'Tennessee',
      rate: 9.53,
    });
    const state44 = await createTaxRate({
      state: 'Texas',
      rate: 8.19,
    });
    const state45 = await createTaxRate({
      state: 'Utah',
      rate: 7.18,
    });
    const state46 = await createTaxRate({
      state: 'Virginia',
      rate: 5.65,
    });
    const state47 = await createTaxRate({
      state: 'Vermont',
      rate: 6.22,
    });
    const state48 = await createTaxRate({
      state: 'West Virginia',
      rate: 6.41,
    });
    const state49 = await createTaxRate({
      state: 'Washington',
      rate: 9.21,
    });
    const state50 = await createTaxRate({
      state: 'Wisconsin',
      rate: 5.46,
    });
    const state51 = await createTaxRate({
      state: 'Wyoming',
      rate: 5.34,
    });
    
  } catch(error){
    throw(error)
  }
}
// const state = await createTaxRate({
//   state: '',
//   rate: ,
// });


async function createTables() {
  try {
    await client.query(`
         CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar UNIQUE NOT NULL,
          password varchar NOT NULL,
          seller varchar NOT NULL,
          shoppingcart varchar
      );
     CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        itemname varchar UNIQUE NOT NULL,
        description varchar NOT NULL,                                                    
        price varchar NOT NULL,                                                 
        category varchar NOT NULL,
        image varchar
      );  
      CREATE TABLE reviews (
          id SERIAL PRIMARY KEY,
          "productId" SERIAL REFERENCES products (id),
          "userId" SERIAL REFERENCES users (id),
          review text NOT NULL
      );
      CREATE TABLE taxrates (
        id SERIAL PRIMARY KEY,
        state varchar NOT NULL,
        rate varchar NOT NULL
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
    DROP TABLE IF EXISTS productreviews;
    DROP TABLE IF EXISTS taglinks;
    DROP TABLE IF EXISTS reviews;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS taxrates;
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
    await seedTaxes();
    const users = await getAllUsers();
    console.log(users);
    const prod2 = await getProductsById(1);
    console.log("Product 2", prod2);
    const user2 = await getUsersByID(2);
    console.log("User ID:", user2);
    const reviewed = await getReviewsByID(1);
    console.log("review 1", reviewed);
    const review = await getAllReviews();
    console.log("reviews", review);
    const products = await getAllProducts();
    console.log("line 104", products);
    const taxes = await getAllTaxes();
    console.log('taxes', taxes)
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
