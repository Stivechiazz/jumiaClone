 PhoneOne = {
    image:"Images/Iphone11.jfif",
    name:"Iphone 11",
    price:"80000",
    original:"82000",
    itemId:"B001"
}

 PhoneTwo = {
    image:"Images/Iphone12.png",
    name:"Iphone 12",
    price:"90000",
    original:"95499",
    ItemId:"B002"
}

 phoneThree = {
    image:"Images/Iphone13.jpg",
    name:"Iphone 13",
    price:"104000",
    original:"109499",
    ItemId:"B003"
}

 phoneFour = {
    image:"Images/Iphone14.jfif",
    name:"Iphone 14",
    price:"117000",
    original:"123000",
    ItemId:"B004"
}

let selectId = decodeURIComponent(window.location.search)
let selectedItem = selectId.substring(1);
console.log(selectedItem)
if (selectedItem == PhoneOne.itemId) {
    document.getElementById("phone1").src = PhoneOne.image;
    document.getElementById("name1").innerText = PhoneOne.name;
    document.getElementById("price1").innerText = PhoneOne.price;
    document.getElementById("original1").innerText = PhoneOne.original;

    var cost = PhoneOne.price;
    qty(cost)
} else if (selectedItem == PhoneTwo.ItemId) {
    document.getElementById("phone1").src = PhoneTwo.image;
    document.getElementById("name1").innerText = PhoneTwo.name;
    document.getElementById("price1").innerText = PhoneTwo.price;
    document.getElementById("original1").innerText = PhoneTwo.original;

    var cost = PhoneTwo.price
    qty(cost)

} else if (selectedItem == phoneThree.ItemId) {
    document.getElementById("phone1").src = phoneThree.image;
    document.getElementById("name1").innerText = phoneThree.name;
    document.getElementById("price1").innerText = phoneThree.price;
    document.getElementById("original1").innerText = phoneThree.original;

    var cost = phoneThree.price
    qty(cost)

} else if (selectedItem == phoneFour.ItemId) {
    document.getElementById("phone1").src = phoneFour.image;
    document.getElementById("name1").innerText = phoneFour.name;
    document.getElementById("price1").innerText = phoneFour.price;
    document.getElementById("original1").innerText = phoneFour.original;

    var cost = phoneFour.price
    qty(cost)

}
function qty(cost) {
    document.getElementById("quant").onkeyup = function() {
        let amount = parseInt(cost);
        let quantity = parseInt(document.getElementById("quant").value);
        if(quantity > 1){
            var total = (quantity * amount);
            document.getElementById("total").innerText = total;
            place(total)
        }else {
            total = 1*amount;
            console.log(total)
            document.getElementById("total").innerText = total;
            place(total)
        }
    }

}


function place(total) {
    document.getElementById("location").onchange = function(){
        var Karen = 239
        var Westlands = 400
        var CBD =  600
        var place = document.getElementById("location").value;
        if (place == "Karen"){
            document.getElementById("total").innerText = "total" + ":"+ (total+Karen)
        } else if (place == "Westlands"){
            document.getElementById("total").innerText = "total" + ":" + (total+Westlands)
        } else if (place == "CBD"){
            document.getElementById("total").innerText = "total" + ":" + (total + CBD)
        }
        

    }

}



