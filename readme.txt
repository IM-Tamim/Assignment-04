1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=>
getElementById(): selects a single element by its ID and returns the element object directly (null if not found). It's the fastest method.
getElementsByClassName(): selects all elements with a specific class and returns a live HTMLCollection that automatically updates when DOM changes.
querySelectorAll(): selects ALL elements matching any CSS selector and returns a static NodeList that does NOT update when the DOM changes.
querySelector(): returns only the FIRST element found matching any CSS selector (or null if none found).


2) How do you create and insert a new element into the DOM?
=>
    i. get the parent container
    ii. create a new child div
    iii. add new div inner HTML
    iv. Append the child


3) What is Event Bubbling? And how does it work?
=>
Event Bubbling is when an event triggered on a child element "bubbles up" through its parent elements, triggering the same event on each ancestor.
        i. First, the button's click event runs
        ii. Then the parent div's click event runs
        iii. Then the body's click event runs
        iv. And so on... all the way up to the document

4) What is Event Delegation in JavaScript? Why is it useful?
=>
Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to child elements.
        i. Add listener to parent (not to each child)
        ii. Click happens on any child element
        iii. Event bubbles up from child → parent
        iv. Parent catches it and checks which child was clicked
        v. Parent handles the event for that specific child

usefulness: i. one listener instead of hundreds - saves memory
            ii. only one time need to be written. no need to add event listener to all childs
            iii. less code

5) What is the difference between preventDefault() and stopPropagation() methods?
=>
preventDefault(): Prevents the browser's DEFAULT behavior. Does NOT stop event bubbling
stopPropagation(): Stops the event from BUBBLING up to parent elements. Does NOT prevent default behavior

