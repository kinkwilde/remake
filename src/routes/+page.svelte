<script>
    // console.log('+page.svelte');

    import { onMount } from 'svelte';

    import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('HOME DATA', data);

    import Latest from '$lib/components/molecules/Latest.svelte';
    import Hero from '$lib/components/atoms/Hero.svelte';

    onMount(() => {
        useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    });
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="An example of a homepage description" />
</svelte:head>

<div class="tw-space-y-12 tw-py-12 lg:tw-space-y-24 lg:tw-py-24">
    <Hero
        title="The Freedom to Create the Websites You Want"
        text="A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online."
        linkOneLink="/"
        linkTwoLink="/"
    />
    <Latest />

    {#if data.story}
        <StoryblokComponent blok="{data.story.content}" />
    {/if}
</div>
