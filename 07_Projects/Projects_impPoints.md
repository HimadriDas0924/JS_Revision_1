## questions to repractice from StackBlitz:
``` javascript

// 4. Guess the Number: the distributed code is a very good practice to implement i.e for different tasks that are done multiple times: create a function.
    

```


### 1. default behavior of button tag
``` html
<form>
    <input>
    <input>
    <button> <!-- 
        clicking on this button will automatically submit the form, even though it's not a <input type = "submit">.
        bcz <button> by default is interpreted as <button type = "submit">.
        <button> are of different types:
            <button type = "submit">    -> submits the form
            <button type = "button">    -> won't submit the form 
            <button type = "reset">     -> resets the form
    -->
</form>

```

### 2. eventListener of form and button tag
``` javascript

// we can add event Listener to both <button> or <form> based on their use case.
    // add event listener to <button> when want to do smt on button click.
    // add event listener to <form> when want to do smt on form submission.
    

// <button type = "submit"> still submits the form. so we can still use preventDefault() to prevent form submission
button.addEventListener('click', function(event) {
    event.preventDefault();
})

// <button type = "button"> doesn't submits the form: so no reqd of preventDefault()

// we can add an EventListener to a form and addEvent 'submit' i.e whenever form is submitted (i.e whenever any submit button is clicked)
form.addEventListener('submit', function(e) {
    e.preventDefault();
})

```

### 3. Smaller things to remember:
``` javascript

// 1. since value entered in <input> is not stored in between <input></input> so to access those value from the form use:

input_field.value

// 2. <input> values are ALWAYS strings

// 3. to convert a string to Number use : 
parseInt(string) 

// 4. to check if a number is NaN or not ?? 
isNaN(value) // boolean

// 5. adding a class to an element && NOT elem.setAttribute('class', 'class1 class2 class3') where complete replacement
    // via the elem.classList property of an element: we can add, remove, toggle, check a class on an element
elem.classList.add('myclass1')
elem.classList.add('class1', 'class2', 'class3') // adding multiple classes
elem.classList.remove('to_remove_class')
elem.classList.toggle('to_toggle_class') // add if it doesn't exists and remove if it does
if(elem.classList.contains('check_class')) {

}else {
    
}

// identify which key is pressed
window.addEventListener('keydown', (e) => {
    e.keyCode // ASCII && is deprecated
    e.key // 'a', 'A', 'Control'. but for SPACE: e.key === ' '
    e.code // also differentiate and shows 'ControlLeft', 'ControlRight'
})

// repeat things multiple times and stop it when required
let intervalId = setInterval(function(){

}, 1000)

// to stop:
clearInterval(intervalId)

```