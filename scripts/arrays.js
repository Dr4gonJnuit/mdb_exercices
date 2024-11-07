/* className :
* Sert à ajouter/changer la classe d'un élément HTML
* Exemple : document.querySelector('h1').className = 'titre';
*/

let colorChange = document.querySelector('#square-color');
colorChange.addEventListener('click', () => changeColor(colorChange));

window.onload = () => changeColor(colorChange);

// var interval = window.setInterval(() => changeColor(colorChange), 60000);

function changeColor(elem) {
    // Older version
    // let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    // let colorIndex = Math.floor(Math.random() * colors.length);
    // let color = colors[colorIndex];

    let rgbColorsRange = [0, 255];
    let rgbColor = `rgb(${Math.floor(Math.random() * (rgbColorsRange[1] - rgbColorsRange[0] + 1) + rgbColorsRange[0])}, ${Math.floor(Math.random() * (rgbColorsRange[1] - rgbColorsRange[0] + 1) + rgbColorsRange[0])}, ${Math.floor(Math.random() * (rgbColorsRange[1] - rgbColorsRange[0] + 1) + rgbColorsRange[0])})`;

    elem.style.backgroundColor = rgbColor;
}

let numberArray = Array.from({ length: 10 }, (_, i) => i * 10);
numberArray.push('🎉');
let numberPrint = document.querySelector('#print-number');

numberArray.forEach((number) => {
    numberPrint.innerHTML += `${number} <br>`;
});