const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
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
  getUserByUsername,
  getUser,
  updateCart,
  getCartbyUserId,
  destroyProduct,
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
      review: "This is the best tablet!",
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
      review:
        "I promised I would give an updated review after I had owned the tablet for awhile: Honest Reviewer gave a VERY comprehensive review on April 26, 2019, so I will only add a few things. Thin and light weight, easy to hold although I would recommend a case of some kind for any tablet. Screen is beautiful. Speakers/sound is the best we have had in a tablet. No headphone jack understandable to get this thin so you will need bluetooth enabled headphones or speakers for external audio. Our Wi-Fi performance has been good, we have tried to duplicate the wi-fi issue reported by others that wi-fi reception varies with tablet orientation and have not been able to replicate the problem. The default Samsung keyboard covered up a critical portion of one account sign in screen, if this happens to you I would recommend installing Gboard (the free Google keyboard) or Swiftkey ($), which allow vertical size adjustment of the keyboard, before setting up other apps -- you can always switch back to the Samsung keyboard later if you like it better. Seven months in, no problems!",
    });
    const review6 = await createReview({
      productId: 4,
      userId: 3,
      review: "",
    });
    const review7 = await createReview({
      productId: 5,
      userId: 3,
      review:
        "This is my third Air and I LOVE this model — and wonder why it’s not FLYING off the (virtual) Amazon shelves! A little less than my Pro, more than the 6th-gen iPad, this is the best in-between model available, I believe. Don’t bother with the 64gig model — the 256 WiFi is the base to shoot for (in the years that I’ve had cell services, I’ve found that I measured the times used over one year in minutes — I did the math & found that I was overpaying for possible, rather than actual, use). Works well with my 1st gen Pencils — FAST, light and a genuine pleasure to use. I’ve three current iPads and this is my favorite daily use model!",
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
      review:
        "I love this little camera!! For the price, I'm actually quite impressed by the camera's photo and video quality. If someone was wanting a nice quality camera at an affordable price, I definitely recommend this one.",
    });
    const review10 = await createReview({
      productId: 8,
      userId: 1,
      review:
        "Replacement for my older model Z-5010 which still takes good photos but the recycle time between shots has increased. The AZ-252 uses standard AA batteries and the 25X zoom is about the hand-held limit. The 14 or 16 MP files have more than enough detail for processing. The camera is light-weight, carries easily in a waist pack and the lens cap fits tightly. I find the pressure for focus preview on the shutter button is a bit too sensitive and I wind up with a few inadvertent photos. Very good camera for the price with more features than I will ever use.",
    });
    const review11 = await createReview({
      productId: 9,
      userId: 2,
      review:
        "I was a little reluctant to buy this. I Used it for 2 weeks and it’s awesome. I bought my wife a new one from apple and we can’t tell the difference between our phones. Great battery life, large screen, I went from an IPhone 7 256 to this iPhone XSmax 256 and I’m very impressed. I use it a lot.",
    });
    const review12 = await createReview({
      productId: 10,
      userId: 3,
      review:
        "I will be utmost honest here. This is my first device review. I was hesitant to order a Certified Refurbished phone. Especially since it is...a phone. The meat and bone of daily life and communication. However, upon receiving the phone, everything was inside a white uniform box. Nothing special and nothing damaged at all. Simplistic and efficient packaging. The phone works great and no one can tell it isn't Brand new. Absolutely no scratches or signs it has been touched by another human. 10/10 item and you save 100$ in the process by getting refurbished! I am switching from an iPhone 6 to this S9 on ATnT. Simply pull the SIM out and insert into s9 and you are ready to go.",
    });
    const review13 = await createReview({
      productId: 11,
      userId: 2,
      review:
        "The hardware demands for 90% of the tasks people use their phones for is fairly low. I've been buying phones in the budget tier for many years now. I need some more time with it, but the Moto G Power is probably the best one I've used.",
    });
    const review14 = await createReview({
      productId: 12,
      userId: 1,
      review:
        "In my opinion, the 2020 MacBook Air is a perfect laptop. It has physical keys that are a pleasure to type on, a beautiful screen, an optimal size, good pricing, and a quad-core processor. The only touch button is the fingerprint sensor and the touch pad. The onboard graphics are as good as discrete graphics from a few years ago according to benchmarks, which is impressive. The speakers work well. Being an educator, I purchased it on the Apple Education Store for $1200, and it couldn't have come at a better time, given the transition to Zoom in the coronavirus pandemic. Thank you, Apple, for rediscovering yourself. I had been holding onto my 2012 MacBook Pro because I was unimpressed with the offerings the past few years.",
    });
    const review15 = await createReview({
      productId: 13,
      userId: 2,
      review:
        "I can finally sit down at my local coffee shop and look like a cool Mac user now! When people walk in, I can subtly peak over my MacBook Pros screen and semi-acknowledge their existence! I’m finally living my best life.",
    });
    const review16 = await createReview({
      productId: 14,
      userId: 3,
      review:
        "I'm not a computer genius and not very picky about products so this computer is perfect for me. I typically only use a computer to browse the internet, make Shutterfly books, listen to music, and watch shows. This computer is perfect for that. Lightweight, operates well, vibrant colors, and pretty self explanatory.",
    });
    const review17 = await createReview({
      productId: 15,
      userId: 1,
      review:
        "This is my first ever iPad I’ve owned, I’ve owned apple smart phones since 2012, but i don’t have anything to compare the iPad to. So if this is your first iPad also, this one is definitely the one to get! It runs smoothly, so many awesome little features I’m still figuring out. Best apple purchase ever, especially for the price!",
    });
    const review18 = await createReview({
      productId: 16,
      userId: 2,
      review:
        "Perfect, exactly what I was waiting for. I was (am) an owner of the original gen1 iPad Mini, which I loved. However, it has become too slow for most use cases and is 2 iOS revs back, so I had to upgrade. I was holding out for an update, not wanting to purchase the Mini-4 which is already 2+ years old. The Mini-5 is very fast, responsive and the perfect size for how I use an iPad.This is my first ever iPad I’ve owned, I’ve owned apple smart phones since 2012, but i don’t have anything to compare the iPad to. So if this is your first iPad also, this one is definitely the one to get! It runs smoothly, so many awesome little features I’m still figuring out. Best apple purchase ever, especially for the price!",
    });
    const review19 = await createReview({
      productId: 17,
      userId: 3,
      review:
        "It is everything I had hoped it would be and more. I am an artist and use this primarily for drawing. I am using this with the Apple Pencil 2nd gen and it's just as sensitive, if not more, than the Wacom Cintiq and Kamvas Huion pro. Of all my digital drawing tools, this is my favorite. Gorgeous high resolution display, wonderful pen sensitivity equal to the most advanced drawing tablets that are currently available. No lag running adobe photoshop or procreate. 128gb was more than enough space for me to have all my art programs, teaching apps, as well as some extras. This has taken my art and enjoyment of the process to the next level. No more being stuck on a computer. I can create high level art from the comfort of my bed or take it on the road!",
    });
    const review20 = await createReview({
      productId: 18,
      userId: 1,
      review:
        "I got tired of lugging my pro-grade Canon gear around to take photos, especially on recreational outdoor excursions. I wanted a compact camera solution, but I was hesitant to move away from a full-frame sensor and L lenses; I spent a lot of time researching different options and form factors. I was intrigued by the Sony a7, but it's shutter shock issue deterred me, and the fact that it's a full-frame sensor means it still requires a lot of heavy glass to get good photos. I looked at the Fuji X-series, and although it has a bigger sensor than the MFT in the Olympus, it seemed the usability wasn't quite as good.",
    });
    const review21 = await createReview({
      productId: 19,
      userId: 2,
      review:
        "Great little camera, perfect for my older mom who is technologically challenged ;-)",
    });
    const review22 = await createReview({
      productId: 20,
      userId: 3,
      review:
        "Great camera. Keep in mind that you're not going to get DSLR-quality images from this camera (or any bridge camera), but this is still a great camera. It's a fully manual bridge camera (a camera that's between a point and shoot and a DSLR) with a great zoom range. It shoots HD video and also has Wifi, allowing you to upload your photos directly to your phone. The image quality is great, once you understand that this camera (and most cameras in this class) has a 1/2.3 inch sensor. A sensor this size will not be able to provide the dynamic range of bigger sensors (1-inch, APS-C, or Full-Frame), but in adequate light, you will be able to get some nice photographs with this camera if you know what you're doing.",
    });
    const review23 = await createReview({
      productId: 21,
      userId: 1,
      review:
        "Though I have only had it for one day it is too early to describe its performance for me. But I must say this phone is no Lite by any means. I have been using OnePlus 8 for the last 2 weeks and even though I was impressed with Oneplus 8 I must say this phone feels a lot more durable and premium. Everything about this phone feels better quality than OnePlus 8. Yes, it does not have a 90hz display or wireless charging or water resistance but thats what you trade for a lower price. What I care about most is display, battery life and stable performance which this phone makes no compromises in. This phone has a solid built, feels good in the hands and feels premium Difference between this US version vs the international version: I will update my review in few days after using it. One little correction this product: It does not include AKG earphones rather just a simple Samsung earphones.",
    });
    const review24 = await createReview({
      productId: 22,
      userId: 2,
      review:
        "This seller is amazing. Was a bit skeptical at first but this phone has met my every expectation. Very trustworthy in every way. No, it doesn’t come with headphones. At least it comes with a charger! And a 90 day warranty! I also got a brand new spanking battery. I’ve checked the serial number online. It is worthy!!",
    });
    const review25 = await createReview({
      productId: 23,
      userId: 3,
      review:
        "Want the best camera? Want a great looking screen? Want amazing battery life? Want great simple software? Yes exactly, that's why this phone is great for 99% of people. Now if all you care about is specs, just walk away, it's not a flagship, but you won't notice unless you're reading a specs sheet. If you’re just a regular phone user, takes some photos, watches some videos, strolls through social media pages, and does some emails and web browsing, this is the phone for you, save your money. Some more pros, Google photos back up is unlimited, 3 times the amount of cloud storage for free as apple, and they keep pictures completely separate. If you use any type of voice assistant, you'll love having a Google phone for the best assistant experience. Lots of Pixel only features, screen calling in the US is an amazing benefit. Also, if you want to switch from Apple, this is the phone to try it with.",
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
        'Stunning performance and stylish design combine in this quick, powerful Android tablet, powered by a Quad-Core, 2.0 GHz processor and Android 9 Pie The modern, refined look and feel are accentuated by the full metal cover and 82% panel-to-body ratio The stunning 8" HD (1280 x 800) display brings you a crisper and brighter image, so you can watch your favorite movies and shows without missing a detail.',
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
        'Weighing in at less than a pound, the incredibly slim Galaxy Tab S5e is perfect for your on-the-go life. Watch your favorite shows and movies come to life on a corner-to-corner 10. 5" Super AMOLED display. Plus, control lights, door locks, the thermostat and other connected home devices right from your tablet with SmartThings. It’s everything you need.',
      price: "454.38",
      category: "tablet",
      image:
        "https://i.pinimg.com/564x/36/1d/f9/361df9aebc2d909f81971835038ec050.jpg",
    });
    const tablet4 = await createProduct({
      itemname:
        "Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray",
      description:
        "10.5-inch Retina Display with True Tone and wide Color A12 Bionic chip Touch ID Fingerprint Sensor and Apple Pay 8MP back camera, 7MP FaceTime HD Front camera Stereo speakers 802.11ac Wi-Fi Up to 10 hours of battery life Lightning Connector for charging and accessories iOS 12 with group FaceTime  shared augmented reality experiences",
      price: "469.00",
      category: "tablet",
      image:
        "https://i.pinimg.com/564x/9a/6b/b0/9a6bb06568c13d0438e4bf1b6c0ce869.jpg",
    });
    const camera1 = await createProduct({
      itemname: "Canon PowerShot ELPH 180 Digital Camera",
      description:
        "Canon PowerShot ELPH 180 Camera. White Balance Control-Auto, Daylight, Cloudy, Tungsten, Fluorescent, Fluorescent H, Custom, Built-in Flash: Auto, On, Slow Synchro, Off , Flash Range: 1.6-9.8 ft. (W), 4.3-4.9 ft. (T), 50.0cm - 3.0m (W), 1.3-1.5m (T). Focusing Range: Normal: 2.0 in. (5.0cm) infinity (W), 4.3 ft. (1.3m) infinity (T), Auto: 0.4 in.",
      price: "109.00",
      category: "Cameras",
      image: "https://i.pinimg.com/564x/ce/34/2a/ce342a409fc36046460f1a1ea8bac0fe.jpg",
    });
    const camera2 = await createProduct({
      itemname: "Kodak PIXPRO Astro Zoom AZ421-RD",
      description:
        "Passion and performance go hand in hand with our KODAK PIXPRO AZ421 digital camera from the Astro Zoom Collection. A 42X ultra long zoom lens with optical image stabilization delivers crisp, clear 16 megapixel close-ups, panorama or HD videos. Auto scene, object tracking, post-editing features and a host of powerful yet user-friendly settings.",
      price: "145.99",
      category: "Cameras",
      image:
        "https://i.pinimg.com/originals/26/01/da/2601dac544b483474d66533013a561d3.jpg",
    });
    const camera3 = await createProduct({
      itemname: "Kodak PIXPRO Astro Zoom AZ252-WH",
      description:
        "Discover a world of creativity at your fingertips. The AZ252 is the perfect bridge camera to pursue your passion for photography. With 16 Megapixels, 25x optical zoom and a wider angle lens than traditional models, This camera might just become your new best friend. Kodak PIXPRO digital cameras - tell your story.",
      price: "129.00",
      category: "Cameras",
      image: "https://i.pinimg.com/564x/4b/56/99/4b5699c5af084a5473840c31f031aa00.jpg",
    });
    const phone1 = await createProduct({
      itemname: "Apple iPhone XS Max, 64GB, Gold - Fully Unlocked (Renewed)",
      description:
        "iPhone XS Max has a 6.5-inch all-screen Super Retina display. The back is glass, and there's a stainless steel band around the frame. The side button is on the right side of the device. There are 12MP wide-angle and telephoto cameras on the back. There's a Quad-LED True Tone flash on the back and a SIM tray on the right side.",
      price: "549.99",
      category: "Phones",
      image:
        "https://i.pinimg.com/564x/b8/46/9a/b8469a400cd34223471cdbced8569783.jpg",
    });
    const phone2 = await createProduct({
      itemname:
        "Samsung Galaxy S9, 64GB, Lilac Purple - Fully Unlocked",
      description:
        "5.8-inch Super AMOLED Capacitive Touchscreen, 1440 x 2960 pixels with Corning Gorilla Glass 5 Android OS, Qualcomm Snapdragon 845, Octa-Core (4x2.7 GHz & 4x1.7 GHz), Adreno 630 Internal Memory: 64GB, 4GB RAM - microSD Up to 400GB 12MP Camera with f/1.5-2.4, 26mm lens, Dual Pixel PDAF & 8MP Front Camera with f/1.7",
      price: "268.88",
      category: "Phones",
      image: "https://images-na.ssl-images-amazon.com/images/I/716uqF6uUgL.jpg",
    });
    const phone3 = await createProduct({
      itemname: "Moto G Power Unlocked Made for US by Motorola",
      description:
        "Set yourself free from chargers and outlets. Say hello to moto g power. With its powerful 5000 mAh battery, you can go up to three full days1 on a single charge—and do the things you want without worrying about recharging. Shoot a panorama, close up, or anything in between with a versatile triple camera system.",
      price: "249.99",
      category: "Phones",
      image:
        "https://i-cdn.phonearena.com/images/article/123580-two_lead/The-Moto-G-Stylus-and-Moto-G-Power-are-already-on-sale-at-crazy-low-prices.jpg",
    });
    const laptop2 = await createProduct({
      itemname: "Apple MacBook Air (13-inch)",
      description:
        "The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance, faster graphics, and double the storage capacity. The sleek wedge-shaped design is created from 100 percent recycled aluminum.",
      price: "949.99",
      category: "computer",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg",
    });
    const laptop3 = await createProduct({
      itemname: "Apple MacBook Pro (16-Inch)",
      description:
        "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. With an immersive 16-inch Retina display, superfast processors, next-generation graphics, the largest battery capacity ever in a MacBook Pro, a new Magic Keyboard, and massive storage, it’s the ultimate pro notebook.",
      price: "2099.99",
      category: "computer",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg",
    });
    const laptop4 = await createProduct({
      itemname: "HP High Performance Laptop (14-Inch)",
      description:
        "Slim and ultra-portable. With long battery life, you can stay social, productive, and connected. Designed for portability and features a micro-edge HD display with an ultra-narrow bezel for a smaller frame. With the latest AMD processor, Radeon graphics and a super responsive precision touch pad, you’ve got the power to surf and stream like never before.",
      price: "304.00",
      category: "computer",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81yxJ3DZEGL._AC_SL1500_.jpg",
    });
    const tablet5 = await createProduct({
      itemname: "Apple iPad (10.2-inch, Wi-Fi + Cellular, 128GB)",
      description:
        "The new iPad combines ease of use and versatility. And now it’s even more versatile, with a larger 10.2‑inch Retina display, support for the full-size Smart Keyboard, and the amazing new capabilities of iPadOS. It’s unbelievably fun. And unmistakably iPad.",
      price: "529.00",
      category: "tablet",
      image:
        "https://i.pinimg.com/564x/62/cd/96/62cd96cbceb820d2060203cefbba6eed.jpg",
    });
    const tablet6 = await createProduct({
      itemname: "Apple iPad mini (Wi-Fi, 64GB)",
      description:
        "iPad mini is beloved for its size and capability. And now there are even more reasons to love it. The A12 Bionic chip with Neural Engine. A 7.9‑inch Retina display with True Tone. And Apple Pencil, so you can capture your biggest ideas wherever they come to you. It’s still iPad mini. There’s just more of it than ever.",
      price: "349.99",
      category: "tablet",
      image:
        "https://i.pinimg.com/564x/8a/d4/96/8ad4965ad21d3d5c857d4f6975c268eb.jpg",
    });
    const tablet7 = await createProduct({
      itemname: "Apple iPad Pro (12.9-inch, Wi-Fi, 1TB)",
      description:
        "iPad Pro is the ultimate mobile workstation. You can print, project, and send files wirelessly. The USB‑C port lets you connect all types of accessories, like a camera, external drive, or display. Wi‑Fi and LTE are faster than ever, so you can stay connected everywhere.",
      price: "1499.99",
      category: "tablet",
      image:
        "https://i.pinimg.com/564x/4a/8a/25/4a8a25d1741e417ec304d5b29c1b8e79.jpg",
    });
    const camera4 = await createProduct({
      itemname: "Olympus E-M1 Mirrorless Digital Camera with 12-40mm f2.8 Lens",
      description:
        "The Olympus OM-D E-M5 unleashed a revolution in photography. The OM-D E-M1 is starting another. Stay on the leading edge of the imaging technology curve with the new OM-D E-M1. It embodies the revolutionary design elements that will send your imagination into overdrive-at warp speed. Full magnesium alloy body construction.",
      price: "2299.99",
      category: "cameras",
      image:
        "https://i.pinimg.com/564x/e6/15/cd/e615cda8399213a22692e7bccc534cf4.jpg",
    });
    const camera5 = await createProduct({
      itemname: "Sony (DSCW800) 20.1 MP Digital Camera",
      description:
        "Shoot incredibly smooth video1 and still images with SteadyShot Image Stabilization with Active mode. This technology delivers sharp image quality with low noise and minimal blur even while the user is strolling. A powerful 20.1 megapixel super HAD CCD image sensor helps you capture gorgeous images with superb contrast and clarity down to the finest detail.",
      price: "112.00",
      category: "cameras",
      image:
        "https://i.pinimg.com/564x/f0/94/ea/f094ea68e8813a8634f54c2c7a117b5b.jpg",
    });
    const camera6 = await createProduct({
      itemname: "Canon PowerShot SX540 Digital Camera w/ 50x Optical Zoom",
      description:
        "Unleash the power of high zoom, high performance and Canon's advanced technology. The PowerShot SX540 HS is a versatile and easy-to-use camera for virtually anyone who wants to capture their favorite subjects, from family get-togethers to amazing safaris, to school plays and the beautiful moments of life in between.",
      price: "259.00",
      category: "cameras",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81l6xdQOHyL._AC_SL1500_.jpg",
    });
    const phone4 = await createProduct({
      itemname: "Samsung Galaxy S10 Lite New Unlocked Android Cell Phone",
      description:
        "Upgrade your Galaxy: the Samsung Galaxy S10 Lite has the features you’ve been waiting for Its easy-to-use pro-grade camera delivers the perfect shot every time, and a fast-charging battery lets you dive into whatever life throws your way.",
      price: "499.99",
      category: "phones",
      image:
        "https://i.pinimg.com/564x/94/59/e4/9459e41c59b31c85bbf684926557be06.jpg",
    });
    const phone5 = await createProduct({
      itemname: "Apple iPhone XR, 64GB, White - Fully Unlocked (Renewed)",
      description:
        "This product is not Apple certified, but has been professionally inspected and tested by Grace-Shopper-qualified suppliers. The product may have minimal scratches or dents, and a battery with at least 80% capacity. Box may be generic and accessories may not be original, but will be compatible and fully functional.",
      price: "474.80",
      category: "phones",
      image:
        "https://i.pinimg.com/564x/18/e0/9b/18e09b89fe72885658c02a3c74718fd6.jpg",
    });
    const phone6 = await createProduct({
      itemname: "Google - Pixel 3a with 64GB Memory Cell Phone (Unlocked)",
      description:
        "Get more done with Pixel 3A. It has an extraordinary camera with features like night sight, portrait mode, and HDR+. a battery that charges fast and lasts all day [7]. All the helpfulness of the Google assistant built in. And 3 years of security and os updates included [8]. it’s everything you love about Google – in a phone.",
      price: "380.07",
      category: "phones",
      image:
        "https://i.pinimg.com/564x/9f/bf/9e/9fbf9eb0f93fd4d45b121005e58f045e.jpg",
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

// async function seedTaxes() {
//   try {
//     console.log("Creating Tax rates");

//     const state1 = await createTaxRate({
//       state: "Alabama",
//       rate: 9.22,
//     });
//     const state2 = await createTaxRate({
//       state: "Alaska",
//       rate: 1.76,
//     });
//     const state3 = await createTaxRate({
//       state: "Arizona",
//       rate: 8.4,
//     });
//     const state4 = await createTaxRate({
//       state: "Arkansas",
//       rate: 9.47,
//     });
//     const state5 = await createTaxRate({
//       state: "California",
//       rate: 8.66,
//     });
//     const state6 = await createTaxRate({
//       state: "Colorado",
//       rate: 7.65,
//     });
//     const state7 = await createTaxRate({
//       state: "Connecticut",
//       rate: 6.35,
//     });
//     const state8 = await createTaxRate({
//       state: "Washington D.C.",
//       rate: 6.0,
//     });
//     const state9 = await createTaxRate({
//       state: "Delaware",
//       rate: 0,
//     });
//     const state10 = await createTaxRate({
//       state: "Florida",
//       rate: 7.05,
//     });
//     const state11 = await createTaxRate({
//       state: "Georgia",
//       rate: 7.31,
//     });
//     const state12 = await createTaxRate({
//       state: "Hawaii",
//       rate: 4.44,
//     });
//     const state13 = await createTaxRate({
//       state: "Idaho",
//       rate: 6.03,
//     });
//     const state14 = await createTaxRate({
//       state: "Illinois",
//       rate: 9.08,
//     });
//     const state15 = await createTaxRate({
//       state: "Indiana",
//       rate: 7,
//     });
//     const state16 = await createTaxRate({
//       state: "Iowa",
//       rate: 6.94,
//     });
//     const state17 = await createTaxRate({
//       state: "Kansas",
//       rate: 8.68,
//     });
//     const state18 = await createTaxRate({
//       state: "Kentucky",
//       rate: 6,
//     });
//     const state19 = await createTaxRate({
//       state: "Louisiana",
//       rate: 9.52,
//     });
//     const state20 = await createTaxRate({
//       state: "Maine",
//       rate: 5.5,
//     });
//     const state21 = await createTaxRate({
//       state: "Massachusetts",
//       rate: 6.25,
//     });
//     const state22 = await createTaxRate({
//       state: "Maryland",
//       rate: 6,
//     });
//     const state23 = await createTaxRate({
//       state: "Michigan",
//       rate: 6,
//     });
//     const state24 = await createTaxRate({
//       state: "Minnesota",
//       rate: 7.46,
//     });
//     const state25 = await createTaxRate({
//       state: "Mississippi",
//       rate: 7.07,
//     });
//     const state26 = await createTaxRate({
//       state: "Missouri",
//       rate: 8.18,
//     });
//     const state27 = await createTaxRate({
//       state: "Montana",
//       rate: 0,
//     });
//     const state28 = await createTaxRate({
//       state: "North Carolina",
//       rate: 6.97,
//     });
//     const state29 = await createTaxRate({
//       state: "North Dakota",
//       rate: 6.86,
//     });
//     const state30 = await createTaxRate({
//       state: "New Hampshire",
//       rate: 0,
//     });
//     const state31 = await createTaxRate({
//       state: "New Jersey",
//       rate: 6.6,
//     });
//     const state32 = await createTaxRate({
//       state: "New Mexico",
//       rate: 7.82,
//     });
//     const state33 = await createTaxRate({
//       state: "New York",
//       rate: 8.52,
//     });
//     const state34 = await createTaxRate({
//       state: "Nebraska",
//       rate: 6.93,
//     });
//     const state35 = await createTaxRate({
//       state: "Nevada",
//       rate: 8.32,
//     });
//     const state36 = await createTaxRate({
//       state: "Ohio",
//       rate: 7.17,
//     });
//     const state37 = await createTaxRate({
//       state: "Oklahoma",
//       rate: 8.94,
//     });
//     const state38 = await createTaxRate({
//       state: "Oregon",
//       rate: 0,
//     });
//     const state39 = await createTaxRate({
//       state: "Pennsylvania",
//       rate: 6.34,
//     });
//     const state40 = await createTaxRate({
//       state: "Rhode Island",
//       rate: 7,
//     });
//     const state41 = await createTaxRate({
//       state: "South Carolina",
//       rate: 7.46,
//     });
//     const state42 = await createTaxRate({
//       state: "South Dakota",
//       rate: 6.4,
//     });
//     const state43 = await createTaxRate({
//       state: "Tennessee",
//       rate: 9.53,
//     });
//     const state44 = await createTaxRate({
//       state: "Texas",
//       rate: 8.19,
//     });
//     const state45 = await createTaxRate({
//       state: "Utah",
//       rate: 7.18,
//     });
//     const state46 = await createTaxRate({
//       state: "Virginia",
//       rate: 5.65,
//     });
//     const state47 = await createTaxRate({
//       state: "Vermont",
//       rate: 6.22,
//     });
//     const state48 = await createTaxRate({
//       state: "West Virginia",
//       rate: 6.41,
//     });
//     const state49 = await createTaxRate({
//       state: "Washington",
//       rate: 9.21,
//     });
//     const state50 = await createTaxRate({
//       state: "Wisconsin",
//       rate: 5.46,
//     });
//     const state51 = await createTaxRate({
//       state: "Wyoming",
//       rate: 5.34,
//     });
//   } catch (error) {
//     console.error("Error creating users!");
//     throw error;
//   }
// }
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
          email varchar NOT NULL,
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
        CREATE TABLE shoppingcart(
          id SERIAL PRIMARY KEY,
          quantity varchar NOT NULL,
          "productId" SERIAL REFERENCES products (id),
          "userId" SERIAL REFERENCES users (id),
          itemname varchar NOT NULL,
          price varchar NOT NULL,
          image varchar NOT NULL
        );
        CREATE TABLE anonshoppingcart(
          id SERIAL PRIMARY KEY,
          quantity varchar NOT NULL,
          "productId" SERIAL REFERENCES products (id)
        );
      `);
  } catch (error) {
    throw error;
  }
}
// "username" INTEGER REFERENCES users(id),
//                       "productId" INTEGER REFERENCES products(id),
//          quantity varchar NOT NULL,
async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS anonshoppingcart;
      DROP TABLE IF EXISTS shoppingcart;
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
    await new Promise((resolve, reject) => {
      console.log("here the user");
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const arman = await createUser({
          username: "arman",
          password: hashedPassword,
          email: "test1@yahoo.com",
          seller: true,
        });
        console.log("arman", arman);
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const james = await createUser({
          username: "james",
          password: hashedPassword,
          email: "test2@yahoo.com",
          seller: true,
        });
        console.log(james);
        resolve();
      });
    });

    await new Promise((resolve, reject) => {
      bcrypt.hash("bertie99", SALT_COUNT, async function (err, hashedPassword) {
        const robin = await createUser({
          username: "robin",
          password: hashedPassword,
          email: "test3@yahoo.com",
          seller: true,
        });
        console.log(robin);
        resolve();
      });
    });

    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function cartUpdate() {
  try {
    console.log("testing cart update");
    const cart1 = await updateCart(1, 1);
    console.log("Finished updating cart");
  } catch (error) {
    console.log("Error Updating Cart");
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
    //await cartUpdate();
    const cart = await getCartbyUserId(1);
    await createInitialReviews();
    // await destroyProduct(1);
    const userArman = await getUserByUsername("arman");
    const userJames = await getUserByUsername("james");
    const userRobin = await getUserByUsername("robin");
    // await seedTaxes();
    const users = await getAllUsers();
    // console.log(users);
    const prod2 = await getProductsById(1);
    // console.log("Product 2", prod2);
    const user2 = await getUsersByID(2);
    // console.log("User ID:", user2);
    const reviewed = await getReviewsByID(1);
    // console.log("review 1", reviewed);
    const review = await getAllReviews();
    // console.log("reviews", review);
    const products = await getAllProducts();
    // console.log("line 104", products);
    const taxes = await getAllTaxes();
    // console.log("taxes", taxes);
    // const updatedcart = await updateCart(3,1,5)
    // console.log(updatedcart)
    console.log("username", userArman, userJames, userRobin);
    // console.log(cart);
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
