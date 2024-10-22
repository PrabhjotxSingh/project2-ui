<script>
    import Carousel from 'svelte-carousel';
    import { selectedBread } from './store.js'; 

    let breads = [
        { name: "Whole Wheat Bread", img: "wholewheatbread.png", gif: "wholewheatbread.gif" },
        { name: "White Bread", img: "whitebread.webp", gif: "whitebread.gif" },
        { name: "Bagel", img: "bagel.png", gif: "bagel.gif"  },
        { name: "Waffle", img: "waffle.png", gif: "waffle.gif"  },
        { name: "English Muffin", img: "englishmuffin.webp", gif: "englishmuffin.gif"  },
        { name: "Croissant", img: "croissant.png", gif: "croissant.gif"  },
    ];

    let currentSelection = 'none';

    function handleClick(breadName) {
        console.log(`Clicked: ${breadName}`);
        selectedBread.update(current => current === breadName ? 'none' : breadName);
        currentSelection = currentSelection === breadName ? 'none' : breadName;
    }

    function refreshHandlers() {
        console.log('Page changed, refreshing event handlers.');
    }
</script>

<style>
    .carousel-container {
        max-width: 800px;
        margin: auto;
    }

    .carousel-item {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.3s, filter 0.3s;
        padding-top: 20px;
        padding-bottom: 20px;
        flex-direction: column;
    }

    .carousel-item img {
        height: 100%;
        width: auto;
        max-width: 120px;
        margin: 0 10px;
        border-radius: 50%; 
    }

    .carousel-item:hover {
        transform: scale(1.2);
    }

    .carousel-item.selected img {
        /* filter: hue-rotate(300deg) brightness(1.2);  */
        padding: 3px 5px;
        border-radius: 10px;;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;    }
    .selection-info {
        text-align: center;
        margin-top: 20px;
        font-size: 1.2rem;
    }

    
</style>

<div class="carousel-container">
    <Carousel
        particlesToShow={4}
        particlesToScroll={1}
        infinite={false}
        initialPageIndex={1}
        dots={false}
        autoplay={false}
        on:pageChange={refreshHandlers}
    >
        {#each breads as bread (bread.name)}
            <div class="carousel-item {currentSelection === bread.name ? 'selected' : ''}" on:click={() => handleClick(bread.name)}>
                <img src={bread.img} alt={bread.name} />
                <span>{bread.name}</span>
            </div>
        {/each}
    </Carousel>
</div>

<!-- <div class="selection-info">
    {#if currentSelection !== 'none'}
        Selected: {currentSelection}
    {:else}
        No bread was selected
    {/if}
</div> -->

