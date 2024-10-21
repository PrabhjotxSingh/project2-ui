<script>
  import TScreen from "./TScreen.svelte";
  import Timer from "./Timer.svelte";
  import BreadTypes from "./BreadTypes.svelte";
  import {startClicked} from "./store"
  import {stopClicked} from "./store"
  import {resetClicked} from "./store"
  import NumericalScale from "./NumericalScale.svelte";

  let toastTime = 2;  //temperary deafult time for the toaster is 2 mins 

  function click(){
    startClicked.set(true);
  }

  function stopClick(){
    stopClicked.set(true);
  }
  function resetClick(){
    resetClicked.set(true);
  }

   // Update toast time when the scale is selected
   function handleScaleSelected(event) {
    const selectedScale = event.detail; // Get the scale number
    // Set the toast time based on the selected scale
    toastTime = selectedScale; // You can map this scale to different times if needed
  }


</script>
<div >
<div class="toaster">

  <div class="temp">
    <BreadTypes />
  </div>
  <br>
  <div class="temp">
    <NumericalScale on:scaleSelected={handleScaleSelected} />
  </div>
  <br>
    <Timer inputMinutes={toastTime}/>
  <div class="timer">
    <button class="button-56" on:click={click}>Start</button>
    <!-- <button class="button-56" on:click={stopClick}>Stop</button> -->
    <button class="button-56" on:click={resetClick}>Stop</button>
  </div>
  

</div>
</div>


<style>
  .toaster{
    border: 5px solid black;
    width: 800px;
    height: 500px;
    border-radius: 10px;;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  svg {
    width: 80vw;
    height: 80vh;
  }
  .temp{
    border: 1px solid black;
    height:100px;
    padding:10px;
  }

  .timer{
    display: flex;
    justify-content: center;
    gap:2%;
  }


/* CSS */
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
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 20%;

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
