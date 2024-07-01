function changeBackgroundColor(to, from) {
  const to_button = document.getElementById(to);
  const from_button = document.getElementById(from);
  to_button.style.backgroundColor = "rgb(145, 196, 244)";
  from_button.style.backgroundColor = "rgb(173, 217, 255)";
}

function timer_mode() {
  changeBackgroundColor("btn_timer", "btn_stopwatch");
  content.innerHTML = "";
  document.querySelector("#content").innerHTML = `
    <div id="timer_input">
      <div class="container">
        <div class="label">Hours</div>
        <input id="timer_hr" type="number" min="0" max="30" value="0" placeholder="Hour" />
      </div>
      <div class="container">
        <div class="label">Minutes</div>
        <input id="timer_min" type="number" min="0" max="59" value="0" placeholder="Minute" />
      </div>
      <div class="container">
        <div class="label">Seconds</div>
        <input id="timer_sec" type="number" min="0" max="59" value="0" placeholder="Second" />
      </div>
    </div>
    <div id="start_pause">
      <button id="timer_start" onclick="start_timer()">Start</button>
      <button id="timer_pause" onclick="pause_timer()">Pause</button>
      <button id="timer_resume" onclick="resume_timer()">Resume</button>
    </div>
    <div id="timer">
    `;
}

let timerInterval;
let rem_hr;
let rem_min;
let rem_sec;

function start_timer() {
  let hr = parseInt(document.querySelector("#timer_hr").value);
  let min = parseInt(document.querySelector("#timer_min").value);
  let sec = parseInt(document.querySelector("#timer_sec").value);

  function updateDisplay() {
    let displayHr = String(hr).padStart(2, "0");
    let displayMin = String(min).padStart(2, "0");
    let displaySec = String(sec).padStart(2, "0");
    document.querySelector("#timer").innerHTML = `
            <div id="timer_countdown">${displayHr} : ${displayMin} : ${displaySec}</div>
        `;
  }

  function countdown() {
    if (hr === 0 && min === 0 && sec === 0) {
      clearInterval(timerInterval);
      document.querySelector("#timer").innerHTML = `
            <div class="done">Time's Up!</div>
        `;
      return;
    }

    if (sec > 0) {
      sec--;
    } else {
      sec = 59;
      if (min > 0) {
        min--;
      } else {
        min = 59;
        if (hr > 0) {
          hr--;
        }
      }
    }
    rem_hr = hr;
    rem_min = min;
    rem_sec = sec;

    updateDisplay();
  }

  updateDisplay();
  timerInterval = setInterval(countdown, 1000);
}

function pause_timer() {
  clearInterval(timerInterval);
}

function resume_timer() {
  let hr = rem_hr;
  let min = rem_min;
  let sec = rem_sec;

  function updateDisplay() {
    let displayHr = String(hr).padStart(2, "0");
    let displayMin = String(min).padStart(2, "0");
    let displaySec = String(sec).padStart(2, "0");
    document.querySelector("#timer").innerHTML = `
            <div id="timer_countdown">${displayHr} : ${displayMin} : ${displaySec}</div>
        `;
  }

  function countdown() {
    if (hr === 0 && min === 0 && sec === 0) {
      clearInterval(timerInterval);
      document.querySelector("#timer").innerHTML = `
            <div class="done">Time's Up!</div>
        `;
      return;
    }

    if (sec > 0) {
      sec--;
    } else {
      sec = 59;
      if (min > 0) {
        min--;
      } else {
        min = 59;
        if (hr > 0) {
          hr--;
        }
      }
    }

    rem_hr = hr;
    rem_min = min;
    rem_sec = sec;

    updateDisplay();
  }

  updateDisplay();
  timerInterval = setInterval(countdown, 1000);
}

function stopwatch_mode() {
  changeBackgroundColor("btn_stopwatch", "btn_timer");
  content.innerHTML = "";
}
