<script>
  import { currentTimer } from "./store";
  import {
    startClicked,
    stopClicked,
    resetClicked,
    toasterStatus,
  } from "./store";

  export let inputMinutes; // Accepting input minutes as a prop
  let totalSeconds = 0;
  let timerInterval;
  let isRunning = false;
  let displayTime = "00:00";

  let timerIsOn = false;

  $: if (timerIsOn) {
    toasterStatus.set(true);
    console.log("toaster status is true");
  }

  // Reactive statement to update display time based on inputMinutes
  $: if (inputMinutes > 0 && !isRunning) {
    totalSeconds = inputMinutes * 60; // Ensure this is only set when the timer isn't running
    displayTime = formatTime(totalSeconds); // Update display time accordingly
  }

  // Start Timer when startClicked event is triggered
  startClicked.subscribe((value) => {
    if (value) {
      if (!isRunning) {
        startTimer();
      }
      startClicked.set(false); // Reset the writable
    }
  });

  // Stop Timer when stopClicked event is triggered
  stopClicked.subscribe((value) => {
    if (value) {
      stopTimer();
      stopClicked.set(false);
    }
  });

  // Reset Timer when resetClicked event is triggered
  resetClicked.subscribe((value) => {
    if (value) {
      resetTimer();
      resetClicked.set(false);
    }
  });

  // Format time as mm:ss
  function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  // Start the timer
  function startTimer() {
    if (inputMinutes <= 0 || isRunning) return;

    totalSeconds = inputMinutes * 60; // Initialize totalSeconds here
    isRunning = true;

    timerInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        timerIsOn = false;
        toasterStatus.set(false);
      } else {
        totalSeconds--;
        displayTime = formatTime(totalSeconds);
        currentTimer.set(displayTime); // Update the store with the current time
        toasterStatus.set(true);
      }
    }, 1000);
  }

  // Stop the timer
  function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    toasterStatus.set(false);
    timerIsOn = false;
  }

  // Reset the timer and allow starting again
  function resetTimer() {
    stopTimer();
    displayTime = "00:00";
    totalSeconds = 0;
    timerIsOn = false;
    currentTimer.set(displayTime); // Reset the store value
  }
</script>

<div class="timerDiv">
  <!-- <div class="input-field">
        <label for="minutes">Enter Minutes</label>
        <input type="number" id="minutes" bind:value={inputMinutes} min="0" placeholder="0">
    </div> -->
  <div class="timer">
    <div id="display" class="display">{displayTime}</div>
  </div>
</div>

<style>
  .timerDiv {
    /* border: 2px solid #111; */
    /* border-radius: 8px; */
    /* padding: 1rem; */
    width: 30%;
    margin-bottom: 20px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  }

  .timer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    padding: 70px;
    border-radius: 50%;
    margin-right: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
  /* 
    .input-field {
        margin-bottom: 1rem;   
    }

    input {
        padding: 0.5rem;
        font-size: 1rem;
    }
    #minutes{  
        width:50px;
        border: 1px solid #ccc;
    } */
</style>
