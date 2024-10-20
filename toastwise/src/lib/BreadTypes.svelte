<script>
    let breads = [
      { name: "Bagel", icon: "/bagel.png" },
      { name: "Bread Slice", icon: "/whiteBread.webp" },   
      { name: "Waffle", icon: "/waffle.png" }
    ];
  
    function selectBread(bread) {
      console.log(`You selected: ${bread.name}`);
    }
  </script>
  
  <style>
    .bread-buttons {
      display: flex;
      justify-content: space-around; /* Align buttons with space between */
      align-items: center;
      flex-wrap: wrap; /* Ensure buttons wrap if they overflow */
      width: 100%;
    }
  
    .bread-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      margin: 5px;
      background-color: #f5a623;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-size: 1.2rem;
      width: 150px; /* Set a fixed width for all buttons */
      height: 60px; /* Set a fixed height for all buttons */
      box-sizing: border-box; /* Ensure padding is included in button size */
    }
  
    .bread-button:hover {
      background-color: #d4491f;
    }
  
    .icon {
      margin-right: 10px;
      width: 24px;
      height: 24px;
      flex-shrink: 0; /* Prevent the icon from shrinking */
    }
  
    .icon img {
      width: 100%;
      height: 100%;
    }
  </style>
  
  <div class="bread-buttons">
    {#each breads as bread}
      <button class="bread-button" on:click={() => selectBread(bread)}>
        <span class="icon">
          <img src={bread.icon} alt={bread.name + " icon"}>
        </span>
        {bread.name}
      </button>
    {/each}
  </div>
  