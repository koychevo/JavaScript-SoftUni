function deleteByEmail() {
    let isFound = false;
    let resultDiv = document.getElementById('result');
    let email = document.querySelector('input').value.trim();
    let emailFields = Array.from(document.querySelectorAll('tr > td:last-child'));
    emailFields.forEach(item => {
        if(item.textContent === email) {
            isFound = true;
            item.parentNode.remove();
        }
    });

    resultDiv.textContent = isFound ? 'Deleted.' : 'Not found.';
}

/*
Task: Write a program that takes an e-mail from an input field and deletes the matching row from a table. If no entry is found, an error should be displayed in a <div> with ID "results". The error should be "Not found." Submit only the deleteByEmail() function in judge. 
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/
