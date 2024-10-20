<script>
    import { currentTimer } from './store';  // Import the shared store

    export let inputMinutes = 0;
    let totalSeconds = 0;
    let timerInterval;
    let isRunning = false;
    let displayTime = "00:00";

    function formatTime(seconds) {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (inputMinutes <= 0 || isRunning) return;

        totalSeconds = inputMinutes * 60;
        isRunning = true;

        timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
            } else {
                totalSeconds--;
                displayTime = formatTime(totalSeconds);
                currentTimer.set(displayTime);  // Update the store with the current time
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        isRunning = false;
    }

    function resetTimer() {
        stopTimer();
        displayTime = "00:00";
        inputMinutes = 0;
        currentTimer.set(displayTime);  // Reset the store value
    }
</script>

<div class="timerDiv">
    <h3>Timer</h3>
    <div class="input-field">
        <label for="minutes">Enter minutes:</label>
        <input type="number" id="minutes" bind:value={inputMinutes} min="0" placeholder="0">
    </div>
    <div class="timer">
        <div id="display" class="display">{displayTime}</div>   
    </div>
    <button id="start" on:click={startTimer}>Start</button>
    <button id="stop" on:click={stopTimer}>Stop</button>
    <button id="reset" on:click={resetTimer}>Reset</button>     
</div>

<style>
    .timerDiv {
        border: 1px solid black;
        padding: 1rem;
        width: 40%;
        margin: auto;
    }

    .timer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .display {
        font-size: 60px;
    }

    button {
        margin: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    }

    .input-field {
        margin-bottom: 1rem;
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
    }
</style>
