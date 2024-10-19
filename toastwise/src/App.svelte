<script>
  import Toaster from "./lib/Toaster.svelte";
  import Phone from "./lib/Phone.svelte";
</script>

<main>
  <div class="MainDiv">
    <div class="toaster">
      <Toaster />
    </div>
    <div class="phone">
      <Phone />
    </div>
  </div>
</main>

<style>
  .toaster {
    width: 70%; /* Set width to 70% */
    border: 1px solid black;
  }

  .phone {
    width: 30%; /* Set width to 30% */
    border: 1px solid black;

  }

  .toaster, .phone{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .MainDiv {
    display: flex;
    align-items: stretch; /* Ensure child divs stretch to full height */
    justify-content: center; 
    height: 100vh; 
  }
</style>
