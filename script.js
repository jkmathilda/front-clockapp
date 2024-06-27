function changeBackgroundColor(to, from) {
    const to_button = document.getElementById(to);
    const from_button = document.getElementById(from);
    to_button.style.backgroundColor = "rgb(145, 196, 244)"; 
    from_button.style.backgroundColor = "rgb(173, 217, 255)";
}

function timer_mode() {
    changeBackgroundColor("btn_timer", "btn_stopwatch");
}

function stopwatch_mode() {
}

function stopwatch_mode() {
    changeBackgroundColor("btn_stopwatch", "btn_timer");
}
