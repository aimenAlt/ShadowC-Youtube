<script>
	import ChannelCard from '$lib/components/cards/ChannelCard.svelte';
		import SearchVideoCard from '$lib/components/cards/SearchVideoCard.svelte';
</script>

<div class="flex justify-end my-2">
    <button class="font-medium border px-4 py-1 rounded-full hover:bg-gray-200">
        Filter
    </button>

</div>
<div class="space-y-5">
    <ChannelCard />
    <SearchVideoCard />
    <SearchVideoCard />
    <SearchVideoCard />
    <SearchVideoCard />
    <SearchVideoCard />
</div>

