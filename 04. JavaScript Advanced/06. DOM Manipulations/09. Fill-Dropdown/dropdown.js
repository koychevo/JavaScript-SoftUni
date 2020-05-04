function addItem() {
    const textField = document.getElementById('newItemText');
    const valueField = document.getElementById('newItemValue');
    const option = document.createElement('option');
    option.value = valueField.value.trim();
    option.textContent = textField.value.trim();
    document.getElementById('menu').appendChild(option);
    textField.value = '';
    valueField.value = '';
}


/*
Task: Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should create and append an <option> to the <select> with id "menu".
*/
