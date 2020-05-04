function attachGradientEvents() {
    const clickDiv = document.getElementById('gradient');
    clickDiv.addEventListener('mousemove', (e) =>{
        let percentage = Math.floor(e.offsetX / e.target.clientWidth * 100);
        document.getElementById('result').textContent = `${percentage}%`;
    });
    clickDiv.addEventListener('mouseout', (e) => {
        document.getElementById('result').textContent = '';
    });
}


/*
Task: Write a program that detects and displays how far along a gradient the user has moved their mouse. The result should be rounded down and displayed as a percentage inside the <div> with ID "result". 
Submit only the attachGradientEvents() function in judge. 
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/
