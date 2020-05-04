function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', (e) => {
        const pattern = /\b[a-z]+@[a-z]+\.[a-z]+\b/;
        const email = e.target.value.trim();
        if(!email.match(pattern) || !email.match(pattern)[0] === email) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}


/*
Task: Write a function that dynamically validates an email input field when it is changed. If the input is invalid, apply the style "error". Do not validate on every keystroke, as it is annoying for the user, consider only change events.
A valid email is considered to be in the format: <name>@<domain>.<extension>
Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, clear the style. Submit only the validate() function in judge.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

