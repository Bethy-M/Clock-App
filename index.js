function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
    document.getElementById("clock").style.color = "rgba(177, 172, 172, 1)"
}

setInterval(updateClock, 1000);
updateClock();








var stopwatchInterval;
var stopwatchSeconds = 0;

function formatTime(seconds) {
    const h = String(Math.floor(seconds/3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
}


document.getElementById("startStopwatch").onclick = () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchSeconds++;
            document.getElementById("stopwatch").textContent= formatTime(stopwatchSeconds);
        }, 1000);
    }
};

document.getElementById("stopStopwatch").onclick = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
};

document.getElementById("resetStopwatch").onclick = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchSeconds = 0;
    document.getElementById("stopwatch").textContent = "00:00:00"
};








var countdownInterval; 
document.getElementById("startCountdown").onclick = () => {
    clearInterval(countdownInterval);
    var time = parseInt(document.getElementById("countdownInput").value, 10);
    if (isNaN(time) || time <= 0) {
        alert("Enter a valid number of seconds.");
        return;
    }

    countdownInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdownDisplay").textContent = "Time is up";
            return;
        }
        time--;
        const min = String(Math.floor(time / 60)).padStart(2, "0");
        const sec = String(time % 60).padStart(2, "0");
        document.getElementById("countdownDisplay").textContent = `${min}:${sec}`;
    }, 1000);
};








var alarmTimeout;

document.getElementById("setAlarm").onclick = () => {
    clearTimeout(alarmTimeout);
    const alarmTime = document.getElementById("alarmTime").value;
    const  message = document.getElementById("alarmMessage").value || "Alarm!";

    if (!alarmTime) {
        alert("set a valid alarm time.");
        return;
    }

    const now = new Date();
    const alarm = new Date();
    const [hours, minutes] = alarmTime.split(":").map(Number);
    alarm.setHours(hours, minutes, 0, 0);

    if (alarm <= now) {
        alarm.setDate(alarm.getDate() + 1);
    }

    const timeToAlarm = alarm - now;
    document.getElementById("alarmK").textContent = `Alarm set for ${alarm.toLocaleTimeString()}`;
    document.getElementById("alarmK").style.color = "rgba(177, 172, 172, 1)"

    alarmTimeout = setTimeout(() => {
        alert(message);
        document.getElementById("alarmK").textContent = `Alarm went off!`;
        document.getElementById("alarmK").style.color = "rgba(177, 172, 172, 1)";
    }, timeToAlarm);


};











