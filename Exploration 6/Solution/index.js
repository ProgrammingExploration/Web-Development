const btn = document.getElementById('switch');
const div = document.getElementById('box');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    if(count % 2 == 0) {
        div.className = 'styles';
    } else {
        div.className = 'grid';
    }
})