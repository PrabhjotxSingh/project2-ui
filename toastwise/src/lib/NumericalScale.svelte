<script>
    let selected = 0; // To keep track of the selected number
    const scale = [1, 2, 3, 4, 5]; // The scale values

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function selectCircle(num) {
        selected = num;
        dispatch('scaleSelected', num); 
    }
</script>

<style>
    .scale-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
    }
  
    .circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: white;
      cursor: pointer;
    }
  
    .circle.selected {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      transform: scale(1.1);
    }
  
    .circle-1 { background-color: #C4A484; }
    .circle-2 { background-color: #c09376; }
    .circle-3 { background-color: #a56e49; }
    .circle-4 { background-color: #71482c; }
    .circle-5 { background-color: #5a3821; }
</style>

<div class="scale-container">
  {#each scale as num}
    <div 
      class="circle circle-{num} {selected === num ? 'selected' : ''}"
      on:click={() => selectCircle(num)}>
      {num}
    </div>
  {/each}

</div>
