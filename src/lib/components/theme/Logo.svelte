<script>
    import { page } from '$app/stores';

    import Text from '$lib/components/theme/Text.svelte';

    export let textSize = 'text-6xl';
    export let textColor = 'text-black';
    export let textColorDark = 'dark:text-white';
</script>

{#if $page.url.pathname === '/'}
    <h1 class="{textSize} mb-0" aria-label="Wildepoint logo">
        <Text {textSize} {textColor} {textColorDark} />
    </h1>
{:else}
    <a
        class="no-underline focus:outline-none focus:ring-2 focus:ring-white"
        href="/"
        aria-label="Wildepoint logo linking back to homepage"
    >
        <Text {textSize} {textColor} {textColorDark} />
    </a>
{/if}
