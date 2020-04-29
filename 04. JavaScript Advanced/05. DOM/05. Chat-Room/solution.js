function solve() {
   let chat = document.getElementById('chat_messages');
   let messageField = document.getElementById('chat_input');
   let message = messageField.value;
   console.log(message)
   let btn = document.getElementById('send');
   btn.addEventListener('click', handleClick);

   function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      let message = messageField.value.trim();
      if(message !== '') {
         let div = document.createElement('div');
         div.className = 'message my-message';
         div.textContent = message;
         chat.appendChild(div);
         messageField.value = '';
      }
   }
}


/*
Task: Write a function to create the functionality of a chat room.
Note: Do not forget to add event listener to the send button!
The new div element with class message my-message should contain the current message that is about to be send.
The current div should be appended to the div with an id="chat_messages".
The input should be cleared on each click of the send button
*/



