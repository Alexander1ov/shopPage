//All Brands
let subtitle = document.querySelector('.subtitle');
let catalog__sort = document.querySelector('.catalog__sort');

let shirt = document.createElement('button');
shirt.className = "Brand";
shirt.innerHTML = "Shirt";
catalog__sort.append(shirt);

let hoodie = document.createElement('button');
hoodie.className = "Brand";
hoodie.innerHTML = "Hoodie";
catalog__sort.append(hoodie);

let tshirt = document.createElement('button');
tshirt.className = "Brand";
tshirt.innerHTML = "T-shirt";
catalog__sort.append(tshirt);

let polo = document.createElement('button');
polo.className = "Brand";
polo.innerHTML = "Polo";
catalog__sort.append(polo);

let shorts = document.createElement('button');
shorts.className = "Brand";
shorts.innerHTML = "Shorts";
catalog__sort.append(shorts);


//Catalog

let catalog__clothes = document.querySelector('.catalog__clothes');
//рубашки
catalog__clothes.innerHTML = '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 1 <br> Shirt <br>$188.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 2 <br> Shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 3 <br> Shirt <br>$108.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 4 <br> Shirt <br>$98.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 5 <br> Shirt <br>$56.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 6 <br> Shirt <br>$33.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 7 <br> Shirt <br>$45.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 8 <br> Shirt <br>$86.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 9 <br> Shirt <br>$97.00</p></div> '

//худи
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 1 <br> Hoodie <br>$870.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 2 <br> Hoodie <br>$875.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 3 <br> Hoodie <br>$835.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 4 <br> Hoodie <br>$898.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 5 <br> Hoodie <br>$835.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 6 <br> Hoodie <br>$846.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 7 <br> Hoodie <br>$798.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 8 <br> Hoodie <br>$655.00</p></div> '
catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 9 <br> Hoodie <br>$988.00</p></div> '

//футболки
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 1 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 2 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 3 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 4 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 5 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 6 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 7 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 8 <br> T-shirt <br>$87.00</p></div> '
catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 9 <br> T-shirt <br>$87.00</p></div> '

//поло
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 1 <br> Polo <br>$55.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 2 <br> Polo <br>$35.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 3 <br> Polo <br>$85.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 4 <br> Polo <br>$45.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 5 <br> Polo <br>$35.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 6 <br> Polo <br>$95.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 7 <br> Polo <br>$55.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 8 <br> Polo <br>$75.00</p></div> '
catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 9 <br> Polo <br>$35.00</p></div> '

//шорты
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 1 <br> Shorts <br>$75.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 2 <br> Shorts <br>$125.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 3 <br> Shorts <br>$65.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 4 <br> Shorts <br>$79.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 5 <br> Shorts <br>$41.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 6 <br> Shorts <br>$98.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 7 <br> Shorts <br>$38.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 8 <br> Shorts <br>$74.00</p></div> '
catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 9 <br> Shorts <br>$13.00</p></div> '



