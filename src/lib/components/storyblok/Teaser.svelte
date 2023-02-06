<script>
    import { storyblokEditable } from '@storyblok/svelte';

    /**
     * @type {import("@storyblok/svelte").SbBlokData}
     */
    export let blok;
</script>

<div use:storyblokEditable="{blok}" class="py-32 text-6xl text-[#50b0ae] font-bold text-center">
    {blok.headline}
</div>
