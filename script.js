const products = [
    {
        id: 1,
        brand: 'NIKE',
        name: 'Nike Air Force 1',
        price: getRandomPrice(),
        img: 'img/1.png',
        description: 'The Nike Air Force 1 is a classic sneaker that offers timeless style and comfort.',
        reviews: '4.5/5 (150 Reviews)',
        limited: false
    },
    {
        id: 2,
        brand: 'NIKE',
        name: 'Nike Air Max 90',
        price: getRandomPrice(),
        img: 'img/2.png',
        description: 'Nike Air Max 90 delivers both style and cushioning for everyday wear.',
        reviews: '4.7/5 (200 Reviews)',
        limited: true
    },
    {
        id: 3,
        brand: 'NIKE',
        name: 'Nike React Infinity Run',
        price: getRandomPrice(),
        img: 'img/3.png',
        description: 'Experience ultimate comfort and support with the Nike React Infinity Run.',
        reviews: '4.6/5 (180 Reviews)',
        limited: false
    },
    {
        id: 4,
        brand: 'NIKE',
        name: 'Nike Blazer Mid',
        price: getRandomPrice(),
        img: 'img/4.png',
        description: 'The Nike Blazer Mid combines classic design with modern comfort.',
        reviews: '4.4/5 (120 Reviews)',
        limited: false
    },
    {
        id: 5,
        brand: 'NIKE',
        name: 'Nike Air Zoom Pegasus',
        price: getRandomPrice(),
        img: 'img/5.png',
        description: 'The Nike Air Zoom Pegasus is perfect for runners seeking speed and comfort.',
        reviews: '4.8/5 (220 Reviews)',
        limited: true
    },
    {
        id: 6,
        brand: 'NIKE',
        name: 'Nike Dunk Low',
        price: getRandomPrice(),
        img: 'img/6.png',
        description: 'Nike Dunk Low offers a sleek design with superior durability.',
        reviews: '4.5/5 (160 Reviews)',
        limited: false
    },
    {
        id: 7,
        brand: 'NIKE',
        name: 'Nike Free RN',
        price: getRandomPrice(),
        img: 'img/7.png',
        description: 'Feel the freedom with Nike Free RN’s flexible and lightweight design.',
        reviews: '4.3/5 (140 Reviews)',
        limited: false
    },
    {
        id: 8,
        brand: 'NIKE',
        name: 'Nike Air Max 270',
        price: getRandomPrice(),
        img: 'img/8.png',
        description: 'Nike Air Max 270 features a large Air unit for enhanced cushioning.',
        reviews: '4.6/5 (190 Reviews)',
        limited: true
    },
    {
        id: 9,
        brand: 'NIKE',
        name: 'Nike SB Dunk',
        price: getRandomPrice(),
        img: 'img/9.png',
        description: 'Nike SB Dunk is designed for skateboarders and style enthusiasts alike.',
        reviews: '4.7/5 (210 Reviews)',
        limited: false
    },
    {
        id: 10,
        brand: 'NIKE',
        name: 'Nike Air VaporMax',
        price: getRandomPrice(),
        img: 'img/10.png',
        description: 'Experience the future of cushioning with Nike Air VaporMax.',
        reviews: '4.9/5 (250 Reviews)',
        limited: true
    },
    {
        id: 11,
        brand: 'NIKE',
        name: 'Nike Shox R4',
        price: getRandomPrice(),
        img: 'img/11.png',
        description: 'Nike Shox R4 provides innovative cushioning for high-performance athletes.',
        reviews: '4.4/5 (130 Reviews)',
        limited: false
    },
    {
        id: 12,
        brand: 'NIKE',
        name: 'Nike Air Zoom Tempo',
        price: getRandomPrice(),
        img: 'img/nike-air.png',
        description: 'The Nike Air Zoom Tempo offers responsive cushioning for speed training.',
        reviews: '4.5/5 (170 Reviews)',
        limited: false
    },
    {
        id: 13,
        brand: 'NIKE',
        name: 'Nike Air Presto',
        price: getRandomPrice(),
        img: 'img/nike-blue.png',
        description: 'Nike Air Presto combines comfort and style for everyday wear.',
        reviews: '4.3/5 (125 Reviews)',
        limited: false
    },
    {
        id: 14,
        brand: 'NIKE',
        name: 'Nike ZoomX Vaporfly',
        price: getRandomPrice(),
        img: 'img/nike-brown.png',
        description: 'Achieve new personal bests with Nike ZoomX Vaporfly’s advanced technology.',
        reviews: '4.8/5 (230 Reviews)',
        limited: true
    },
    {
        id: 15,
        brand: 'NIKE',
        name: 'Nike Air Max 97',
        price: getRandomPrice(),
        img: 'img/nike-girl.png',
        description: 'Nike Air Max 97 features a sleek design with continuous Air cushioning.',
        reviews: '4.6/5 (195 Reviews)',
        limited: false
    },
    {
        id: 16,
        brand: 'NIKE',
        name: 'Nike Air Max Plus',
        price: getRandomPrice(),
        img: 'img/nike-gray.png',
        description: 'Nike Air Max Plus offers dynamic cushioning and unique design elements.',
        reviews: '4.5/5 (185 Reviews)',
        limited: false
    },
    {
        id: 17,
        brand: 'NIKE',
        name: 'Nike React Phantom Run',
        price: getRandomPrice(),
        img: 'img/nike-green.png',
        description: 'Nike React Phantom Run combines lightweight design with responsive cushioning.',
        reviews: '4.7/5 (205 Reviews)',
        limited: false
    },
    {
        id: 18,
        brand: 'NIKE',
        name: 'Nike Air Max 720',
        price: getRandomPrice(),
        img: 'img/nike-nature.png',
        description: 'Nike Air Max 720 features the tallest Air unit for maximum cushioning.',
        reviews: '4.4/5 (155 Reviews)',
        limited: true
    },
    {
        id: 19,
        brand: 'NIKE',
        name: 'Nike Kyrie Infinity',
        price: getRandomPrice(),
        img: 'img/nike-red.png',
        description: 'Nike Kyrie Infinity is designed for ultimate performance on the court.',
        reviews: '4.6/5 (160 Reviews)',
        limited: false
    },
    {
        id: 20,
        brand: 'NIKE',
        name: 'Nike Lebron 18',
        price: getRandomPrice(),
        img: 'img/nike-run.png',
        description: 'Nike Lebron 18 offers unparalleled support and cushioning for basketball players.',
        reviews: '4.8/5 (220 Reviews)',
        limited: true
    },
    {
        id: 21,
        brand: 'NIKE',
        name: 'Nike Air Huarache',
        price: getRandomPrice(),
        img: 'img/nike-air.png',
        description: 'Nike Air Huarache combines lightweight design with innovative cushioning.',
        reviews: '4.5/5 (175 Reviews)',
        limited: false
    },
    {
        id: 22,
        brand: 'NIKE',
        name: 'Nike Air Max 1',
        price: getRandomPrice(),
        img: 'img/nike-nature.png',
        description: 'Nike Air Max 1 is a timeless classic with iconic design and superior comfort.',
        reviews: '4.7/5 (210 Reviews)',
        limited: false
    }
];

