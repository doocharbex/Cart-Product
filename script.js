// ------- Phone Functions ------- //
// Step1 : create a variable for phone color and get the element by id 
let phoneColor = document.getElementById('phone-img')

// Step2 : create a function for phone color changing
function changePhoneColor() {
    // Step3 : change the image of the phone as the user clicks on each button
    phoneColor.src = "./images/apple-iphone-15-yellow.jpg";
    // Step4 : change the price for each color
    document.getElementById("phone-price").innerHTML = "Price: $1000"; 
}
function changePhoneColor2() {
    phoneColor.src = "./images/apple-iphone-15-blue.jpg";
    document.getElementById("phone-price").innerHTML = "Price: $950";
}
function changePhoneColor3() {
    phoneColor.src = "./images/apple-iphone-15-pink.jpg";
    document.getElementById("phone-price").innerHTML = "Price: $1500";
}



// ------- Watch Functions ------- //
// Step1 : create a variable for watch color and get the element by id 
let watchColor = document.getElementById('watch-img')

// Step2 : create a function for watch color changing
function changeWatchColor() {
    // Step3 : change the image of the watch as the user clicks on each button
    watchColor.src = "./images/starlight-watch-aluminum-midnight.jpg";
    // Step4 : change the price for each color
    document.getElementById("watch-price").innerHTML = "Price: $500"; 
}

function changeWatchColor2() {
    watchColor.src = "./images/lightpink-watch-aluminum-midnight.jpg";
    document.getElementById("watch-price").innerHTML = "Price: $650";
}
function changeWatchColor3() {
    watchColor.src = "./images/winterblue-watch-aluminum-midnight.jpg";
    document.getElementById("watch-price").innerHTML = "Price: $400";
}



// ------- Car Functions ------- //
// Step1 : create a variable for car color and get the element by id 
let carColor = document.getElementById('car-img')

// Step2 : create a function for car color changing
function changeCarColor() {
    // Step3 : change the image of the car as the user clicks on each button
    carColor.src = "./images/clacosmosblack.jpg";
    // Step4 : change the price for each color
    document.getElementById("car-price").innerHTML = "Price: $500,000"; 
}

function changeCarColor2() {
    carColor.src = "./images/clajupiterred.jpg";
    document.getElementById("car-price").innerHTML = "Price: $550,000";
}
function changeCarColor3() {
    carColor.src = "./images/clapolarwhite.jpg";
    document.getElementById("car-price").innerHTML = "Price: $470,000";
}

function changeCarColor4() {
    carColor.src = "./images/clacavansiteblue.jpg";
    document.getElementById("car-price").innerHTML = "Price: $600,000";
}