shirt.addEventListener('click', function () {
    catalog__clothes.innerHTML = '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 1 <br> Shirt <br>$188.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 2 <br> Shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 3 <br> Shirt <br>$108.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 4 <br> Shirt <br>$98.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 5 <br> Shirt <br>$56.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 6 <br> Shirt <br>$33.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 7 <br> Shirt <br>$45.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 8 <br> Shirt <br>$86.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 9 <br> Shirt <br>$97.00</p></div> '

});
hoodie.addEventListener('click', function () {
    catalog__clothes.innerHTML = '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 1 <br> Hoodie <br>$870.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 2 <br> Hoodie <br>$875.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 3 <br> Hoodie <br>$835.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 4 <br> Hoodie <br>$898.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 5 <br> Hoodie <br>$835.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 6 <br> Hoodie <br>$846.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 7 <br> Hoodie <br>$798.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 8 <br> Hoodie <br>$655.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 9 <br> Hoodie <br>$988.00</p></div> '

});
tshirt.addEventListener('click', function () {
    catalog__clothes.innerHTML = '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 1 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 2 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 3 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 4 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 5 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 6 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 7 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 8 <br> T-shirt <br>$87.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 9 <br> T-shirt <br>$87.00</p></div> '

});
polo.addEventListener('click', function () {
    catalog__clothes.innerHTML = '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 1 <br> Polo <br>$55.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 2 <br> Polo <br>$35.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 3 <br> Polo <br>$85.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 4 <br> Polo <br>$45.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 5 <br> Polo <br>$35.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 6 <br> Polo <br>$95.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 7 <br> Polo <br>$55.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 8 <br> Polo <br>$75.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 9 <br> Polo <br>$35.00</p></div> '
});
shorts.addEventListener('click', function () {
    catalog__clothes.innerHTML = '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 1 <br> Shorts <br>$75.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 2 <br> Shorts <br>$125.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 3 <br> Shorts <br>$65.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 4 <br> Shorts <br>$79.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 5 <br> Shorts <br>$41.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 6 <br> Shorts <br>$98.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 7 <br> Shorts <br>$38.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 8 <br> Shorts <br>$74.00</p></div> '
    catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 9 <br> Shorts <br>$13.00</p></div> '
});

subtitle.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == "H4") {
        //рубашки
        catalog__clothes.innerHTML = '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 1 <br> Shirt <br>$188.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 2 <br> Shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 3 <br> Shirt <br>$108.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 4 <br> Shirt <br>$98.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 5 <br> Shirt <br>$56.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 6 <br> Shirt <br>$33.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 7 <br> Shirt <br>$45.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 8 <br> Shirt <br>$86.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shirt"><img src="./img/1.png" alt=""><p>Product 9 <br> Shirt <br>$97.00</p></div> '

        //худи
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 1 <br> Hoodie <br>$870.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 2 <br> Hoodie <br>$875.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 3 <br> Hoodie <br>$835.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 4 <br> Hoodie <br>$898.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 5 <br> Hoodie <br>$835.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 6 <br> Hoodie <br>$846.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 7 <br> Hoodie <br>$798.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 8 <br> Hoodie <br>$655.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position hoodie"><img src="./img/2.png" alt=""><p>Product 9 <br> Hoodie <br>$988.00</p></div> '

        //футболки
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 1 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 2 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 3 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 4 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 5 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 6 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 7 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 8 <br> T-shirt <br>$87.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position tshirt"><img src="./img/3.png" alt=""><p>Product 9 <br> T-shirt <br>$87.00</p></div> '

        //поло
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 1 <br> Polo <br>$55.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 2 <br> Polo <br>$35.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 3 <br> Polo <br>$85.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 4 <br> Polo <br>$45.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 5 <br> Polo <br>$35.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 6 <br> Polo <br>$95.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 7 <br> Polo <br>$55.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 8 <br> Polo <br>$75.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position polo"><img src="./img/6.png" alt=""><p>Product 9 <br> Polo <br>$35.00</p></div> '

        //шорты
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 1 <br> Shorts <br>$75.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 2 <br> Shorts <br>$125.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 3 <br> Shorts <br>$65.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 4 <br> Shorts <br>$79.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 5 <br> Shorts <br>$41.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 6 <br> Shorts <br>$98.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 7 <br> Shorts <br>$38.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 8 <br> Shorts <br>$74.00</p></div> '
        catalog__clothes.innerHTML += '<div class="position shorts"><img src="./img/blue.png" alt=""><p>Product 9 <br> Shorts <br>$13.00</p></div> '
    }
})

let header__img = document.querySelector('.header__img')
let amount = document.createElement('div');
amount.className = "amount";
header__img.append(amount);

header__img.addEventListener("click", function () {
    location.href = 'https://www.ozon.ru/cart';
})

catalog__clothes.addEventListener('click', function (event) {
    let element = event.target.closest('div');
    if (!element) return;
    amount.innerHTML = Number(amount.innerHTML) + Number(1);
    amount.style.display = "block";
});