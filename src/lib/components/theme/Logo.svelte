<script>
    import { page } from '$app/stores';

    import Text from '$lib/components/theme/Text.svelte';

    export let textSize = '!tw-text-6xl';
    export let textColor = 'tw-text-black';
    export let textColorDark = 'dark:tw-text-white';
</script>

{#if $page.url.pathname === '/'}
    <h1 class="tw-mb-0" aria-label="Wildepoint logo">
        <Text {textSize} {textColor} {textColorDark} />
    </h1>
{:else}
    <a
        class="tw-no-underline focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white"
        href="/"
        aria-label="Wildepoint logo linking back to homepage"
    >
        <Text {textSize} {textColor} {textColorDark} />
    </a>
{/if}
