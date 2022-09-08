//All Brands
let catalog__subtitle = document.querySelector('.catalog__subtitle');
let catalog__sort = document.querySelector('.catalog__sort');

for (let elem of productType) {
    let text = elem;
    elem = document.createElement('button');
    elem.className = "catalog__brand";
    elem.classList.add(text);
    elem.innerHTML = text;
    catalog__sort.append(elem);


};

//Catalog
let catalog__clothes = document.querySelector('.catalog__clothes');

function appendAdd(arr) {
    catalog__clothes.innerHTML = "";
    arr.forEach(function (elem) {
        catalog__clothes.innerHTML += `<div class="position ${elem.tupe}"><img src=${elem.img}><p>${elem.name}<br> ${elem.tupe} <br>${elem.price}</p></div> `
    });
}

catalog__subtitle.addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == "H4") {
        appendAdd(allItems)
    }
})
appendAdd(allItems);

catalog__sort.addEventListener("click", function (event) {
    let target = event.target;
    if (target.className == "catalog__sort") return;
    console.log(target.classList[1]);
    if (target.classList[1] == "Shirt") {
        appendAdd(shirtNew);
    } else if (target.classList[1] == "Hoodie") {
        appendAdd(hoodieNew);
    } else if (target.classList[1] == "Tshirt") {
        appendAdd(tshirtNew);
    } else if (target.classList[1] == "Polo") {
        appendAdd(poloNew);
    } else if (target.classList[1] == "Shorts") {
        appendAdd(shortNew);
    }
})

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
    if (!element || element.className == "catalog__clothes" || element.className == "checkMark") return;
    if (element.lastChild.className != "checkMark") {
        let checkMark = document.createElement('div');
        checkMark.className = "checkMark"
        checkMark.innerHTML += '<img  src="./img/checkMark.png">'
        element.append(checkMark);
    }

    amount.innerHTML = Number(amount.innerHTML) + Number(1);
    amount.style.display = "block";
});