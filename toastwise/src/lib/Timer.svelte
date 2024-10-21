<script>
    import { currentTimer } from './store';  // Importing currentTimer which is the shared store
    import {startClicked} from './store';
    import {stopClicked} from "./store"
    import {resetClicked} from "./store"
    import {toasterStatus} from "./store"

    export let inputMinutes = 0;
    let totalSeconds = 0;
    let timerInterval;
    let isRunning = false;
    let displayTime = "00:00";
    
    let timerIsOn = false;
    $: if(timerIsOn){
        toasterStatus.set(true);
        console.log("toaster status is true")
    }

    $: if (inputMinutes > 0) {
        totalSeconds = inputMinutes * 60;
        displayTime = formatTime(totalSeconds);
    }

    // Listens for the start click from Toaster.svelte
    startClicked.subscribe(value => {
        if (value) {
            if (!isRunning) { // this makes sure that the timer only stars when its not already running
                timerIsOn = true;
                startTimer();
            }
            startClicked.set(false); // Reset the writable
        }
    });

    stopClicked.subscribe(value =>{
        if(value){
            stopTimer();
            startClicked.set(false);
        }
    });

    resetClicked.subscribe(value =>{
        if(value){
            resetTimer();
            resetClicked.set(false);
        }
    })
    

    // Format time as mm:ss
    function formatTime(seconds) {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Start the timer
    function startTimer() {
        if (inputMinutes <= 0 || isRunning) return;

        totalSeconds = inputMinutes * 60;
        isRunning = true;

        timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                timerIsOn = false; // Resets the timer state
            } else {
                totalSeconds--;
                displayTime = formatTime(totalSeconds);
                currentTimer.set(displayTime);  // Update the store with the current time
            }
        }, 1000);
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        toasterStatus.set(false);
        timerIsOn = false;
        currentTimer.set(displayTime);  // Reset the store value
    }

    // Reset the timer and allow starting again
    function resetTimer() {
        stopTimer();
        displayTime = "00:00";
        inputMinutes = 0;
        totalSeconds = 0;
        timerIsOn = false;  // Reset the start flag
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
</div>

<style>
    .timerDiv {
        border: 2px solid #111;
        border-radius: 8px;
        padding: 1rem;
        width: 40%;
        margin-left: auto;
        margin-bottom: 20px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .timer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .display {
        font-size: 60px;
        text-shadow: 2px 2px 5px #ccc;

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
