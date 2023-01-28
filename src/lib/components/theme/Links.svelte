<script>
    console.log('Links.svelte');

    import IconSearch from '$lib/icons/Search.svelte';
    import IconCart from '$lib/icons/Cart.svelte';
</script>

<nav class="tw-space-x-4">
    <button
        class="tw-text-xl tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white"
        aria-label="show options"
    >
        <IconSearch />
    </button>
    <button
        class="tw-text-xl tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white"
        aria-label="show options"
    >
        <IconCart />
    </button>
</nav>