// ฟังก์ชันสำหรับสร้างราคาสุ่มระหว่าง $50 ถึง $300
function getRandomPrice() {
    return (Math.random() * (300 - 50) + 50).toFixed(2);
}

// ตะกร้าสินค้า
let cart = [];

// โหลดตะกร้าจาก LocalStorage เมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadProducts();
    updateCartCount();
    if (document.getElementById('cartGrid')) {
        loadCartItems();
    }
});

// ฟังก์ชันสำหรับสร้างการ์ดสินค้า
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // ส่วนภาพสินค้า
    const productImgDiv = document.createElement('div');
    productImgDiv.classList.add('product-img');

    const limitedSpan = document.createElement('span');
    limitedSpan.classList.add('limited');
    limitedSpan.textContent = 'Limited Edition';
    if (product.limited) {
        limitedSpan.style.display = 'block';
    }

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;
    img.id = `productImg-${product.id}`;

    productImgDiv.appendChild(limitedSpan);
    productImgDiv.appendChild(img);

    // ส่วนข้อมูลสินค้า
    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('product-info');

    const brandSpan = document.createElement('span');
    brandSpan.classList.add('product-brand');
    brandSpan.textContent = product.brand;

    const nameH3 = document.createElement('h3');
    nameH3.classList.add('product-name');
    nameH3.textContent = product.name;

    const priceP = document.createElement('p');
    priceP.classList.add('product-price');
    priceP.innerHTML = `<strong>$${product.price}</strong>`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => addToCart(product.id));

    productInfoDiv.appendChild(brandSpan);
    productInfoDiv.appendChild(nameH3);
    productInfoDiv.appendChild(priceP);
    productInfoDiv.appendChild(addButton);

    card.appendChild(productImgDiv);
    card.appendChild(productInfoDiv);

    return card;
}

