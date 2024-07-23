const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');
const defaultMouse = document.getElementById('defaultMouse');
const debounceMouse = document.getElementById('debounceMouse');
const throttleMouse = document.getElementById('throttleMouse');

const updateDebounceText = debounce((text) => {
    debounceText.textContent = text;
},250)

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
})

input.addEventListener('input', e => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
});

/*
    after 1 second each text will be updated imagine when text change new api call is made then soo many api call will be made. So we want api call made when we are done typing which when there is no new text or type stop for 1 sec then we will run this funciton 
*/
function debounce(cb, delay = 1000) {
    let timeout;
    return (...args) => {
        //we are clearing current time if any timeout function is running mean we have type before 1 sec so clear it.
        // so it will wait alteast one sec delay before run. So long as there is 1 sec delay in function it will never anything
        // console.log('before',timeout)
        clearTimeout(timeout);
        /*

        In the debounce function you provided, the timeout variable is declared within the debounce function's scope but persists across multiple calls to the returned function. This is due to JavaScript closures, which allow the inner function to have access to the variables of the outer function even after the outer function has finished executing.

        Here's a breakdown of how it works:
        Closure Creation: When debounce is called, it creates a closure. The timeout variable is part of this closure.
        Persistent State: The timeout variable retains its value between calls to the debounced function because it is part of the closure created when debounce was initially called.
        Clearing Timeout: Each time the debounced function is called, it uses the timeout variable from the closure. If timeout holds a previous timer ID (from a previous call), clearTimeout(timeout) cancels the previous timer.
        Setting New Timeout: A new timer is then set with setTimeout, and the ID of this new timer is stored in the timeout variable.
         
         */
        timeout = setTimeout(()=> {
            cb(...args)
        }, delay)
        // console.log('after',timeout)
    }
}

/*
    it will run after every 1 sec but problem in this is if you type somthing in that 1 sec wait in last time search then it will not call this cb function

function throttle(cb, delay = 1000) {
    let shouldWait = false;
    return (...args) => {
        if(shouldWait) return
        cb(...args);
        shouldWait = true;

        setTimeout(()=>{
            shouldWait = false;
        }, delay)
    }
}
*/

/*
    
*/
function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeout = ()=>{
        if(waitingArgs == null){
            shouldWait = false;
        }else{
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeout, delay)
        }
    }
    return (...args) => {
        console.log('args',args)
        if(shouldWait) {
            // when waiting this will save the last text value so that we can call function later with these arguments.
            waitingArgs = args;
            return
        }
        cb(...args);
        shouldWait = true;

        setTimeout(timeout, delay)
    }
}

// default debounce and throtlleing in mouse movement

function increment(element){
    element.textContent = (parseInt(element.textContent) || 0) + 1;
}
document.addEventListener('mousemove',(e) => {
    increment(defaultMouse);
    updateDebounceMouse();
    updateThrottleMouse();
})
const updateDebounceMouse = debounce(() => {
    increment(debounceMouse);
},250)

const updateThrottleMouse = throttle(() => {
    increment(throttleMouse);
})
