console.log("Code launched");

document.getElementById("intro").innerHTML = "Click on the cookie monster to help him eat cookies!";

let levelRequierement = 20;
let lastLevel = 0;
let numberToAdd = 1;

let numberOfCookies = 1; // Same déclaration -> changer !

const COOKIEBUTTON = document.querySelector('#cookieClick')
COOKIEBUTTON.addEventListener('click', function () {
    let cookieID = document.querySelector('#cookieTotal');
    let numberOfCookie = parseInt(cookieID.innerHTML, 10); // Same déclaration -> changer !
    let levels = document.querySelector('#levelNumber');
    
    numberOfCookie += numberOfCookies;
    
    console.log(numberOfCookie)
    if ((numberOfCookie - lastLevel) / levelRequierement >= 1) {
        levels.innerHTML++;
        levelRequierement += 20;
        lastLevel = numberOfCookie;
    }

    cookieID.innerHTML = numberOfCookie;

})

const NEWMONSTER = document.querySelector('#addMonster')
NEWMONSTER.addEventListener('click', function () {
    numberOfCookies += numberToAdd;
})