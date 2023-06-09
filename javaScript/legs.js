shoeOne = {
    image:"pics/boots.jpg",
    name : "boots",
    price:"8000",
    original:"8500",
    itemId:"B001"
} 
 shoeTwo = {
    image:"pics/casual.jpg",
    name :"casual",
    price:"4000",
    original:"4500",
    itemId:"B002"
  
}
 shoeThree = {
    image:"pics/football.jpg",
    name : "football",
    price:"5500",
    original:"6000",
    itemId:"B003"
  
}
 shoeFour = {
    image:"pics/indoor.jpeg",
    name : "indoor",
    price:"1500",
    original:"1900",
    itemId:"B004"
  
}
shoeFive = {
    image:"pics/official.jfif",
    name : "official",
    price:"6000",
    original:"6500",
    itemId:"B005"
  
}
shoeSix = {
    image:"pics/sports.jpg",
    name : "sports",
    price:"2500",
    original:"2999",
    itemId:"B006"
  
}

let selectId = decodeURIComponent(window.location.search)
let selectedItem = selectId.substring(1)
console.log(selectedItem)
if (selectedItem == shoeOne.itemId){
    document.getElementById("shoe1").src = shoeOne.image;
    document.getElementById("name1").innerText = shoeOne.name;
    document.getElementById("price1").innerText = shoeOne.price;
    document.getElementById("original1").innerText = shoeOne.original;

    var cost = shoeOne.price;
    qty(cost)
    
}else if (selectedItem == shoeTwo.itemId) {
    document.getElementById("shoe1").src = shoeTwo.image;
    document.getElementById("name1").innerText = shoeTwo.name;
    document.getElementById("price1").innerText = shoeTwo.price;
    document.getElementById("original1").innerText = shoeTwo.original;

    var cost = shoeTwo.price;
    qty(cost)

}else if (selectedItem == shoeThree.itemId){
    document.getElementById("shoe1").src = shoeThree.image;
    document.getElementById("name1").innerText = shoeThree.name;
    document.getElementById("price1").innerText = shoeThree.price;
    document.getElementById("original1").innerText = shoeThree.original;

    var cost = shoeThree.price;
    qty(cost)

}else if (selectedItem == shoeFour.itemId) {
    document.getElementById("shoe1").src = shoeFour.image;
    document.getElementById("name1").innerText = shoeFour.name;
    document.getElementById("price1").innerText = shoeFour.price;
    document.getElementById("original1").innerText = shoeFour.original;

    var cost = shoeFour.price;
    qty(cost)

}else if (selectedItem == shoeFive.itemId) {
    document.getElementById("shoe1").src = shoeFive.image;
    document.getElementById("name1").innerText = shoeFive.name;
    document.getElementById("price1").innerText = shoeFive.price;
    document.getElementById("original1").innerText = shoeFive.original;

    var cost = shoeFive.price;
    qty(cost)
}else if(selectedItem == shoeSix.itemId) {
    document.getElementById("shoe1").src = shoeSix.image;
    document.getElementById("name1").innerText = shoeSix.name;
    document.getElementById("price1").innerText = shoeSix.price;
    document.getElementById("origina1").innerText = shoeSix.original;

    var cost = shoeSix.price;
    qty(cost)
}

function qty(cost) {
    document.getElementById("ngapi").onkeyup = function(){
        let amount = parseInt(cost);
        let quantity =parseInt (document.getElementById("ngapi").value);
    if (quantity > 1){
        var total = quantity*amount;
        document.getElementById("total").innerText = total;
        place(total)
    }else {
        total = 1*amount;
        document.getElementById("total").innerText = total;
        console.log(total)
        place(total)
    }

    }
}

function place(total) {
    document.getElementById("loc").onchange = function() {
      var  kikuyu = 540;
      var  kabete = 479;
      var  kangemi = 399;
      var  uthiru = 200;
      var place = document.getElementById("loc").value;
      if (place == "kikuyu") {
        document.getElementById("total").innerText = "total" + ":" + (total + kikuyu);
      } else if (place == "kabete"){
        document.getElementById("total").innerText = "total" + ":" + (total + kabete)
      } else if (place == "kangemi"){
        document.getElementById("total").innerText = "total" + ":" + (total + kangemi)
      }else if (place == "uthiru"){
        document.getElementById("total").innerText = "total" + ":" + (total + uthiru)
      }

    }
}