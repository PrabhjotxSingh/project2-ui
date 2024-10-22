<script>
  import { selectedBread, toastTime, favorites } from "./store.js";

  function handleFavoriteClick(favorite) {
    // Update the selected bread and toast time in the stores
    selectedBread.set(favorite.breadType);
    toastTime.set(favorite.time);
  }
</script>

<div class="favorites-container">
  {#if $favorites.length > 0}
    {#each $favorites as favorite}
      <button
        class="favorite-item"
        on:click={() => handleFavoriteClick(favorite)}
      >
        <h2 class="favorite-title">{favorite.title}</h2>
        <p class="favorite-details">
          {favorite.breadType} - {favorite.time} minutes
        </p>
      </button>
    {/each}
  {:else}
    <p>No favorites available.</p>
  {/if}
</div>

<style>
.favorites-container {
  border: 1px solid #ccc;
  border-radius: 5px;;
  padding: 1rem;
  overflow-y: auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 20px;
  height: 180px;
  width: 300px;
}

/* Scrollbar style from #style-2 */
.favorites-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 0px;
  background-color: #F5F5F5;
}

.favorites-container::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.favorites-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000; /* Red thumb */
}


  .favorite-item {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
  }

  .favorite-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .favorite-details {
    font-size: 0.9rem;
    color: #666;
    margin-top: 5px;
  }

  .favorite-item:hover {
    background-color: #f0f0f0;
  }
</style>
