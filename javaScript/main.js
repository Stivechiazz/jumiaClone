let PhoneOne = {
    image:"Images/Iphone11.jfif",
    name:"Iphone 11",
    price:"Kshs 80000",
    original:"Kshs 82000",
    itemId:"B001"
}

let PhoneTwo = {
    image:"Images/Iphone12.png",
    name:"Iphone 12",
    price:"Kshs 90000",
    original:"Kshs 95499",
    ItemId:"B002"
}

let phoneThree = {
    image:"Images/Iphone13.jpg",
    name:"Iphone 13",
    price:"Kshs 104000",
    original:"Kshs 109499",
    ItemId:"B003"
}

let phoneFour = {
    image:"Images/Iphone14.jfif",
    name:"Iphone 14",
    price:"Kshs 117000",
    original:"Kshs 123000",
    ItemId:"B004"
}


// PhoneOne
document.getElementById("phone1").src = PhoneOne.image;
document.getElementById("name1").innerText = PhoneOne.name;
document.getElementById("price1").innerText = PhoneOne.price;
document.getElementById("original1").innerText = PhoneOne.original;

// PhoneTwo
document.getElementById("phone2").src = PhoneTwo.image;
document.getElementById("name2").innerText = PhoneTwo.name;
document.getElementById("price2").innerText = PhoneTwo.price;
document.getElementById("original2").innerText = PhoneTwo.original;


// PhoneThree
document.getElementById("phone3").src = phoneThree.image;
document.getElementById("name3").innerText = phoneThree.name;
document.getElementById("price3").innerText = phoneThree.price;
document.getElementById("original3").innerText = phoneThree.original;


// PhoneFour
document.getElementById("phone4").src = phoneFour.image;
document.getElementById("name4").innerText = phoneFour.name;
document.getElementById("price4").innerText = phoneFour.price;
document.getElementById("original4").innerText = phoneFour.original;



document.getElementById("phoneOne").onclick = function () {
    window.location.href = "/select.html" + "?" + PhoneOne.itemId;
}
document.getElementById("phoneTwo").onclick = function() {
    window.location.href = "/select.html" + "?" + PhoneTwo.ItemId;
}
document.getElementById("phoneThree").onclick = function() {
    window.location.href = "/select.html" + "?" + phoneThree.ItemId;
}
document.getElementById("phoneFour").onclick = function() {
    window.location.href = "/select.html" + "?" + phoneFour.ItemId;
}

