let selectedProduct = {};

function productSystem(productName, productInfo, productColor, productPrice){
    selectedProduct = {
        name: productName,
        info: productInfo,
        color: productColor,
        price: productPrice
    };
}

function addToInvoice() {
    let invoice = document.getElementById('invoice');
    if (selectedProduct.name && selectedProduct.info && selectedProduct.color && selectedProduct.price) {
        let item = document.createElement('div');
        item.innerHTML = `<p>${selectedProduct.name} - ${selectedProduct.color} - ${selectedProduct.price}</p>`;
        invoice.appendChild(item);
    } else {
        alert("plaese select color product") 
    }
}


// Phone Functions
function phoneSystem() {
    let phoneColor = document.getElementById('phone-img');
    let phonePriceElement = document.getElementById("phone-price");

    let colorYellowPhone = document.getElementById('phone-yellow');
    let colorBluePhone = document.getElementById('phone-blue');
    let colorPinkPhone = document.getElementById('phone-pink');

    colorYellowPhone.addEventListener('click', function(){
        phoneColor.src = "./images/apple-iphone-15-yellow.jpg";
        phonePriceElement.innerHTML = "Price: $1000";
        productSystem('iPhone 15', '256 GB - 8GB RAM', 'Yellow', '$1000');
    });

    colorBluePhone.addEventListener('click', function(){
        phoneColor.src = "./images/apple-iphone-15-blue.jpg";
        phonePriceElement.innerHTML = "Price: $950";
        productSystem('iPhone 15', '256 GB - 8GB RAM', 'Blue', '$950');
    });

    colorPinkPhone.addEventListener('click', function(){
        phoneColor.src = "./images/apple-iphone-15-pink.jpg";
        phonePriceElement.innerHTML = "Price: $1500";
        productSystem('iPhone 15', '256 GB - 8GB RAM', 'Pink', '$1500');
    });
}

// Car Functions
function carSystem() {
    let carColor = document.getElementById('car-img');
    let carPriceElement = document.getElementById("car-price");

    let colorCarBlack = document.getElementById('car-black');
    let colorCarJupiterRed = document.getElementById('car-jupiterRed');
    let colorCarPolarWhite = document.getElementById('car-polarWhite');
    let colorCarCavansiteBlue = document.getElementById('car-cavansiteBlue');

    colorCarBlack.addEventListener('click', function(){
        carColor.src = "./images/clacosmosblack.jpg";
        carPriceElement.innerHTML = "Price: $400,000";
        productSystem('Mercedes-Benz CLA', 'Description', 'Black', '$400,000');
    });

    colorCarJupiterRed.addEventListener('click', function(){
        carColor.src = "./images/clajupiterred.jpg";
        carPriceElement.innerHTML = "Price: $550,000";
        productSystem('Mercedes-Benz CLA', 'Description', 'Jupiter Red', '$550,000');
    });

    colorCarPolarWhite.addEventListener('click', function(){
        carColor.src = "./images/clapolarwhite.jpg";
        carPriceElement.innerHTML = "Price: $550,000";
        productSystem('Mercedes-Benz CLA', 'Description', 'Polar White', '$550,000');
    });

    colorCarCavansiteBlue.addEventListener('click', function(){
        carColor.src = "./images/clacavansiteblue.jpg";
        carPriceElement.innerHTML = "Price: $600,000";
        productSystem('Mercedes-Benz CLA', 'Description', 'Cavansite Blue', '$600,000');
    });
}

// Watch Functions
function watchSystem() {
    let watchColor = document.getElementById('watch-img');
    let watchPriceElement = document.getElementById("watch-price");

    let colorWatchStarlight = document.getElementById('watch-starlight');
    let colorWatchLightpink = document.getElementById('watch-lightpink');
    let colorWatchWinterblue = document.getElementById('watch-winterblue');

    colorWatchStarlight.addEventListener('click', function(){
        watchColor.src = "./images/starlight-watch-aluminum-midnight.jpg";
        watchPriceElement.innerHTML = "Price: $500";
        productSystem('Apple Watch', 'SE 2022 Aluminum Case 40mm', 'Starlight', '$500');
    });

    colorWatchLightpink.addEventListener('click', function(){
        watchColor.src = "./images/lightpink-watch-aluminum-midnight.jpg";
        watchPriceElement.innerHTML = "Price: $650";
        productSystem('Apple Watch', 'SE 2022 Aluminum Case 40mm', 'Light Pink', '$650');
    });

    colorWatchWinterblue.addEventListener('click', function(){
        watchColor.src = "./images/winterblue-watch-aluminum-midnight.jpg";
        watchPriceElement.innerHTML = "Price: $400";
        productSystem('Apple Watch', 'SE 2022 Aluminum Case 40mm', 'Winter Blue', '$400');
    });
}

phoneSystem();
carSystem();
watchSystem();
