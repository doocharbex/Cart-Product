// ------- Phone Functions ------- //
// Step1 : create a variable for phone color and get the element by id 
let selectedProduct = {};

function productSystem(){
    let phoneColor = document.getElementById('phone-img')

    let colorYellowPhone =  document.getElementById('phone-yellow')
    let colorBulePhone =  document.getElementById('phone-blue')
    let colorPinkPhone =  document.getElementById('phone-pink')


    colorYellowPhone.addEventListener('click', function(){
        phoneColor.src = "./images/apple-iphone-15-yellow.jpg";
        document.getElementById("phone-price").innerHTML = "Price: $1000"; 

    })

    colorBulePhone.addEventListener('click', function(){
        phoneColor.src = "./images/apple-iphone-15-blue.jpg";
        document.getElementById("phone-price").innerHTML = "Price: $950";

    })

    colorPinkPhone.addEventListener('click', function(){
        phoneColor.src = "./images/apple-iphone-15-pink.jpg";
        document.getElementById("phone-price").innerHTML = "Price: $1500";

    })
    // ----------------------------------------------------------------------

    let watchColor = document.getElementById('watch-img')

    let colorWatchStarlight = document.getElementById('watch-starlight')
    let colorWatchLightpink = document.getElementById('watch-lightpink')
    let colorWatchWinterblue = document.getElementById('watch-winterblue')

    colorWatchStarlight.addEventListener('click', function(){
        watchColor.src = "./images/starlight-watch-aluminum-midnight.jpg";
        document.getElementById("watch-price").innerHTML = "Price: $500"; 
    })

    colorWatchLightpink.addEventListener('click', function(){
        watchColor.src = "./images/lightpink-watch-aluminum-midnight.jpg";
        document.getElementById("watch-price").innerHTML = "Price: $650";
    })

    colorWatchWinterblue.addEventListener('click', function(){
        watchColor.src = "./images/winterblue-watch-aluminum-midnight.jpg";
        document.getElementById("watch-price").innerHTML = "Price: $400";
    })

    // ----------------------------------------------------------------------
    let carColor = document.getElementById('car-img')

    let colorCarBlack = document.getElementById('car-black')
    let colorCarJupiterRed = document.getElementById('car-jupiterRed')
    let colorCarClapolarwhite = document.getElementById('car-polarWhite')
    let colorCarClacavansiteBlue = document.getElementById('car-cavansiteBlue')

    colorCarBlack.addEventListener('click', function(){
        carColor.src = "./images/clacosmosblack.jpg";
        document.getElementById("car-price").innerHTML = "Price: $400,000";
    })

    colorCarJupiterRed.addEventListener('click', function(){
        carColor.src = "./images/clajupiterred.jpg";
        document.getElementById("car-price").innerHTML = "Price: $550,000";
    })

    colorCarClapolarwhite.addEventListener('click', function(){
        carColor.src = "./images/clapolarwhite.jpg";
        document.getElementById("car-price").innerHTML = "Price: $550,000";
    })
    
    colorCarClacavansiteBlue.addEventListener('click', function(){
        carColor.src = "./images/clacavansiteblue.jpg";
        document.getElementById("car-price").innerHTML = "Price: $600,000";
    })
}







function product(){
    phone = {
        'namePhone': document.getElementById("namePhone"),
        'infoPhone': document.getElementById("infoPhone"),
        'colorPhone': document.getElementById("colorPhone"),
        'pricePhonee': document.getElementById("phone-price"),

    }

}
product()

function factors(){

}




