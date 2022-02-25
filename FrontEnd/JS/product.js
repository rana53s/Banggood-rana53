// now we are getting data and appending data function for cloth1
async function getData() {
try {
    let url = `https://sunilbaba.herokuapp.com/fashion/cloth1`;

    let res = await fetch(url);
    let data = await res.json();
    showData(data);
    console.log("telivisiondata", data);
} catch (error) {
    console.log(error);
}
}
getData();

function showData(data) {
data.forEach(function (el) {
    let maindiv = document.getElementById("cloth1");
    let div = document.createElement("div");
    maindiv.appendChild(div);

    let img = document.createElement("img");
    img.src = el.img;

    let oprice = document.createElement("p");
    oprice.innerHTML = "price" + el.Price;

    let nprice = document.createElement("p");
    nprice.innerHTML = el.endin;

    let offer = document.createElement("p");
    offer.innerHTML = "Sold" + el.sold;

    div.append(img, oprice, nprice, offer);
});
}

// now we are getting data and appending data function for cloth2
async function getData2() {
try {
    let url = `https://sunilbaba.herokuapp.com/fashion/cloth2`;

    let res = await fetch(url);
    let data = await res.json();
    showData2(data);
    console.log("telivisiondata", data);
} catch (error) {
    console.log(error);
}
}
getData2();

function showData2(data) {
data.forEach(function (el) {
    let maindiv = document.getElementById("cloth2");
    let div = document.createElement("div");
    maindiv.appendChild(div);

    let img = document.createElement("img");
    img.src = el.img;

    let oprice = document.createElement("p");
    oprice.innerHTML = "price" + el.Price;

    let nprice = document.createElement("p");
    nprice.innerHTML = el.endin;

    let offer = document.createElement("p");
    offer.innerHTML = "Sold" + el.sold;

    div.append(img, oprice, nprice, offer);
});
}

// now we are getting data and appending data function for cloth3
async function getData3() {
try {
    let url = `https://sunilbaba.herokuapp.com/fashion/cloth3`;

    let res = await fetch(url);
    let data = await res.json();
    showData3(data);
    console.log("telivisiondata", data);
} catch (error) {
    console.log(error);
}
}
getData3();

function showData3(data) {
data.forEach(function (el) {
    let maindiv = document.getElementById("cloth3");
    let div = document.createElement("div");
    maindiv.appendChild(div);

    let img = document.createElement("img");
    img.src = el.img;

    let oprice = document.createElement("p");
    oprice.innerHTML = "price" + el.Price;

    let nprice = document.createElement("p");
    nprice.innerHTML = el.endin;

    let offer = document.createElement("p");
    offer.innerHTML = "Sold" + el.sold;

    div.append(img, oprice, nprice, offer);
});
}

// now we are getting data and appending data function for cloth4
async function getData4() {
try {
    let url = `https://sunilbaba.herokuapp.com/fashion/cloth4`;

    let res = await fetch(url);
    let data = await res.json();
    showData4(data);
    console.log("telivisiondata", data);
} catch (error) {
    console.log(error);
}
}
getData4();

function showData4(data) {
data.forEach(function (el) {
    let maindiv = document.getElementById("cloth4");
    let div = document.createElement("div");
    maindiv.appendChild(div);

    let img = document.createElement("img");
    img.src = el.img;

    let oprice = document.createElement("p");
    oprice.innerHTML = "price" + el.Price;

    let nprice = document.createElement("p");
    nprice.innerHTML = el.endin;

    let offer = document.createElement("p");
    offer.innerHTML = "Sold" + el.sold;

    div.append(img, oprice, nprice, offer);
});
}
