pianoOne = {
    image:"photos/piano1.jfif",
    name:"piano1",
    price:"289000",
    original:"300000",
    itemId:"A001"
}
pianoTwo = {
    image:"photos/piano2.jfif",
    name:"piano2",
    price:"340000",
    original:"370000",
    itemId:"A002"
}
pianoThree = {
    image:"photos/piano3.jpg",
    name:"piano3",
    price:"420000",
    original:"450000",
    itemId:"A003"
}

let selectId = decodeURIComponent(window.location.search)
let selectedItem = selectId.substring(1)
console.log(selectedItem)
if (selectedItem == pianoOne.itemId){
    document.getElementById("piano1").src = pianoOne.image;
    document.getElementById("name1").innerText = pianoOne.name;
    document.getElementById("price1").innerText = pianoOne.price;
    document.getElementById("original1").innerText = pianoOne.original;

    var cost = pianoOne.price;
    qty(cost)

}else if (selectedItem == pianoTwo.itemId){
    document.getElementById("piano1").src = pianoTwo.image;
    document.getElementById("name1").innerText = pianoTwo.name;
    document.getElementById("price1").innerText = pianoTwo.price;
    document.getElementById("original1").innerText = pianoTwo.original;

    var cost = pianoTwo.price;
    qty(cost)

}else if (selectedItem == pianoThree.itemId){
    document.getElementById("piano1").src = pianoThree.image;
    document.getElementById("name1").innerText = pianoThree.name;
    document.getElementById("price1").innerText = pianoThree.price;
    document.getElementById("original1").innerText = pianoThree.original;

    var cost = pianoThree.price;
    qty(cost)
}

function qty(cost) {
     document.getElementById("qwant").onkeyup = function(){
        let amount = parseInt(cost);
        let quantity = parseInt(document.getElementById("qwant").value);
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

function place (total) {
    document.getElementById("location").onchange = function(){
        var nairobi = 999
        var mombasa = 1699
        var kisumu = 1399
        let place = document.getElementById("location").value;
        if (place == "nairobi"){
            document.getElementById("total").innerText = "total" + ":" + (total + nairobi);
        } else if (place =="mombasa"){
            document.getElementById("total").innerText = "total" + ":" + (total + mombasa);
        }else if (place == "kisumu"){
            document.getElementById("total").innerText = "total" + ":" + (total + kisumu);
        }
        else if (place == " ") {
            document.getElementById("total"). innerText = "total" + ":" + total
        }
    }

    }
   
    

