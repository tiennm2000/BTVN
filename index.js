// arrow button
const categories= ["slc1","slc2","slc3"];
const manufacturers =["slc1","slc2","slc3"];

var indexOfCategory = -1;
var indexOfmanufacturer = -1;
const category = document.getElementById("category");
const manufacturer = document.getElementById("manufacturer");

const increaseCategory =  () =>{
    if(indexOfCategory === categories.length-1)
    {
        return
    }
    indexOfCategory++;
    category.value = categories[indexOfCategory];
}

const decreaseCategory =  () =>{
    if(indexOfCategory <= 0)
    {
        return
    }
    indexOfCategory--;
    category.value = categories[indexOfCategory];
}

const increasemanufacturer =  () =>{
    if(indexOfmanufacturer === manufacturers.length-1)
    {
        return
    }
    indexOfmanufacturer++;
    manufacturer.value = manufacturers[indexOfmanufacturer];
}

const decreasemanufacturer =  () =>{
    if(indexOfmanufacturer <= 0)
    {
        return
    }
    indexOfmanufacturer--;
    manufacturer.value = manufacturers[indexOfmanufacturer];
}

let number = 1;
//add
const addProduct = () =>{
    const nameProduct = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const table = document.querySelector("table");
    const category = document.getElementById("category").value;
    const manufacturer = document.getElementById("manufacturer").value;
    const row = document.createElement("tr");
    row.innerHTML = `   <td><p>${number++}</p></td>
                        <td><p>${nameProduct}</p></td>
                        <td><p>${category}</p></td>
                        <td><p>${price}</p></td>
                        <td><p>${quantity}</p></td>
                        <td><p>${manufacturer}</p></td>
                        <td ><button class="edit">Edit</button></td>
                        <td><button class="delete">Delete</button></td>`;
    table.appendChild(row);

    //update total price
    document.getElementById("total-price").value = price*quantity;
}

//reset
const reset = () =>{
     document.getElementById("name").value="";
     document.getElementById("price").value="";
   document.getElementById("quantity").value="";
    document.getElementById("category").value="";
    document.getElementById("manufacturer").value="";
    document.getElementById("total-price").value="";
}