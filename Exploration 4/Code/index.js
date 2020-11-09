// Variables
const counterText = document.getElementById('counter');
const inc = document.getElementById('plus');
const dec = document.getElementById('minus');

// Get Counter Number
const counter = parseInt(counterText.innerText);
sessionStorage.setItem('count', counter);

// Return Count
const returnCount = () => {
    const count = parseInt(sessionStorage.getItem('count'));
    return count;
}

// Increment Button onClick
inc.addEventListener('click', () => {
    // Get the current count
    let count = returnCount();

    // Add 1
    count += 1;

    // Update session storage
    sessionStorage.setItem('count', count);

    // Update the HTML
    counterText.innerText = count;
})

dec.addEventListener('click', () => {
    // Get the current count
    let count = returnCount();

    // Subtract 1
    count -= 1;

    // Update session storage
    sessionStorage.setItem('count', count);

    // Update the HTML
    counterText.innerText = count;
})