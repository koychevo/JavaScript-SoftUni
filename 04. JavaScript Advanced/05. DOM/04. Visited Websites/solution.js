function solve() {
  let div = document.getElementById('page1');
  div.addEventListener('click', handleClick);

  function handleClick(e) {
    e.stopPropagation();
    if(e.target.nodeName === 'SPAN') {
      let p = e.target.parentNode.nextElementSibling;
      let arrayText = p.textContent.split(' ');
      arrayText[1] = Number(arrayText[1]) + 1;
      p.textContent = arrayText.join(' ');
    }
  }
}


//let divs = Array.from(document.getElementsByClassName('link-1'));
//console.log(divs);  
//  divs.forEach(div => {
//    div.addEventListener('click', () => {
//      let p = div.children[1];
//      let arrayText = p.textContent.split(' ');
//      arrayText[1] = Number(arrayText[1]) + 1;
//      p.textContent = arrayText.join(' ');
//    });
//});


/*
Task: In this problem, you should create a JS functionality that keeps track of how many times a specific site has been visited.
*/
