<script lang="ts">
    import ChannelInfo from "$lib/components/ChannelInfo.svelte";

    let videoId = '';
</script>

<!--
<iframe
        class="w-full h-[480px]"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
/>
-->

<div class="max-w-[1150px] px-2 w-full mx-auto">
    <h1 class="text-xl font-semibold capitalize">
        svelte rules!!!
    </h1>
    <div class="flex flex-col md:flex-row gap-5 items-start" >
        <div>
            <ChannelInfo />
        </div>
    </div>
</div>
