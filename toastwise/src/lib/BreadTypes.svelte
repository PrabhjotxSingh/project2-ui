<script>
    import Carousel from 'svelte-carousel';
    import { selectedBread } from './store.js'; 

    let breads = [
        { name: "White Bread", img: "/public/whitebread.webp" },
        { name: "Bagel", img: "/public/bagel.png" },
        { name: "Waffle", img: "/public/waffle.png" },
        { name: "Croissant", img: "/public/croissant.png" },
        { name: "English Muffin", img: "/public/englishmuffin.webp" }
    ];

    function handleClick(breadName) {
        console.log(`Clicked: ${breadName}`); // Debugging line
        selectedBread.update(current => current === breadName ? 'none' : breadName);
        // alert(`You selected: ${breadName}`);
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
        transition: transform 0.3s;
        pointer-events: auto; /* Ensure pointer events are enabled */
    }

    .carousel-item img {
        height: 100%;
        width: auto;
        max-width: 120px;
        margin: 0 10px;
    }

    .carousel-item:hover {
        transform: scale(1.1);
    }
</style>

<div class="carousel-container">
    <Carousel
        let:loaded
        particlesToShow={4}
        particlesToScroll={1}
        dots={false}
        autoplay={false}
    >
        {#each breads as bread}
            <div class="carousel-item" on:click={() => handleClick(bread.name)}>
                <img src={bread.img} alt={bread.name} />
            </div>
        {/each}
    </Carousel>
</div>
