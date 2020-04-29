function addItem() {
    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
}


/*
Task: Write a function that reads the text  inside an input field and appends the specified text to a list inside an HTML page. 
Submit only the addItem() function in judge.
*/
