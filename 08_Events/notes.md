1. How does event flow occurs in JS ?

``` javascript 

// Event Capturing and Event Bubbling only occurs when there is nesting in DOM tree which it has by default.

// Events are generally processed in 3 phases in DOM.

// Phase 1) Capturing Phase 

    /*
        - When an event occurs on a target element. The Event propagates from top of the DOM tree to the target element.

        - This propagation only occurs through those elements whose 3rd argument of addEventListener is set to 'true', if for no elem it's 'true' then event capturing wont' happen.
    */

// Phase 2) Target Phase

    /*
        Basically end of target phase and beginning of the capturing phase.
    */

// Phase 3) Bubbling Phase

    /*
        - The Event bubbles up from the target to it's parents, ancestors, to the global window object. i.e event propagation from target to top of DOM tree.

        - This propagation only occurs through those elem whose 3rd arg of addEventListener is set to 'false', which it is by default.
    */

eg: 

window.addEventListener('click', (e) => {
    console.log('window clicked');
})

document.addEventListener('click', (e) => {
    console.log('document clicked');
}, true)

document.getElementById('one').addEventListener('click', (e) => {
    console.log(`one clicked`);
}, false)

document.getElementById('two').addEventListener('click', (e) => {
    console.log(`two clicked`);
    e.stopPropagation() // so during capturing phase only it stops
}, true)

document.getElementById('three').addEventListener('click', (e) => {
    console.log(`three clicked`);
}, true)

document.getElementById('four').addEventListener('click', (e) => {
    console.log(`four clicked`);
}, false)

// click on 'four'

// 1st capturing from top of DOM to bottom (applicable to whichever elem doing capturing) : OP: document, two, three

// now from four to top of DOM event bubbling (i.e whichever elems are bubbling): OP: four, one, window

```

2. Use case of Event Bubbling 

``` javascript 

// by setting up event handlers on the parent/ container: we can handle events from multiple child elements.

```

3. event.stopPropagation()

``` javascript 

elem.addEventListener(event, (e) => {
    e.stopPropagation() // during whichever phase this cb fn is executed, now according to that phase, the propagation to next elem won't happen. So 'no more phases of event flow' happens.
})


```

4. Some Event Properties

``` javascript

// target
e.target, e.srcElement

// tagname
e.target.tagName === 'IMG' 'P' 'LI' 'DIV' etc

```

5. setTimeout(), clearTimeout(), id

``` javascript

// this ID returned by setTimeout is a 'number'

let setTimeout_id = setTimeout(cb, 3000, "himadri das") // cb fn, time, some parameter that you want to pass to the cb fn when it's called.

clearTimeout(setTimeout_id) // clear the setTimeout 

// same as above is for setInterval(), clearInterval(), intervalId

```