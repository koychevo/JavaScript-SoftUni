function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let timeDiv = document.getElementById('time');

    let interval;
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);

    function startTimer(e) {
        timeDiv.textContent = '00:00';
        let time = 0
        enableDisableBtns(e.target);
        interval = setInterval(function() {
            time++;
            displayTime(time);
        }, 1000);
    }

    function stopTimer(e) {
        clearInterval(interval);
        enableDisableBtns(e.target);
    }

    function displayTime(time) {
        let secs = time % 60;
        let mins = Math.floor(time / 60);
        secs = (secs < 10) ? '0' + secs : secs;
        mins = (mins < 10) ? '0' + mins : mins;
        timeDiv.textContent = `${mins}:${secs}`;
    }

    function enableDisableBtns(target) {
        startBtn.removeAttribute('disabled');
        stopBtn.removeAttribute('disabled');
        target.setAttribute('disabled', 'true');
    } 
}

/*
Task: Write a timer that counts minutes and seconds. The user should be able to control it with buttons. Clicking [Start] starts the counter. Clicking [Stop] resets the timer back to zero. Only one of the buttons should be enabled at a time (you cannot stop the timer, if it is not running). 
Submit only the stopwatch() function in judge.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/
