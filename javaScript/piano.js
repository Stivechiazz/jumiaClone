let pianoOne = {
    image:"photos/piano1.jfif",
    name:"piano1",
    price:"kshs 289000",
    original:"Kshs 300000",
    itemId:"A001"
}
let pianoTwo = {
    image:"photos/piano2.jfif",
    name:"piano2",
    price:"kshs 340000",
    original:"Kshs 370000",
    itemId:"A002"
}
let pianoThree = {
    image:"photos/piano3.jpg",
    name:"piano3",
    price:"Kshs 420000",
    original:"Kshs 450000",
    itemId:"A003"
}

// pianoOne
document.getElementById("piano1").src = pianoOne.image;
document.getElementById("name1").innerText = pianoOne.name;
document.getElementById("price1").innerText = pianoOne.price;
document.getElementById("original1").innerText = pianoOne.original;

// pianoTwo
document.getElementById("piano2").src = pianoTwo.image;
document.getElementById("name2").innerText = pianoTwo.name;
document.getElementById("price2").innerText = pianoTwo.price;
document.getElementById("original2").innerText = pianoTwo.original;

// pianoThree
document.getElementById("piano3").src = pianoThree.image;
document.getElementById("name3").innerText = pianoThree.name;
document.getElementById("price3").innerText =pianoThree.price;
document.getElementById("original3").innerText =pianoThree.original


document.getElementById("piano1").onclick = function() {
    window.location.href = "/key.html" + "?" + pianoOne.itemId;
}
document.getElementById("piano2").onclick = function() {
    window.location.href = "/key.html" + "?" + pianoTwo.itemId;
}
document.getElementById("piano3").onclick = function() {
    window.location.href = "/key.html" + "?" + pianoThree.itemId;
}