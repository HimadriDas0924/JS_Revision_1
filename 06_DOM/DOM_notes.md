```javascript 

/* 
NodeList has 'forEach' in it's prototype. But HTMLCollection doesn't have 'forEach'.

But they don't have other methods like 'push, pop, map, reduce, etc'. 

so rather convert them to Array: Array.from(myNodeList / myHTMLCollection) 
*/

// getElementById(), querySelector() : returns a single DOM node
// querySelectorAll() : returns a NodeList
// getElementByClassName() : returns HTML Collection

// querySelctor : always returns 1st occurence of query
// querySelectorAll : always returns NodeList

const elem = document.querySelector('') // can access any elem. querySelector('similar to writing CSS property')

// below are properties of elem && not functions

elem.id
elem.className
elem.getAttribute('class')
elem.setAttribute('class', 'class1 class2 class3')
elem.removeAttribute('disabled')

elem.innerText // complete text within 'elem' which is visible in browser
elem.textContent // also inc text which is there in HTML but not visible in browser
elem.innerHTML // inc complete HTML within an elem

```

``` javascript

// text node refers to the text inside an element.

// NOTE: we can compare 2 DOME nodes for equality

elem1 === elem2 // boolean : based on 'object memory location'

elem1.isEqualNode(elem2) // boolean: nodes are compared based on type, attribute, children, content


parent.children // HTML collection of children

child.parentElement // parent Node

parent.firstElementChild
parent.lastElementChild

child.nextElementSibling // go to next sibling: Won't go to 1st child if applied to last child i.e undefined in that case.

parent.childNodes // Node List of (text nodes, comment nodes, element nodes)


// create node
const elem = document.createElement('div')
document.body.appendChild(elem) 

// alternate method: less efficient and risky
document.body.innerHTML += '<div></div>'

// create Text Node
const text = document.createTextNode('content of text node')
elem.appendChild(text)

// NOTE: clone nodes
    // useful for directly cloning a node

const clone = originalNode.cloneNode(true) // true: deep clone (inc childNode)
clone.id = 'new id'

// difference between append and appendChild

// append: 
    // when we want to add multiple nodes after the last child of parent
    const child1 
    const child2
    const child3
    
    parent.append(child1, child2, child3)

    // return value: undefined

// appendChild:
    // add single child after last child of parent
    // return value: appended node


// replace NODE: 3 methods

elem1.replaceWith(elem2)  // node's memory location changes
elem1.innerHTML = ' smt ' // node mem location same
elem1.outerHTML = elem2 // node's memory location changes
/*
i.e <div id = "parent"></div>
-> if we do 
    parent.outerHTML = newElement
    // now parent doesn't exist anymore
*/

// remove node

elem1.remove()
parent.removeChild(elem1)

```