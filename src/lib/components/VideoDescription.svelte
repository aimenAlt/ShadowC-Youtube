<script lang="ts">
    let showMore = false;
</script>

<div
    class:h-fit={showMore}
    class:h-[105px]={!showMore}
    class=" bg-gray-200 mb-5 group relative overflow-hidden text-sm rounded-lg hover:bg-gray-300 p-3">
    <div class="font-medium mb-2">
        <span>10,000 views . 20-11-2021</span>
    </div>
    <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aspernatur atque autem
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aspernatur atque autem
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aspernatur atque autem
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aspernatur atque autem
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aspernatur atque autem
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aspernatur atque autem
    </p>
    <button
        on:click={ () => showMore = !showMore}
        class="absolute bottom-1 right-1 bg-gray-200 group-hover:bg-gray-300 font-medium p-1 capitalize"
    >
        show {showMore ? "less" : "more"}
    </button>
</div>
