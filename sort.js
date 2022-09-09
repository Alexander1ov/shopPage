//All Brands
let catalogSubtitle = document.querySelector('.catalog__subtitle');
let catalogSort = document.querySelector('.catalog__sort');

productType.forEach(function (elem) {
    catalogSort.innerHTML += `<button class="catalog__brand ${elem}" data-type=${elem}>${elem}</button> `
})

catalogSubtitle.addEventListener('click', function (event) {
    let target = event.target;
    if (target.dataset.header == "title") {
        addProducts(allItems)
    }
})

let catalogBrand = document.querySelector('.catalog__brand');

catalogSort.addEventListener("click", function (event) {
    let element = event.target.closest('.catalog__brand');
    if (!element) return;
    catalogClothes.innerHTML = "";
    for (let object of allItems) {
        if (object.type == element.dataset.type) {
            catalogClothes.innerHTML += `<div class="position ${object.type}"><img src=${object.img}><p>${object.name}<br> ${object.type} <br>${object.price}</p></div> `
        };
    }
})

//Catalog
let catalogClothes = document.querySelector('.catalog__clothes');

function addProducts(arr) {
    catalogClothes.innerHTML = "";
    arr.forEach(function (elem) {
        catalogClothes.innerHTML += `<div class="position ${elem.type}"><img src=${elem.img}><p>${elem.name}<br> ${elem.type} <br>${elem.price}</p></div> `
    });
}
addProducts(allItems);

//basket
let headerImg = document.querySelector('.header__img')
let amount = document.createElement('div');
amount.className = "amount";
headerImg.append(amount);

headerImg.addEventListener("click", function () {
    location.href = 'https://www.ozon.ru/cart';
})

//mark
catalogClothes.addEventListener('click', function (event) {
    let element = event.target.closest('.position');
    element.innerHTML += `<div class="checkMark"><img  src="./img/checkMark.png"</div> `
    amount.innerHTML = Number(amount.innerHTML) + Number(1);
    amount.style.display = "block";
});