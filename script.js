// ------- Phone Functions ------- //
// Step1 : create a variable for phone color and get the element by id 
let phoneColor = document.getElementById('phone-img')

// Step2 : create a function for phone color changing
function changePhoneColor() {
    // Step3 : change the image of the phone as the user clicks on each button
    phoneColor.src = "./images/apple-iphone-15-yellow.jpg";
    // Step4 : change the price for each color
    document.getElementById("phone-price").innerHTML = "Price: 1000$"; 
}
function changePhoneColor2() {
    phoneColor.src = "./images/apple-iphone-15-blue.jpg";
    document.getElementById("phone-price").innerHTML = "Price: 950$";
}
function changePhoneColor3() {
    phoneColor.src = "./images/apple-iphone-15-pink.jpg";
    document.getElementById("phone-price").innerHTML = "Price: 1500$";
}



// ------- Watch Functions ------- //
let watchColor = document.getElementById('watch-img')

function changeWatchColor() {
    watchColor.src = "./images/starlight-watch-aluminum-midnight.jpg";
    document.getElementById("watch-price").innerHTML = "Price: 1000$"; 
}

function changeWatchColor2() {
    watchColor.src = "./images/lightpink-watch-aluminum-midnight.jpg";
    document.getElementById("watch-price").innerHTML = "Price: 950$";
}
function changeWatchColor3() {
    watchColor.src = "./images/winterblue-watch-aluminum-midnight.jpg";
    document.getElementById("watch-price").innerHTML = "Price: 1500$";
}