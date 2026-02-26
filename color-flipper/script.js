const button = document.getElementById("btn");
const colorCode = document.getElementById("Color-code");


button.addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;

});
 function getRandomColor () {

     const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
     const b = Math.floor(Math.random() * 256);

     return `rgb(${r}, ${g}, ${b})`;
 }