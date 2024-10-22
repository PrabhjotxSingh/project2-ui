<script>
  import TScreen from "./TScreen.svelte";
  import Timer from "./Timer.svelte";
  import Favorites from "./Favorites.svelte";
  import BreadTypes from "./BreadTypes.svelte";
  import { startClicked, stopClicked, resetClicked, selectedBread } from "./store";
  import NumericalScale from "./NumericalScale.svelte";
  import { toastTime } from "./store";
  let inputMinutes = 2;  
  let selectedBreadType = 'n/a'; 

  $: inputMinutes = $toastTime;
  $: selectedBreadType = $selectedBread;

  function click(){
    startClicked.set(true);
  }

  function stopClick(){
    stopClicked.set(true);
  }
  function resetClick(){
    resetClicked.set(true);
  }

   function handleScaleSelected(event) {
    const selectedScale = event.detail; // Get the scale number
    // Set the toast time based on the selected scale
    inputMinutes = selectedScale;
  }


</script>
<div >
<div class="toaster">

  <div class="breadTypes items">
    <h3>Select your Bread:</h3>
    <BreadTypes />
  </div>
  <br>
  <br>
  <div class=items>
  <h3>Toast Setting:</h3>
    <NumericalScale on:scaleSelected={handleScaleSelected} />
  </div>
  <br>
<!--   
  <div class="controls">
    <Favorites />
    <Timer inputMinutes={inputMinutes} />
  </div>
  <div class="ssbutton">
    <button class="button-56" on:click={click}>Start</button>
    <button class="button-56" on:click={resetClick}>Stop</button>
  </div>
   -->

  <div class=temp>
    <div class=bord>
      <Favorites />
    </div>
    <Timer inputMinutes={toastTime}/>

    <div class="timer items">
      <div class="input-field">
        <label for="minutes">Enter Minutes</label>
        <input type="number" id="minutes" bind:value={$toastTime} min="0" placeholder="0">
      </div>
      <div class=buttons>
        <button class="button-56" on:click={click}>Start</button>
        <!-- <button class="button-56" on:click={stopClick}>Stop</button> -->
         <br>
        <button class="button-56" on:click={resetClick}>Stop</button>
      </div>
    </div>
</div>

</div>
</div>


<style>
h3{
  margin:0px;
}
.toaster{
    border: 5px solid black;
    max-width: 800px;
    max-height: 800px; 
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box; 
    width: 800px;
    height: 550px;
    border-radius: 10px;;
    padding: 20px;
  }
  svg {
    width: 80vw;
    height: 80vh;
  }
  .bord{
    /* flex-grow: 2; */
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    overflow: auto;
  }
  .temp{
   display: flex;
   flex-direction: row;
  }
  .breadTypes{
    height:100px;

  }
  .ssbutton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:5%;
  }
  
  .input-field {
        margin-bottom: 1rem; 
       
    }

    input {
        font-size: 1rem;
        text-align: center;
        padding:10px;
        font-size: 20px;
        border-radius: 10px;;
        
    }
    #minutes{  
        width:50px;
        border: 1px solid #ccc;
    }

  .items{
    margin-top: 10px;
    
  }
  .controls {
   
  }

/* CSS */

  .buttons{
    display: flex;
    flex-direction: column;
    gap:2%;
  } 
.button-56 {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  width: 200px;
  /* max-width: 100%; */
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

}

.button-56:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
}

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}
</style>
