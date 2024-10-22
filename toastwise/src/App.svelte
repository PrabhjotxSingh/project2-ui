<script>
  import Toaster from "./lib/Toaster.svelte";
  import Phone from "./lib/Phone.svelte";
</script>

<main>
  <div class=bar>
    <h1>Toastwise</h1>
  </div>

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
  .bar{
    background-color: #674023;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    color: white;
  }
  h1{
      margin:0;
      padding:10px;
    }
  .toaster {
    width: 70%; /* Set width to 70% */
    /* border: 1px solid black; */
  }

  .phone {
    width: 30%; /* Set width to 30% */
    /* border: 1px solid black; */

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
