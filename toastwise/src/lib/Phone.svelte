<script>
    import { currentTimer } from './store';  // Import the shared store
    import {toasterStatus} from "./store"

    let status = false;
    let displayTimer;

    $: {
        if ($toasterStatus) {
            status = true;
        } else {
            status = false;
        }
    }

    // using the writable store to get the current time
    currentTimer.subscribe(value => {
        displayTimer = value;
    });
</script>

<div class="phoneBody">
    <div class=statusDiv>
        <h3>Toaster status: </h3>
        {#if status===false}
            <div class=status style="background-color: #c7522a">Off</div>
        {:else}
            <div class=status style="background-color: #008585">Running</div>
        {/if}
    </div>
    <div class=timeDiv>
        <h3 class=timerHeader>Current Timer</h3>
        <span class="time">{displayTimer}</span>
    </div> 
</div>

<style>

  p {
    margin: 0;
    padding: 10px;
  }

  .statusDiv{
    margin:10px;
    display: flex;
    align-items: center;
  }

  .status{
    border-radius: 20px;
    margin: 0px 5px;
    padding:3px 20px;
    color: white;
  }
  .timeDiv{
    text-align: center;
  }
  .timerHeader{
    margin-bottom: 0px;;
  }
  .phoneBody{
    border: 20px solid black;
    border-top: 60px solid black;
    border-bottom: 50px solid black;
    border-radius: 30px;
    height: 500px;
    width: 250px;
    padding: 5px;
  }
  .time{
    font-size: 60px;
    text-shadow: 2px 2px 5px #ccc;

  }
</style>
