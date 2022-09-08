//All Brands
let catalog__subtitle = document.querySelector('.catalog__subtitle');
let catalog__sort = document.querySelector('.catalog__sort');

let shirt = document.createElement('button');
shirt.className = "catalog__brand";
shirt.innerHTML = "Shirt";
catalog__sort.append(shirt);

let hoodie = document.createElement('button');
hoodie.className = "catalog__brand";
hoodie.innerHTML = "Hoodie";
catalog__sort.append(hoodie);

let tshirt = document.createElement('button');
tshirt.className = "catalog__brand";
tshirt.innerHTML = "T-shirt";
catalog__sort.append(tshirt);

let polo = document.createElement('button');
polo.className = "catalog__brand";
polo.innerHTML = "Polo";
catalog__sort.append(polo);

let shorts = document.createElement('button');
shorts.className = "catalog__brand";
shorts.innerHTML = "Shorts";
catalog__sort.append(shorts);


//Catalog
let catalog__clothes = document.querySelector('.catalog__clothes');

function appendAdd(arr) {
    catalog__clothes.innerHTML = "";
    for (let elem of arr) {
        catalog__clothes.innerHTML += `<div class="position ${elem.tupe}"><img src=${elem.img}><p>${elem.name}<br> ${elem.tupe} <br>${elem.price}</p></div> `
        //let newProduct = document.createElement('div');
        //newProduct.classList.add("position");
        //newProduct.classList.add(elem.tupe);
        //catalog__clothes.append(newProduct);
        //let productImg = document.createElement('img')
        //productImg.src = elem.img
        //newProduct.append(productImg)
        //let content = document.createElement('p');
        //content.innerHTML = elem.name + "\n" + elem.tupe + "\n " + elem.price;
        //newProduct.append(content)
    };
}

shirt.addEventListener("click", function () {
    appendAdd(shirtNew)
});

hoodie.addEventListener('click', function () {
    appendAdd(hoodieNew)
});

tshirt.addEventListener('click', function () {
    appendAdd(tshirtNew)
});

polo.addEventListener('click', function () {
    appendAdd(poloNew)
});
shorts.addEventListener('click', function () {
    appendAdd(shortNew)
});
catalog__subtitle.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == "H4") {
        appendAdd(allItems)
    }
})
appendAdd(allItems);

//Корзина
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