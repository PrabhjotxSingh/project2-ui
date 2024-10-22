<script>
  import {
    currentTimer,
    selectedBread,
    toasterStatus,
    favorites,
  } from "./store";

  let status = false;
  let displayTimer;
  let displayBread;
  let showEditScreen = false;

  // Toggle between screens
  function toggleEditScreen() {
    showEditScreen = !showEditScreen;
  }

  $: {
    if ($toasterStatus) {
      status = true;
    } else {
      status = false;
    }
  }

  // using the writable store to get the current time
  currentTimer.subscribe((value) => {
    displayTimer = value;
  });

  selectedBread.subscribe((value) => {
    displayBread = value;
  });

  // Popup variables for adding new favorite
  let showAddPopup = false;
  let newTitle = "";
  let newBreadType = "";
  let newToastTime = 0;

  // Function to toggle the add favorite popup
  function toggleAddFavorite() {
    showAddPopup = !showAddPopup;
  }

  // Function to add a new favorite
  function addFavorite() {
    if (newTitle && newBreadType && newToastTime > 0) {
      favorites.update((favs) => [
        ...favs,
        { title: newTitle, breadType: newBreadType, time: newToastTime },
      ]);
      // Clear the popup fields and close the popup
      newTitle = "";
      newBreadType = "";
      newToastTime = 0;
      showAddPopup = false;
    }
  }

  // Function to delete a favorite
  function deleteFavorite(index) {
    favorites.update((favs) => favs.filter((_, i) => i !== index));
  }
</script>

<div class="phoneBody">
  {#if showEditScreen}
    <!-- Show the edit favorites screen -->
    <div class="edit-favorites">
      <div class="header">
        <h2>Favorites</h2>
        <button class="add-button" on:click={toggleAddFavorite}>+</button>
      </div>

      <ul class="favorites-list">
        {#each $favorites as favorite, index}
          <li class="favorite-item">
            <div class="item-content">
              <span class="favorite-title">{favorite.title}</span>
              <span class="favorite-details"
                >{favorite.breadType} - {favorite.time} min</span
              >
            </div>
            <button class="delete-button" on:click={() => deleteFavorite(index)}
              >-</button
            >
          </li>
        {/each}
      </ul>

      <button class="back-button" on:click={toggleEditScreen}>Done</button>
      <!-- Done button to go back -->

      {#if showAddPopup}
        <!-- Add an overlay to darken the background -->
        <div class="overlay"></div>

        <!-- Popup for adding a new favorite -->
        <div class="popup">
          <div class="popup-header">
            <h4>Add New Favorite</h4>
            <button class="close-popup" on:click={toggleAddFavorite}>x</button>
          </div>
          <div class="popup-body">
            <input
              class="input-field"
              type="text"
              bind:value={newTitle}
              placeholder="Title"
            />
            <input
              class="input-field"
              type="text"
              bind:value={newBreadType}
              placeholder="Type of Bread"
            />
            <input
              class="input-field"
              type="number"
              bind:value={newToastTime}
              min="1"
              placeholder="Timer"
            />
            <button class="submit-button" on:click={addFavorite}>Save</button>
          </div>
        </div>
      {/if}
    </div>
  {:else}
    <div>
      <div class="statusDiv">
        <h3>Toaster status:</h3>
        {#if status === false}
          <div class="status" style="background-color: #c7522a">Off</div>
        {:else}
          <div class="status" style="background-color: #008585">Running</div>
        {/if}
      </div>
      <div class="timeDiv">
        <h3 class="timerHeader">Current Timer</h3>
        <span class="time">{displayTimer}</span>
      </div>
      <div class="timeDiv">
        <h3 class="timerHeader">You have selected</h3>
        <span class="bread">{displayBread}</span>
      </div>
      <br />
      <br />
      <button class="edit-button" on:click={toggleEditScreen}
        >Edit Favorites</button
      >
    </div>
  {/if}
</div>

<style>
  p {
    margin: 0;
    padding: 10px;
  }

  .statusDiv {
    margin: 10px;
    display: flex;
    align-items: center;
  }

  .status {
    border-radius: 20px;
    margin: 0px 5px;
    padding: 3px 20px;
    color: white;
  }
  .timeDiv {
    text-align: center;
  }
  .timerHeader {
    margin-bottom: 0px;
  }
  .phoneBody {
    position: relative;
    border: 20px solid black;
    border-top: 60px solid black;
    border-bottom: 50px solid black;
    border-radius: 30px;
    height: 500px;
    width: 250px;
    padding: 5px;
  }
  .time {
    font-size: 60px;
    text-shadow: 2px 2px 5px #ccc;
  }
  .bread {
    font-size: 40px;
    text-shadow: 2px 2px 5px #ccc;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Darken the background */
    z-index: 998;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }

  .favorites-list {
    list-style: none;
    padding: 0;
  }

  .favorite-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .item-content {
    display: flex;
    flex-direction: column;
  }

  .favorite-title {
    font-size: 14px;
    font-weight: bold;
  }

  .favorite-details {
    font-size: 12px;
    color: #666;
  }

  .delete-button {
    background-color: #ff427e;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 18px;
    cursor: pointer;
  }

  .delete-button:hover {
    background-color: #ff8db3;
  }

  .add-button {
    background-color: #34b0fd;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .add-button:hover {
    background-color: #9be9ff;
  }

  .back-button,
  .edit-button {
    background-color: #f0f0f0;
    border: none;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }

  .back-button:hover,
  .edit-button:hover {
    background-color: #e0e0e0;
  }

  .popup {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
    width: 200px;
    height: 200px;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .popup-header h4 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  .close-popup {
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  .popup-body {
    display: flex;
    flex-direction: column;
  }

  .input-field {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
  }

  .submit-button {
    background-color: #57a8ff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
  }

  .submit-button:hover {
    background-color: #1486ff;
  }
</style>
