function focus() {
    document.querySelectorAll('div > input').forEach(el => {
        el.addEventListener('focus', highlight);
        el.addEventListener('blur', unhighlight);
    });

    function highlight(e) {
        e.target.parentNode.classList.add('focused');
    }

    function unhighlight(e) {
        e.target.parentNode.classList.remove('focused');
    }
}


/*
Task: Write a function that highlights the currently active section of a document. There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focus". When focus is lost (blurred), remove the class from the element.
Submit only the focus() function in judge.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/
