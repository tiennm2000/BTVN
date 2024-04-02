// arrow button
const categories = ["slc1", "slc2", "slc3"];
const manufacturers = ["slc1", "slc2", "slc3"];

var indexOfCategory = -1;
var indexOfManufacturer = -1;
const category = document.getElementById("category");
const manufacturer = document.getElementById("manufacturer");

const increaseCategory = () => {
  if (indexOfCategory === categories.length - 1) {
    return;
  }
  indexOfCategory++;
  category.value = categories[indexOfCategory];
};

const decreaseCategory = () => {
  if (indexOfCategory <= 0) {
    return;
  }
  indexOfCategory--;
  category.value = categories[indexOfCategory];
};

const increaseManufacturer = () => {
  if (indexOfManufacturer === manufacturers.length - 1) {
    return;
  }
  indexOfManufacturer++;
  manufacturer.value = manufacturers[indexOfManufacturer];
};

const decreaseManufacturer = () => {
  if (indexOfManufacturer <= 0) {
    return;
  }
  indexOfManufacturer--;
  manufacturer.value = manufacturers[indexOfManufacturer];
};

//add
const products = [];
let tableProduct = document.querySelector("table");

const deleteAllRow = () => {
  while (tableProduct.childElementCount > 1) {
    tableProduct.removeChild(tableProduct.lastChild);
  }
};

const displayProduct = () => {
  deleteAllRow();
  for (let i = 0; i < products.length; i++) {
    const childEl = `<tr>
                        <td><p>${i + 1}</p></td>
                        <td><p>${products[i].productName}</p></td>
                        <td><p>${products[i].category}</p></td>
                        <td><p>${products[i].price}</p></td>
                        <td><p>${products[i].quantity}</p></td>
                        <td><p>${products[i].manufacturerName}</p></td>
                        <td ><button class="edit">Edit</button></td>
                        <td><button class="delete">Delete</button></td
                    </tr>`;
    tableProduct.innerHTML += childEl;
  }
};

const addProduct = () => {
  const newProduct = {
    productName: document.getElementById("name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
    manufacturerName: document.getElementById("manufacturer").value,
  };
  products.push(newProduct);
  displayProduct();
};

//reset
const reset = () => {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("category").value = "";
  document.getElementById("manufacturer").value = "";
  document.getElementById("total-price").value = "";
};

//delete
