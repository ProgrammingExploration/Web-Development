const text = document.getElementById('text');
const button = document.getElementById('but');

let count = 0;

button.addEventListener('click', (e) => {
    count++;

    if(count % 2 == 0) {
        text.className = 'text';
    } else {
        text.className = 'appear';
    }
});