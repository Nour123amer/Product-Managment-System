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


// let priceRegex = /^(?:[1-9]|[1-9][0-9]|100)(?:\.\d+)?$/;
// let adsRegex = /^(?:[1-9]|[1-9][0-9]|10)(?:\.\d+)?$/;
// let taxRegex = /^(?:[1-9]|[1-9][0-9]|20)(?:\.\d+)?$/;
// let discountRegex = /^^(?:[1-9]|[1-9][0-9]|0.5)(?:\.\d+)?$/;
// let totalRegex =/^(?:[1-9]|[1-9][0-9]|100)(?:\.\d+)?$/;
// let amountRegex = /^(?:[1-9]|[1-4][0-9]|50)$/;
// let categoryRegex = /^[A-Z][a-z]{2,8]$/i;


let productList = [];

if (localStorage.getItem("productList") !== null) {
    productList = JSON.parse(localStorage.getItem("productList"));
    displayProducts();
}




function validateTitle() {
    let titleRegex = /^[A-Z][a-z]{2,8}$/;
    let titleValue = productTitleInput.value;
    let msgTitleError = document.querySelector('.msgTitleError');

    if (titleRegex.test(titleValue) == true) {
        msgTitleError.classList.add('d-none');
        productTitleInput.classList.remove('in-valid');
        productTitleInput.classList.add('valid');
        return true;
    } else {
        msgTitleError.classList.remove('d-none');
        productTitleInput.classList.add('in-valid');
        productTitleInput.classList.remove('valid');
        return false;
    }
}

function validatePrice() {
    let priceRegex = /^(?:[1-9]|[1-9][0-9]|10)(?:\.\d+)?$/;
    let priceValue = productPriceInput.value;
    let msgPriceError = document.querySelector('.msgPriceError');

    if (priceRegex.test(priceValue) == true) {
        msgPriceError.classList.add('d-none');
        productPriceInput.classList.remove('in-valid');
        productPriceInput.classList.add('valid');
        return true;
    } else {
        msgPriceError.classList.remove('d-none');
        productPriceInput.classList.add('in-valid');
        productPriceInput.classList.remove('valid');
        return false;
    }
}

function validateTaxe() {
    let taxRegex = /^(?:[1-9]|[1-9][0-9]|10)(?:\.\d+)?$/;
    let taxValue = productTaxInput.value;
    let msgTaxeError = document.querySelector('.msgTaxeError');

    if (taxRegex.test(taxValue) == true) {
        msgTaxeError.classList.add('d-none');
        productTaxInput.classList.remove('in-valid');
        productTaxInput.classList.add('valid');
        return true;
    } else {
        msgTaxeError.classList.remove('d-none');
        productTaxInput.classList.add('in-valid');
        productTaxInput.classList.remove('valid');
        return false;
    }
}

function validateAds() {
    let adsRegex = /^(?:[1-9]|[1-9][0-9]|10)(?:\.\d+)?$/;
    let adsValue = productAdsInput.value;
    let msgAdsError = document.querySelector('.msgAdsError');

    //     window.onload = function(){
    //    msgPriceError.classList.add('d-none');
    //    productTitleInput.classList.remove('in-valid');
    // }

    if (adsRegex.test(adsValue) == true) {
        msgAdsError.classList.add('d-none');
        productAdsInput.classList.remove('in-valid');
        productAdsInput.classList.add('valid');
        return true;
    } else {
        msgAdsError.classList.remove('d-none');
        productAdsInput.classList.add('in-valid');
        productAdsInput.classList.remove('valid');
        return false;
    }
}

