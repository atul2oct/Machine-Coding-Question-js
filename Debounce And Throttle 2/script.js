/*
    ques1 create a button ui and add debounce as follows
    ->show button pressed x times every time button is preesed
    ->increase triggered y times count after 800ms of debounce 
*/
/*
    ques2 create a button ui and add throttle as follows
    ->show button pressed x times every time button is preesed
    ->increase triggered y times count after 800ms of throttle 
*/
const btn = document.querySelector('.increment_btn');
const btnPressed = document.querySelector('.increment_pressed');

const count_debounce = document.querySelector('.increment_count_debounce');

const count_throttle = document.querySelector('.increment_count_throttle');

var pressedCount = 0;
var throttleCount = 0;
var debounceCount = 0;

// when there is gap of 800ms or more ony then this will executed.
const debouncedCount = _.debounce(()=>{
    count_debounce.innerHTML = ++debounceCount;
},800)
// when continous function happend we limits the function call with throttle, it limit function call to be triigerd after 800ms alteast
const throttledCount = _.throttle(()=>{
    count_throttle.innerHTML = ++throttleCount;
},800)

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    debouncedCount();
    throttledCount();
})