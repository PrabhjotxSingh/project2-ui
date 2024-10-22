<script>
  import Toaster from "./lib/Toaster.svelte";
  import Phone from "./lib/Phone.svelte";
</script>

<main>
  <div class="MainDiv">
    <div class="toaster">
      <div class="toaster_container">
        <Toaster />
      </div>
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

  .toaster,
  .phone {
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
  .toaster_container {
    background-color: white;
    padding: 180px;
    background-image: url("https://st.depositphotos.com/1000674/4891/v/450/depositphotos_48910607-stock-illustration-bread-toaster.jpg");
    background-size: cover;
    background-position: center;
  }
</style>
