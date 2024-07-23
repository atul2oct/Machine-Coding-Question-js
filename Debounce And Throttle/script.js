const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updateDebounceText = debounce(text => {
    console.log('5')
    debounceText.textContent = text;
})

input.addEventListener('input', e => {
    defaultText.textContent = e.target.value;
});

function debounce(cb, delay = 1000) {
    console.log('1')
    return (...args) => {
        console.log('2')
        console.log(...args);
        setTimeout(()=> {
            console.log('3')
            cb(...args)
        }, delay)
    }
}