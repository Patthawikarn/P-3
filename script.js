const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productBrand = document.getElementById('productBrand');
const blueCol = document.getElementById('blueCol');
const redCol = document.getElementById('redCol');
const greenCol = document.getElementById('greenCol');
const limited = document.getElementById('limited');


blueCol.addEventListener('click', () => {
    productImg.src = 'img/nike-blue.png';
    productName.textContent = 'Nike Dunk High Blue';
    productPrice.innerHTML = '<strong>$42.00</strong>';
    productBrand.style.backgroundColor = 'blue';
    limited.style.display = 'none';
})

redCol.addEventListener('click', () => {
    productImg.src = 'img/nike-red.png';
    productName.textContent = 'Nike Dunk High Red';
    productPrice.innerHTML = '<strong>$36.00</strong>';
    productBrand.style.backgroundColor = 'red';
    limited.style.display = 'none';
})

greenCol.addEventListener('click', () => {
    productImg.src = 'img/nike-green.png';
    productName.textContent = 'Nike Dunk High Green';
    productPrice.innerHTML = '<strong>$55.00</strong>';
    productBrand.style.backgroundColor = 'green';
    limited.style.display = 'block';
})