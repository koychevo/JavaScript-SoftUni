function addItem() {
        let ul = document.getElementById("items");
        let input = document.getElementById("newText");
        let li = document.createElement("li");
        if (input.value.trim() !== '') {
            li.textContent = input.value + ' ';
            let a = document.createElement('a');
            a.textContent = "[Delete]";
            a.setAttribute('href', '#');
            li.appendChild(a);
            ul.appendChild(li);
            input.value = '';
            a.addEventListener("click", deleteItem);
        }

        function deleteItem(e) {
            let li = e.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
}

/*
Task: Extend the previous problem to display a [Delete] link after each list item. Clicking it should delete the item with no confirmation. 
Submit only the addItem() function in judge.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/