// ฟังก์ชันสำหรับเพิ่มสินค้าไปยังตะกร้า
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        saveCart();
        alert(`เพิ่มสินค้า "${product.name}" ไปยังตะกร้าแล้ว!`);
    }
}

// ฟังก์ชันสำหรับอัพเดตจำนวนสินค้าในตะกร้า
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(cartCount => {
        cartCount.textContent = cart.length;
    });
}

// ฟังก์ชันสำหรับเก็บตะกร้าใน LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ฟังก์ชันสำหรับโหลดตะกร้าจาก LocalStorage
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}

// ฟังก์ชันสำหรับโหลดสินค้าทั้งหมดลงในหน้าจอ
function loadProducts() {
    // ตรวจสอบว่าคุณอยู่บนหน้า products.html
    if (document.getElementById('productGrid')) {
        const productGrid = document.getElementById('productGrid');
        products.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    }
}

// ฟังก์ชันสำหรับสร้างรายการสินค้าในตะกร้า
function createCartItem(product, index) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('cart-item-details');

    const nameH3 = document.createElement('h3');
    nameH3.textContent = product.name;

    const priceP = document.createElement('p');
    priceP.textContent = `ราคา: $${product.price}`;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'ลบ';
    removeButton.addEventListener('click', () => removeFromCart(index));

    detailsDiv.appendChild(nameH3);
    detailsDiv.appendChild(priceP);
    detailsDiv.appendChild(removeButton);

    cartItem.appendChild(img);
    cartItem.appendChild(detailsDiv);

    return cartItem;
}

// ฟังก์ชันสำหรับโหลดรายการสินค้าจากตะกร้า
function loadCartItems() {
    const cartGrid = document.getElementById('cartGrid');
    cartGrid.innerHTML = ''; // ล้างรายการเดิม

    cart.forEach((product, index) => {
        const cartItem = createCartItem(product, index);
        cartGrid.appendChild(cartItem);
    });

    calculateTotal();
}

// ฟังก์ชันสำหรับลบสินค้าจากตะกร้า
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveCart();
    loadCartItems();
}

// ฟังก์ชันสำหรับคำนวณยอดรวม
function calculateTotal() {
    const totalPriceElement = document.getElementById('total-price');
    const total = cart.reduce((sum, product) => sum + parseFloat(product.price), 0);
    totalPriceElement.textContent = total.toFixed(2);
}

// ฟังก์ชันสำหรับชำระเงิน
document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('ตะกร้าสินค้าของคุณว่างเปล่า!');
            } else {
                alert('ทำการชำระเงินเรียบร้อยแล้ว!');
                cart = [];
                updateCartCount();
                saveCart();
                loadCartItems();
            }
        });
    }
});
