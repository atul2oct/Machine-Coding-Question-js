/*
    ques3 create Debounce() and Throttle() polyfill implementation
*/
const btn = document.querySelector('.increment_btn');
const btnPressed = document.querySelector('.increment_pressed');

const count_debounce = document.querySelector('.increment_count_debounce');

const count_throttle = document.querySelector('.increment_count_throttle');

var pressedCount = 0;
var throttleCount = 0;
var debounceCount = 0;

// when there is gap of 800ms or more ony then this will executed.
const myDebounce = (cb, delay) =>{
    let timer;
    return function (...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },delay)
    }
}
const debouncedCount = myDebounce(()=>{
    count_debounce.innerHTML = ++debounceCount;
},800)

// when continous function happend we limits the function call with throttle, it limit function call to be triigerd after 800ms alteast
const myThrottle = (cb, delay) =>{
    let last = 0;    
    return (...args) => {
        let now = new Date().getTime();
        if(now - last < delay) return;
        last = now;
        return cb(...args);
    }
}
const throttledCount = myThrottle(()=>{
    count_throttle.innerHTML = ++throttleCount;
},800)

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    debouncedCount();
    throttledCount();
})