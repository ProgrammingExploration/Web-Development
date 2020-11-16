const text = document.getElementById('text');
text.innerText = prompt('What do you want to display');
console.log(confirm('Are you sure you want to do this'));
/*
    OK -> True
    Cancel -> False
*/

const blue = document.getElementById('blue');
const red = document.getElementById('red');
const green = document.getElementById('green');

let width, height;
window.onresize = () => {
    width = this.innerWidth;
    height = this.innerHeight;
    // Checks
    if(width <= 600) {
        blue.innerText = 'Red';
        red.innerText = 'Green';
        green.innerText = 'Blue';
    } else {
        blue.innerText = 'Blue';
        red.innerText = 'Red';
        green.innerText = 'Green';
    }
}