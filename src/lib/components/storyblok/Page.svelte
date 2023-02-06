<script>
    import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

{#key blok}
    <div use:storyblokEditable="{blok}" class="px-6">
        {#each blok.body as blok}
            <StoryblokComponent blok="{blok}" />
        {/each}
    </div>
{/key}
