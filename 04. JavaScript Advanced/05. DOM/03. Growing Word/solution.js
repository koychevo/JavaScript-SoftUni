function growingWord() {
  let p = document.querySelector('#exercise > p');
  if (!Boolean(p.style.fontSize) && !Boolean(p.style.color)) {
    p.style.fontSize = '2px';
    p.style.color = 'blue';
  } else {
    let color = p.style.color;
    switch (color) {
      case 'blue':
        p.style.color = 'green';
        break;
      case 'green':
        p.style.color = 'red';
        break;
      case 'red':
        p.style.color = 'blue';
        break;
    }
    p.style.fontSize = 2 * (parseFloat(p.style.fontSize)) + 'px';
  }
}

/*
Task: In this problem, you should create a JS functionality which changes the size and the color of a given paragraph on every click.
Every time when we click on the [CHANGE] button, the color and the size of the paragraph which contains "Growing Word" should change!
After every click, the current paragraph font size should be changed to the current font size multiplied by 2. Also, the color of that paragraph should change, depending on the previous color.
Example:
•	If we click once, the color should be changed to blue and the font size should be 2 (First initial size)
•	If we click twice, the color should be changed to green and the font size should be 4 (2 * 2)
•	If we click three times, the current color of that paragraph should be changed to red and the font size should be 8 (4 * 2)
•	If our paragraph already has a red color, on the next click, the color should turn to blue. Just loop throw these three colors (blue, green, red) again and again and again... while you are clicking on that button.
*/

