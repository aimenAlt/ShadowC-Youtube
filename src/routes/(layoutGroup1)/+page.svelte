<script>
    import VideoCard from '$lib/components/cards/VideoCard.svelte';
    export let data;
    console.log(data);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
    {#each data.content as {type, video}}
        {#if type === 'video'}
            <VideoCard
                title={video.title}
                publishedTimeText={video.publishedTimeText}
                views={video.stats.views}
                videoId={video.videoId}
                thumbnail={video.thumbnails[0].url}
                channelName={video.author.title}
                avatar={video.author.avatar[0].url}
            />
        {/if}
    {/each}
</div>
