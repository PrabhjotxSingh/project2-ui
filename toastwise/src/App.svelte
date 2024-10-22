<script>
  import Toaster from "./lib/Toaster.svelte";
  import Phone from "./lib/Phone.svelte";
  import Swal from "sweetalert2";

  function viewInfo() {
    Swal.fire({
      title: "Info",
      html: `<p>&nbsp;</p>
<p><strong>This page holds the UI interface for A toaster and its app on a mobile device.</strong></p>
<h3><strong>Toaster UI Controls:</strong></h3>
<ol>
<li style="font-weight: 400;"><strong>Bread Type</strong><span style="font-weight: 400;">: Scroll and select your bread type.</span></li>
<li style="font-weight: 400;"><strong>Toast Setting</strong><span style="font-weight: 400;">: Choose a toast level (1-5) or select from saved favorites.</span></li>
<li style="font-weight: 400;"><strong>Timer</strong><span style="font-weight: 400;">: Displays the countdown when toasting starts.</span></li>
<li style="font-weight: 400;"><strong>Start/Stop Buttons</strong><span style="font-weight: 400;">:</span></li>
<ul>
<li style="font-weight: 400;"><strong>Start</strong><span style="font-weight: 400;">: Begins toasting and starts the timer.</span></li>
<li style="font-weight: 400;"><strong>Stop</strong><span style="font-weight: 400;">: Cancels toasting and timer.</span></li>
</ul>
</ol>
<h3><strong>Mobile App Controls:</strong></h3>
<ol>
<li style="font-weight: 400;"><strong>Timer</strong><span style="font-weight: 400;">: Shows remaining time while synchronous to the toaster.</span></li>
<li style="font-weight: 400;"><strong>Toaster Status</strong><span style="font-weight: 400;">: Indicates if the toaster is running or off.</span></li>
<li style="font-weight: 400;"><strong>Favorites</strong><span style="font-weight: 400;">: Lists saved toast settings with their Name, Setting, and Timer.</span></li>
<li style="font-weight: 400;"><strong>Live Cam</strong><span style="font-weight: 400;">: Shows live footage of bread toasting.</span></li>
</ol>
<h3><strong>How to Use:</strong></h3>
<ul>
<li style="font-weight: 400;"><strong>To Start Toaster</strong><span style="font-weight: 400;">: Select bread, then set your toast level and press Start.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Next, check up on the timer via the toaster or the app.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">To stop the toaster either press</span> <span style="font-weight: 400;">stop to halt the process, or let the toast timer finish off for the toast to be finished.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Finally, enjoy your Toast!</span></li>
</ul>`,
    });
  }
</script>

<main>
  <div class="bar">
    <h1>Toastwise</h1>
    <div class="infobtn">
      <a class="info" href="#info" on:click={viewInfo}>Info</a>
    </div>
  </div>

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
  .bar {
    width: 100%;
    z-index: 10;
    position: absolute;
    background-color: #674023;
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    color: white;
  }
  h1 {
    margin: 0;
    padding: 10px;
  }
  .toaster {
    width: 70%; /* Set width to 70% */
    /* border: 1px solid black; */
  }

  .phone {
    width: 30%; /* Set width to 30% */
    /* border: 1px solid black; */
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
    background-image: url("./toaster.jpg");
    background-size: cover;
    background-position: center;
  }

  .infobtn {
    right: 0;
    position: absolute;
    top: 0;
    padding: 20px;
    cursor: pointer;
  }

  .info {
    color: white;
  }
</style>
