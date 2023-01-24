<script>
    import { page } from '$app/stores';

    import Text from '$lib/components/theme/Text.svelte';

    export let textSize = 'text-6xl';
</script>

{#if $page.url.pathname === '/'}
    <h1 class="{textSize} mb-0" aria-label="Wildepoint logo">
        <Text {textSize} />
    </h1>
{:else}
    <a class="no-underline" href="/" aria-label="Wildepoint logo linking back to homepage">
        <Text {textSize} />
    </a>
{/if}
