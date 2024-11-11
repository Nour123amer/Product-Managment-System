let productTitleInput = document.querySelector('.title');
let productPriceInput = document.querySelector('.price');
let productTaxInput = document.querySelector('.tax');
let productAdsInput = document.querySelector('.ads');
let productDiscountInput = document.querySelector('.discount');
let productAmountInput = document.querySelector('.amount');
let productCategoryInput = document.querySelector('.category')
let dataContainer = document.querySelector('.dataContainer');
let producttTotalInput = document.querySelector('.total');
let totalPrice = document.querySelector('.totalPrice');
let index;
let createBtn = document.querySelector('.createBtn');
let searchInput = document.querySelector('.searchInput');
let deleteAllItemsBtn = document.querySelector('.deleteAllItems');

let searchInputByTitleBtn = document.querySelector('.SearchByTitle');
let searchInputByCaregoryBtn = document.querySelector('.SearchByCategory');

let productList = [];

if (localStorage.getItem("productList") !== null) {
    productList = JSON.parse(localStorage.getItem("productList"));
    displayProducts();
}

function addProduct() {
    var productDetails = {
        title: productTitleInput.value,
        price: productPriceInput.value,
        tax: productTaxInput.value,
        ads: productAdsInput.value,
        discount: productDiscountInput.value,
        total: producttTotalInput.value,
        amount: productAmountInput.value,
        category: productCategoryInput.value,
    }
    productList.push(productDetails);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
    console.log(productDetails);


}

function displayProducts() {

    dataContainer.innerHTML = "";
    let content ="";
    for (var i = 0; i < productList.length; i++) {
        content += `
          <tr>
          <td>${i + 1}</td>
          <td>${productList[i].title}</td>
          <td>${productList[i].price}</td>
          <td>${productList[i].tax}</td>
          <td>${productList[i].ads}</td>
          <td>${productList[i].discount}</td>
          <td>${productList[i].total}</td>
          <td>${productList[i].amount}</td>
          <td>${productList[i].category}</td>
          <td><button type="button" onclick="lifttingValuesToInputs(${i})" class="btn btn-outline-primary updateBtn">update</button></td>
          <td><button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger deleteBtn">delete</button></td>
       
         
        </tr>
        `
    }
    dataContainer.innerHTML = content;
}

function getTotal() {
    var result =
        parseInt(productPriceInput.value) +
        parseInt(productTaxInput.value) +
        parseInt(productAdsInput.value) -
        parseInt(productDiscountInput.value);
    console.log(productPriceInput.value);

    totalPrice.innerHTML = result;
    console.log(result);
}

function clearProduct() {
    productPriceInput.value = "";
    productTaxInput.value = "";
    productAdsInput.value = "";
    productAmountInput.value = "";
    productDiscountInput.value="";
    productCategoryInput.value = "";
    productTitleInput.value = "";
    producttTotalInput.value = "";
 
}



createBtn.addEventListener('click', () => {
    addProduct();
    clearProduct();
    console.log("777777");

})

producttTotalInput.addEventListener('click', () => {
        getTotal();

})

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();
    console.log(productList);
    // console.log(index);

}

function lifttingValuesToInputs(indexItem){
    productTitleInput.value=productList[indexItem].title;
    productPriceInput.value=productList[indexItem].price;
    productCategoryInput.value=productList[indexItem].category;
    productAmountInput.value=productList[indexItem].amount;
    productAdsInput.value=productList[indexItem].ads;
    productDiscountInput.value=productList[indexItem].discount;
    productTaxInput.value=productList[indexItem].tax;
    index =indexItem
}

function updateProduct(){

    var productDetails = {
        title: productTitleInput.value,
        price: productPriceInput.value,
        tax: productTaxInput.value,
        ads: productAdsInput.value,
        discount: productDiscountInput.value,
        total: producttTotalInput.value,
        amount: productAmountInput.value,
        category: productCategoryInput.value,
    }

    productList.splice(index,1,productDetails);
    localStorage.setItem("productList",JSON.stringify(productList));
    displayProducts();
    clearProduct();
}

function searhProductByTitle(){
    dataContainer.innerHTML = "";
    let content="";
    let term = searchInput.value;
    for(var i=0;i<productList.length;i++){
        if(productList[i].title.toLowerCase().includes(term.toLowerCase())){
            content += `
            <tr>
            <td>${i + 1}</td>
            <td>${productList[i].title}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].tax}</td>
            <td>${productList[i].ads}</td>
            <td>${productList[i].discount}</td>
            <td>${productList[i].total}</td>
            <td>${productList[i].amount}</td>
            <td>${productList[i].category}</td>
            <td><button type="button" onclick="lifttingValuesToInputs(${i})" class="btn btn-outline-primary updateBtn">update</button></td>
            <td><button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger deleteBtn">delete</button></td>
         
           
          </tr>
          `
        }
    }
    dataContainer.innerHTML = content;
    searchInput.value="";
}


function searhProductByCategory(){
    dataContainer.innerHTML = "";
    let content ="";
    let term = searchInput.value;
    for(var i=0;i<productList.length;i++){
        if(productList[i].category.toLowerCase().includes(term.toLowerCase())){
            content += `
            <tr>
            <td>${i + 1}</td>
            <td>${productList[i].title}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].tax}</td>
            <td>${productList[i].ads}</td>
            <td>${productList[i].discount}</td>
            <td>${productList[i].total}</td>
            <td>${productList[i].amount}</td>
            <td>${productList[i].category}</td>
            <td><button type="button" onclick="lifttingValuesToInputs(${i})" class="btn btn-outline-primary updateBtn">update</button></td>
            <td><button type="button" onclick="deleteProduct(${i})" class="btn btn-outline-danger deleteBtn">delete</button></td>
         
           
          </tr>
          `
        }
    }
    dataContainer.innerHTML = content;
    searchInput.value="";
}

function deleteAllItems(){
  productList.splice(0,productList.length);
  localStorage.setItem("productList",JSON.stringify(productList));
  displayProducts();


}