function validateDiscount() {
    let discountRegex = /^0\.(2(?:[0-9]{1,})?|[3-4][0-9]{1,}|5(?:0{1,})?)$/;
    let discountValue = productDiscountInput.value;
    let msgDiscountError = document.querySelector('.msgDiscountError');


    if (discountRegex.test(discountValue) == true) {
        msgDiscountError.classList.add('d-none');
        productDiscountInput.classList.remove('in-valid');
        productDiscountInput.classList.add('valid');
        return true;
    } else {
        msgDiscountError.classList.remove('d-none');
        productDiscountInput.classList.add('in-valid');
        productDiscountInput.classList.remove('valid');
        return false;
    }
}

function validateAmount() {
    let amountRegex = /^(?:[1-9]|[1-4][0-9]|50)$ /;
    let amountValue = productAmountInput.value;
    let msgAmountError = document.querySelector('.msgAmountError');
    

    if (amountRegex.test(amountValue) == true) {
        msgAmountError.classList.add('d-none');
        productAmountInput.classList.remove('in-valid');
        productAmountInput.classList.add('valid');
        return true;
    } else {
        msgAmountError.classList.remove('d-none');
        productAmountInput.classList.add('in-valid');
        productAmountInput.classList.remove('valid');
        return false;
    }
}



function validateCategory() {
    let categoryRegex = /^[A-Z][a-z]{2,8}$/;
    let categoryValue = productCategoryInput.value;
    let msgCategoryError = document.querySelector('.msgCategoryError');


    if (categoryRegex.test(categoryValue) == true) {
        msgCategoryError.classList.add('d-none');
        productCategoryInput.classList.remove('in-valid');
        productCategoryInput.classList.add('valid');
        return true;
    } else {
        msgCategoryError.classList.remove('d-none');
        productCategoryInput.classList.add('in-valid');
        productCategoryInput.classList.remove('valid');
        return false;
    }
}

function addProduct() {

    if (validateTitle &&
        validateAds &&
        validateAmount &&
        validateCategory &&
        validateDiscount &&
        validatePrice &&
        validateTaxe
    ) {
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
}

function displayProducts() {

    dataContainer.innerHTML = "";
    let content = "";
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
        parseFloat(productPriceInput.value) +
        parseFloat(productTaxInput.value) +
        parseFloat(productAdsInput.value) -
        parseFloat(productDiscountInput.value);
    console.log(productPriceInput.value);

    totalPrice.innerHTML = result;
    console.log(result);
}

function clearProduct() {
    productPriceInput.value = "";
    productTaxInput.value = "";
    productAdsInput.value = "";
    productAmountInput.value = "";
    productDiscountInput.value = "";
    productCategoryInput.value = "";
    productTitleInput.value = "";
    producttTotalInput.value = "";
    totalPrice.value="";

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

function lifttingValuesToInputs(indexItem) {
    productTitleInput.value = productList[indexItem].title;
    productPriceInput.value = productList[indexItem].price;
    productCategoryInput.value = productList[indexItem].category;
    productAmountInput.value = productList[indexItem].amount;
    productAdsInput.value = productList[indexItem].ads;
    productDiscountInput.value = productList[indexItem].discount;
    productTaxInput.value = productList[indexItem].tax;
    index = indexItem
}

function updateProduct() {
    if (validateTitle &&
        validateAds &&
        validateAmount &&
        validateCategory &&
        validateDiscount &&
        validatePrice &&
        validateTaxe
    ) {
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

        productList.splice(index, 1, productDetails);
        localStorage.setItem("productList", JSON.stringify(productList));
        displayProducts();
        clearProduct();
    }
}

function searhProductByTitle() {
    dataContainer.innerHTML = "";
    let content = "";
    let term = searchInput.value;
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].title.toLowerCase().includes(term.toLowerCase())) {
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
    searchInput.value = "";
}


function searhProductByCategory() {
    dataContainer.innerHTML = "";
    let content = "";
    let term = searchInput.value;
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].category.toLowerCase().includes(term.toLowerCase())) {
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
    searchInput.value = "";
}

function deleteAllItems() {
    productList.splice(0, productList.length);
    localStorage.setItem("productList", JSON.stringify(productList));
    displayProducts();


}