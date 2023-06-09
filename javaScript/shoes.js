let shoeOne = {
    image:"pics/boots.jpg",
    name : "boots",
    price:"Kshs 8000",
    original:"Kshs 8500",
    itemId:"B001"
  
}
let shoeTwo = {
    image:"pics/casual.jpg",
    name :"casual",
    price:"Kshs 4000",
    original:"Kshs 4500",
    itemId:"B002"
  
}
let shoeThree = {
    image:"pics/football.jpg",
    name : "football",
    price:"Kshs 5500",
    original:"Kshs 6000",
    itemId:"B003"
  
}
let shoeFour = {
    image:"pics/indoor.jpeg",
    name : "indoor",
    price:"Kshs 1500",
    original:"Kshs 1900",
    itemId:"B004"
  
}
let shoeFive = {
    image:"pics/official.jfif",
    name : "official",
    price:"Kshs 6000",
    original:"Kshs 6500",
    itemId:"B005"
  
}
let shoeSix = {
    image:"pics/sports.jpg",
    name : "sports",
    price:"Kshs 2500",
    original:"Kshs 2999",
    itemId:"B006"
  
}

// shoeOne
document.getElementById("shoe1").src = shoeOne.image;
document.getElementById("name1").innerText = shoeOne.name;
document.getElementById("price1").innerText = shoeOne.price;
document.getElementById("original1").innerText = shoeOne.original;

// shoeTwo
document.getElementById("shoe2").src = shoeTwo.image;
document.getElementById("name2").innerText = shoeTwo.name;
document.getElementById("price2").innerText = shoeTwo.price;
document.getElementById("original2").innerText = shoeTwo.original;
// console.log(shoeTwo)

// shoeThree
document.getElementById("shoe3").src = shoeThree.image;
document.getElementById("name3").innerText = shoeThree.name;
document.getElementById("price3").innerText = shoeThree.price;
document.getElementById("original3").innerText = shoeThree.original;

// shoeFour
document.getElementById("shoe4").src = shoeFour.image;
document.getElementById("name4").innerText = shoeFour.name;
document.getElementById("price4").innerText = shoeFour.price;
document.getElementById("original4").innerText = shoeFour.original;

// shoeFive
document.getElementById("shoe5").src = shoeFive.image;
document.getElementById("name5").innerText = shoeFive.name;
document.getElementById("price5").innerText = shoeFive.price;
document.getElementById("original5").innerText = shoeFive.original;

// shoeSix
document.getElementById("shoe6").src = shoeSix.image;
document.getElementById("name6").innerText = shoeSix.name;
document.getElementById("price6").innerText = shoeSix.price;
document.getElementById("original6").innerText = shoeSix.original;


document.getElementById("shoe1").onclick =function() {
    window.location.href = "/legs.html" + "?" + shoeOne.itemId;
}
document.getElementById("shoe2").onclick = function() {
    window.location.href = "/legs.html" + "?" + shoeTwo.itemId;
}
document.getElementById("shoe3").onclick = function(){
    window.location.href = "/legs.html" + "?" + shoeThree.itemId;
}
document.getElementById("shoe4").onclick = function() {
    window.location.href = "/legs.html" + "?" + shoeFour.itemId;
}
document.getElementById("shoe5").onclick = function() {
    window.location.href = "/legs.html" + "?" + shoeFive.itemId;
}
document.getElementById("shoe6").onclick = function() {
    window.location.href = "/legs.html" + "?" + shoeSix.itemId;
}
