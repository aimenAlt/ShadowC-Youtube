<script>
import { enhance} from '$app/forms';
    import { page } from '$app/stores';
</script>

<form action="/?/search" use:enhance method="POST"  class="flex h-[40px] basis-[600px]">
    <input
        class="h-[40px] outline-none border rounded-s-3xl focus:border-blue-600 focus:border-2 px-2 flex-1 border-grey-400"
        class:border-red-500={$page.form?.error}
        type="text"
        placeholder="Search"
        name="q"
    />
    <button class="flex items-center justify-center cursor-pointer w-16 bg-slate-50 border rounded-e-3xl">
        <img src="/icons/searchIcon.svg" alt="">
    </button>
</form>
