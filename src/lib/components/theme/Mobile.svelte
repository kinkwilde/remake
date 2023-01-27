<script>
    console.log('Mobile.svelte');

    import IconMenu from '$lib/icons/Menu.svelte';
</script>

<button
    class="tw-text-xl tw-text-black focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white dark:tw-text-white"
    aria-label="show options"
>
    <IconMenu />
</button>
