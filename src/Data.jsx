
const Data = [
    // Electronics
    {
        id: 1,
        name: 'Samsung TV',
        category: 'Electronics',
        image: 'https://tse2.mm.bing.net/th?id=OIP.JOpLqIn13jA-GIkRyfJNsgHaE8&pid=Api&P=0&h=180',
        rating: 4.5,
        stock: 0,
        description: 'Experience stunning visuals with this 4K UHD Smart TV, featuring vibrant colors and advanced HDR technology for an immersive viewing experience.',
        price: 81999.18,  
        discount: 10,
        sale: true,
        discountPrice: 73799.26
    },
    {
        id: 2,
        name: 'Apple Watch',
        category: 'Electronics',
        image: 'https://tse3.mm.bing.net/th?id=OIP.1RuWC-_hm7_TfMelbAUr1AHaHj&pid=Api&P=0&h=180',
        rating: 4.8,
        stock: 5,
        description: 'Stay connected and track your fitness goals with the Apple Watch Series 7 GPS, featuring a larger display and advanced health monitoring features.',
        price: 32799.91,
        discount: 5,
        discountPrice: 31159.91,
        sale: true
    },
    {
        id: 3,
        name: 'Sony Headphones',
        category: 'Electronics',
        image: 'https://tse4.mm.bing.net/th?id=OIP.9rv1g1o8ogZaeDCHhx_KgQHaJB&pid=Api&P=0&h=180',
        rating: 4.2,
        stock: 1,
        description: 'Experience superior sound quality and comfort with these wireless noise-canceling headphones, perfect for music lovers and frequent travelers.',
        price: 24599.18,
        discount: 15,
        discountPrice: 20905.31
    },
    {
        id: 4,
        name: 'LG Laptop',
        category: 'Electronics',
        image: 'https://tse1.mm.bing.net/th?id=OIP.ntrfXS3RvGq8UGK8DrqDKQHaHa&pid=Api&P=0&h=180',
        rating: 4.1,
        stock: 8,
        description: 'This LG laptop features a 15.6" FHD touchscreen, providing powerful performance for work and play with its sleek design and long battery life.',
        price: 65599.18,
        discount: 10,
        discountPrice: 59039.26,
        sale: true
    },
    {
        id: 5,
        name: 'Canon Camera',
        category: 'Electronics',
        image: 'https://tse2.mm.bing.net/th?id=OIP.OO4YuzeGT3YEoeisp3jn4AHaFo&pid=Api&P=0&h=180',
        rating: 4.6,
        stock: 12,
        description: 'Capture stunning photos and videos with the Canon EOS Rebel T8i, featuring advanced autofocus and high-resolution imaging capabilities.',
        price: 57499.18,
        discount: 5,
        discountPrice: 54624.18
    },
    // Additional Electronics
    {
        id: 6,
        name: 'Nikon DSLR Camera',
        category: 'Electronics',
        image: 'https://example.com/nikon-camera.jpg',
        rating: 4.7,
        stock: 10,
        description: 'A versatile DSLR camera with interchangeable lenses and a user-friendly interface for both beginners and experienced photographers.',
        price: 69999.00,
        discount: 10,
        discountPrice: 62999.10
    },
    {
        id: 7,
        name: 'Fitbit Tracker',
        category: 'Electronics',
        image: 'https://example.com/fitbit-tracker.jpg',
        rating: 4.4,
        stock: 15,
        description: 'Track your daily activity and sleep patterns with this stylish Fitbit fitness tracker, helping you achieve your health goals.',
        price: 8999.00,
        discount: 5,
        discountPrice: 8549.05,
        sale: true,
    },
    {
        id: 8,
        name: 'Dell Monitor',
        category: 'Electronics',
        image: 'https://example.com/dell-monitor.jpg',
        rating: 4.3,
        stock: 20,
        description: 'Enhance your workspace with a 24" Dell monitor, featuring full HD resolution and a sleek, modern design for any setup.',
        price: 14999.00,
        discount: 10,
        discountPrice: 13499.10
    },
    {
        id: 9,
        name: 'Logitech Keyboard',
        category: 'Electronics',
        image: 'https://example.com/logitech-keyboard.jpg',
        rating: 4.5,
        stock: 30,
        description: 'This wireless Logitech keyboard offers a comfortable typing experience and long battery life, ideal for work or play.',
        price: 2999.00,
        discount: 5,
        sale: true,
        discountPrice: 2849.05
    },
    {
        id: 10,
        name: 'Bose Soundbar',
        category: 'Electronics',
        image: 'https://example.com/bose-soundbar.jpg',
        rating: 4.8,
        stock: 8,
        description: 'Transform your home entertainment system with the Bose Soundbar, delivering immersive audio and easy connectivity.',
        price: 29999.00,
        discount: 10,
        discountPrice: 26999.10
    },
    // Home Appliances
    {
        id: 11,
        name: 'Whirlpool Refrigerator',
        category: 'Home Appliances',
        image: 'https://tse2.mm.bing.net/th?id=OIP.gzVt1ELHtxUoqvtCOltBRQHaHa&pid=Api&P=0&h=180',
        rating: 4.4,
        stock: 4,
        description: 'This 36" French Door refrigerator features spacious compartments, energy-efficient cooling, and advanced temperature control.',
        price: 204999.18,
        discount: 10,
        discountPrice: 184499.26
    },
    {
        id: 12,
        name: 'LG Washing Machine',
        category: 'Home Appliances',
        image: 'https://tse2.mm.bing.net/th?id=OIP.pIWdIXy4MxeYE4j5Io1KfQHaKS&pid=Api&P=0&h=180',
        rating: 4.3,
        stock: 20,
        sale: true,
        description: 'Top Load LG Washing Machine with multiple wash settings and energy-saving features for effective laundry care.',
        price: 81999.18,
        discount: 5,
        discountPrice: 77899.19
    },
    {
        id: 13,
        name: 'Samsung Microwave',
        category: 'Home Appliances',
        image: 'https://tse2.mm.bing.net/th?id=OIP.wsWYLZuMllesxPoRmB6ZnAHaD3&pid=Api&P=0&h=180',
        rating: 4.1,
        stock: 15,
        description: 'This 1.8 cu. ft. Samsung microwave offers quick cooking options and user-friendly controls for convenient meal preparation.',
        price: 16399.18,
        discount: 10,
        discountPrice: 14759.26
    },
    {
        id: 14,
        name: 'Bosch Dishwasher',
        category: 'Home Appliances',
        image: 'https://tse2.mm.bing.net/th?id=OIP.gnTw87uzS6jyv6YizcE1swHaHa&pid=Api&P=0&h=180',
        rating: 4.5,
        stock: 12,
        description: 'Efficiently clean your dishes with the Bosch 800 Series Dishwasher, featuring multiple wash cycles and quiet operation.',
        price: 106999.18,
        discount: 5,
        sale: true,
        discountPrice: 101649.18
    },
    {
        id: 15,
        name: 'Maytag Dryer',
        category: 'Home Appliances',
        image: 'https://tse3.mm.bing.net/th?id=OIP.wJsTLZunHu3RVJJM1Owx0AHaKB&pid=Api&P=0&h=180',
        rating: 4.2,
        stock: 18,
        description: 'This 7.3 cu. ft. Maytag dryer offers advanced drying technology and multiple settings for customized laundry care.',
        price: 73999.18,
        discount: 10,
        discountPrice: 66599.26
    },
    // Additional Appliances
    {
        id: 16,
        name: 'Philips Air Fryer',
        category: 'Home Appliances',
        image: 'https://example.com/philips-air-fryer.jpg',
        rating: 4.7,
        stock: 25,
        description: 'Enjoy healthier meals with the Philips Air Fryer, using rapid air technology for crispy results with less oil.',
        price: 12999.00,
        discount: 10,
        discountPrice: 11699.10
    },
    {
        id: 17,
        name: 'Dyson Vacuum Cleaner',
        category: 'Home Appliances',
        image: 'https://example.com/dyson-vacuum.jpg',
        rating: 4.8,
        stock: 15,
        description: 'Powerful and lightweight, the Dyson Vacuum Cleaner ensures deep cleaning on all surfaces with advanced filtration technology.',
        price: 29999.00,
        discount: 5,
        discountPrice: 28499.05
    },
    {
        id: 18,
        name: 'Instant Pot',
        category: 'Home Appliances',
        image: 'https://example.com/instant-pot.jpg',
        rating: 4.5,
        stock: 20,
        description: 'The Instant Pot combines multiple kitchen appliances into one, offering pressure cooking, slow cooking, and sauté functions.',
        price: 8999.00,
        discount: 10,
        discountPrice: 8099.10
    },
    {
        id: 19,
        name: 'Cuisinart Food Processor',
        category: 'Home Appliances',
        image: 'https://example.com/cuisinart-food-processor.jpg',
        rating: 4.6,
        stock: 10,
        description: 'Chop, slice, and dice with ease using the Cuisinart Food Processor, featuring a powerful motor and multiple attachments.',
        price: 12999.00,
        discount: 5,
        discountPrice: 12349.05
    },
    {
        id: 20,
        name: 'Keurig Coffee Maker',
        category: 'Home Appliances',
        image: 'https://example.com/keurig-coffee-maker.jpg',
        rating: 4.9,
        stock: 30,
        description: 'Brew your favorite coffee in minutes with the Keurig Coffee Maker, offering a variety of pods for customizable flavors.',
        price: 10999.00,
        discount: 10,
        discountPrice: 9899.10
    },
    // Fashion
    {
        id: 21,
        name: 'Levi\'s Jeans',
        category: 'Fashion',
        image: 'https://tse2.mm.bing.net/th?id=OIP.3quiXDyoTBWaox7HqXnFwQHaHa&pid=Api&P=0&h=180',
        rating: 4.5,
        stock: 25,
        description: 'Timeless style and comfort, Levi\'s 501 Original Fit Jeans offer a classic look with a modern fit, suitable for any occasion.',
        price: 5739.18,
        discount: 10,
        sale: true,
        discountPrice: 5157.26
    },
    {
        id: 22,
        name: 'Nike Shoes',
        category: 'Fashion',
        image: 'https://tse2.mm.bing.net/th?id=OIP.Qp1qSU0LxL6_0lpQNGuakgHaEo&pid=Api&P=0&h=180',
        rating: 4.8,
        stock: 30,
        description: 'Elevate your game with Nike Air Force 1 shoes, designed for comfort and style on and off the court.',
        price: 7383.18,
        discount: 5,
        discountPrice: 7003.02
    },
    {
        id: 23,
        name: 'Calvin Klein T-Shirt',
        category: 'Fashion',
        image: 'https://tse3.mm.bing.net/th?id=OIP.npU78VIBg55Dz2xWCpL5WAHaJD&pid=Api&P=0&h=180',
        rating: 4.2,
        stock: 20,
        description: 'Simple yet stylish, the Calvin Klein Men\'s Crew Neck T-Shirt offers versatile wear with a comfortable fit.',
        price: 2459.18,
        discount: 10,
        discountPrice: 2213.26
    },
    {
        id: 24,
        name: 'Gucci Handbag',
        category: 'Fashion',
        image: 'https://tse3.mm.bing.net/th?id=OIP.84T8CoK7W9DmVSwKVBcfrQHaHa&pid=Api&P=0&h=180',
        rating: 4.6,
        stock: 15,
        description: 'A statement piece for any outfit, the Gucci Women\'s Dionysus handbag combines elegance and functionality with exquisite craftsmanship.',
        price: 81999.18,
        discount: 5,
        discountPrice: 77899.18
    },
    {
        id: 25,
        name: 'Ray-Ban Sunglasses',
        category: 'Fashion',
        image: 'https://tse3.mm.bing.net/th?id=OIP.u5Ew9NgJmUgVChHFNEZj1gHaJ4&pid=Api&P=0&h=180',
        rating: 4.4,
        stock: 25,
        description: 'Protect your eyes in style with Ray-Ban Aviator Sunglasses, featuring a timeless design and UV protection.',
        price: 16399.18,
        discount: 10,
        discountPrice: 14759.26
    },
    // Additional Fashion
    {
        id: 26,
        name: 'Adidas Tracksuit',
        category: 'Fashion',
        image: 'https://example.com/adidas-tracksuit.jpg',
        rating: 4.5,
        stock: 20,
        description: 'Stay comfortable and stylish with the Adidas Tracksuit, perfect for workouts or casual wear.',
        price: 5999.00,
        discount: 10,
        discountPrice: 5399.10
    },
    {
        id: 27,
        name: 'Puma Sneakers',
        category: 'Fashion',
        image: 'https://example.com/puma-sneakers.jpg',
        rating: 4.6,
        stock: 15,
        description: 'Experience the ultimate in comfort and performance with Puma Sneakers, designed for active lifestyles.',
        price: 4999.00,
        discount: 5,
        discountPrice: 4749.05
    },
    {
        id: 28,
        name: 'H&M Hoodie',
        category: 'Fashion',
        image: 'https://example.com/hm-hoodie.jpg',
        rating: 4.4,
        stock: 25,
        description: 'Stay cozy and stylish in the H&M Hoodie, a perfect layering piece for cooler days.',
        price: 2499.00,
        discount: 10,
        discountPrice: 2249.10
    },
    {
        id: 29,
        name: 'Zara Jacket',
        category: 'Fashion',
        image: 'https://example.com/zara-jacket.jpg',
        rating: 4.5,
        stock: 10,
        description: 'The Zara Jacket combines modern design with comfort, ideal for a fashionable look.',
        price: 7499.00,
        discount: 5,
        discountPrice: 7124.05
    },
    {
        id: 30,
        name: 'Fossil Watch',
        category: 'Fashion',
        image: 'https://example.com/fossil-watch.jpg',
        rating: 4.8,
        stock: 12,
        description: 'Elegant and functional, the Fossil Watch is perfect for any occasion, offering timeless style and reliability.',
        price: 13999.00,
        discount: 10,
        discountPrice: 12599.10
    },
    // Beauty and Personal Care
    {
        id: 31,
        name: 'L\'Oreal Shampoo',
        category: 'Beauty and Personal Care',
        image: 'https://tse1.mm.bing.net/th?id=OIP.3j0sEkfEaoxuuj8LRzpEAAHaHa&pid=Api&P=0&h=180',
        rating: 4.3,
        stock: 0,
        description: 'L\'Oreal EverPure Repair & Protect Shampoo revitalizes and nourishes hair, leaving it soft, shiny, and healthy.',
        price: 819.18,
        discount: 10,
        discountPrice: 737.26
    },
    {
        id: 32,
        name: 'Nivea Body Wash',
        category: 'Beauty and Personal Care',
        image: 'https://tse4.mm.bing.net/th?id=OIP.PpIEhzv8E15l3U5o4397LAHaHa&pid=Api&P=0&h=180',
        rating: 4.2,
        stock: 2,
        description: 'Enjoy a refreshing cleanse with Nivea Soft Moisturizing Body Wash, leaving your skin feeling smooth and hydrated.',
        price: 655.18,
        discount: 5,
        discountPrice: 622.43
    },
    {
        id: 33,
        name: 'Gillette Razor',
        category: 'Beauty and Personal Care',
        image: 'https://tse1.mm.bing.net/th?id=OIP.XupXMeIohwbXhNUB7A4jxgHaHa&pid=Api&P=0&h=180',
        rating: 4.1,
        stock: 20,
        description: 'Gillette Mach3 Razor features advanced blade technology for a close and comfortable shave, perfect for daily use.',
        price: 1224.18,
        discount: 10,
        discountPrice: 1101.76
    },
    {
        id: 34,
        name: 'Maybelline Mascara',
        category: 'Beauty and Personal Care',
        image: 'https://3.bp.blogspot.com/-m0F8IIqWZkI/U5qVc0vsQ-I/AAAAAAAAHM8/7OX1tDufhSQ/s1600/77857_1-783491.png',
        rating: 4.4,
        stock: 25,
        description: 'Enhance your lashes with Maybelline Great Lash Mascara, providing volume and length for a stunning look.',
        price: 901.18,
        discount: 5,
        discountPrice: 856.12
    },
    {
        id: 35,
        name: 'Dove Soap',
        category: 'Beauty and Personal Care',
        image: 'https://tse4.mm.bing.net/th?id=OIP.Ym6KQ0AYCDheGEl5S5VUfAHaE8&pid=Api&P=0&h=180',
        rating: 4.3,
        stock: 30,
        description: 'Dove Sensitive Skin Soap gently cleanses and nourishes, making it perfect for everyday use on sensitive skin.',
        price: 573.18,
        discount: 10,
        discountPrice: 515.86
    },
    // Additional Beauty
    {
        id: 36,
        name: 'Clinique Moisturizer',
        category: 'Beauty and Personal Care',
        image: 'https://example.com/clinique-moisturizer.jpg',
        rating: 4.5,
        stock: 10,
        description: 'Clinique Moisturizer hydrates and revitalizes the skin, leaving it feeling soft and radiant.',
        price: 2499.00,
        discount: 5,
        discountPrice: 2374.05
    },
    {
        id: 37,
        name: 'Neutrogena Sunscreen',
        category: 'Beauty and Personal Care',
        image: 'https://example.com/neutrogena-sunscreen.jpg',
        rating: 4.7,
        stock: 20,
        description: 'Protect your skin from harmful UV rays with Neutrogena Sunscreen, providing broad-spectrum protection.',
        price: 1999.00,
        discount: 10,
        discountPrice: 1799.10
    },
    {
        id: 38,
        name: 'Olay Night Cream',
        category: 'Beauty and Personal Care',
        image: 'https://example.com/olay-night-cream.jpg',
        rating: 4.6,
        stock: 15,
        description: 'Olay Night Cream deeply nourishes the skin overnight, promoting a youthful and radiant appearance.',
        price: 1499.00,
        discount: 5,
        discountPrice: 1424.05
    },
    {
        id: 39,
        name: 'Cetaphil Cleanser',
        category: 'Beauty and Personal Care',
        image: 'https://example.com/cetaphil-cleanser.jpg',
        rating: 4.4,
        stock: 30,
        description: 'Gently cleanse your skin with Cetaphil Cleanser, suitable for all skin types, providing hydration and comfort.',
        price: 899.00,
        discount: 10,
        sale: true,
        discountPrice: 809.10
    },
    {
        id: 40,
        name: 'Burt\'s Bees Lip Balm',
        category: 'Beauty and Personal Care',
        image: 'https://example.com/burts-bees-lip-balm.jpg',
        rating: 4.8,
        stock: 25,
        description: 'Burt\'s Bees Lip Balm offers natural hydration for your lips, keeping them soft and smooth all day long.',
        price: 499.00,
        discount: 5,
        discountPrice: 474.05
    },
    // Books
    {
        id: 41,
        name: 'Harry Potter',
        category: 'Books',
        image: 'https://tse4.mm.bing.net/th?id=OIP.aKp6DSS32NRvAxd0JoLEEgHaEU&pid=Api&P=0&h=180',
        rating: 4.8,
        stock: 25,
        description: 'Dive into the magical world of Harry Potter, a captivating series by J.K. Rowling filled with adventure, friendship, and the battle between good and evil.',
        price: 1639.18,
        discount: 10,
        sale: true,
        discountPrice: 1475.26
    },
    {
        id: 42,
        name: 'The Hunger Games',
        category: 'Books',
        image: 'https://tse3.mm.bing.net/th?id=OIP.p_l2M4bHk8vAKr7I-hAIvwHaLR&pid=Api&P=0&h=180',
        rating: 4.6,
        stock: 20,
        description: 'Experience the dystopian world of Panem in The Hunger Games by Suzanne Collins, where survival is the only option.',
        price: 1224.18,
        discount: 5,
        discountPrice: 1162.97
    },
    {
        id: 43,
        name: 'The Alchemist',
        category: 'Books',
        image: 'https://tse2.mm.bing.net/th?id=OIP.K0FbWX-UYXGUrBGdJNHViQHaMQ&pid=Api&P=0&h=180',
        rating: 4.5,
        stock: 25,
        description: 'A beautiful tale of self-discovery and destiny, The Alchemist by Paulo Coelho inspires readers to follow their dreams.',
        price: 1063.18,
        discount: 10,
        discountPrice: 956.86
    },
    {
        id: 44,
        name: 'The Da Vinci Code',
        category: 'Books',
        image: 'https://tse1.mm.bing.net/th?id=OIP.XABFz04mAsaQNoemAX9eIwHaML&pid=Api&P=0&h=180',
        rating: 4.4,
        stock: 20,
        description: 'Join Robert Langdon in The Da Vinci Code by Dan Brown, a gripping mystery that intertwines art, history, and religion.',
        price: 1391.18,
        discount: 5,
        discountPrice: 1321.63
    },
    {
        id: 45,
        name: 'The Catcher in the Rye',
        category: 'Books',
        image: 'https://tse2.mm.bing.net/th?id=OIP.ysUvu--oOBJ3T2gdv4dBYwHaL8&pid=Api&P=0&h=180',
        rating: 4.3,
        stock: 25,
        description: 'A classic novel that explores teenage angst and alienation, The Catcher in the Rye by J.D. Salinger remains a timeless read.',
        price: 901.18,
        discount: 10,
        discountPrice: 810.66
    },
    // Additional Books
    {
        id: 46,
        name: '1984',
        category: 'Books',
        image: 'https://example.com/1984.jpg',
        rating: 4.7,
        stock: 30,
        description: 'George Orwell\'s dystopian novel 1984 explores themes of totalitarianism, surveillance, and individuality.',
        price: 799.00,
        discount: 10,
        discountPrice: 719.10
    },
    {
        id: 47,
        name: 'Pride and Prejudice',
        category: 'Books',
        image: 'https://example.com/pride-and-prejudice.jpg',
        rating: 4.8,
        stock: 15,
        description: 'Jane Austen\'s classic Pride and Prejudice delves into themes of love, class, and social expectations in 19th-century England.',
        price: 899.00,
        discount: 5,
        discountPrice: 854.05
    },
    {
        id: 48,
        name: 'To Kill a Mockingbird',
        category: 'Books',
        image: 'https://example.com/to-kill-a-mockingbird.jpg',
        rating: 4.6,
        stock: 20,
        description: 'Harper Lee\'s Pulitzer Prize-winning novel To Kill a Mockingbird addresses serious issues of race and moral growth in America.',
        price: 1099.00,
        discount: 10,
        discountPrice: 989.10
    },
    {
        id: 49,
        name: 'The Great Gatsby',
        category: 'Books',
        image: 'https://example.com/the-great-gatsby.jpg',
        rating: 4.4,
        stock: 25,
        description: 'F. Scott Fitzgerald\'s The Great Gatsby offers a critical look at the American Dream through the life of Jay Gatsby.',
        price: 799.00,
        discount: 5,
        discountPrice: 759.05
    },
    {
        id: 50,
        name: 'Brave New World',
        category: 'Books',
        image: 'https://example.com/brave-new-world.jpg',
        rating: 4.5,
        stock: 15,
        description: 'Aldous Huxley\'s Brave New World challenges perceptions of society and technology in a dystopian future.',
        price: 849.00,
        discount: 10,
        discountPrice: 764.10
    }
];
export default Data;