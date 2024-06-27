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
    <input type="number" min="0" max="30" value="0" placeholder="Hour" />
    </div>
    <div class="container">
    <div class="label">Minutes</div>
    <input type="number" min="0" max="59" value="0" placeholder="Minute" />
    </div>
    <div class="container">
    <div class="label">Seconds</div>
    <input type="number" min="0" max="59" value="0" placeholder="Second" />
    </div>
    </div>
    `;
}

function stopwatch_mode() {
  changeBackgroundColor("btn_stopwatch", "btn_timer");
  content.innerHTML = "";
}
