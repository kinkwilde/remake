<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('HOME DATA', data);

    import Latest from '$lib/components/molecules/Latest.svelte';
    import Hero from '$lib/components/atoms/Hero.svelte';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="An example of a homepage description" />
</svelte:head>

<div class="tw-space-y-12 tw-py-12 md:tw-space-y-24 md:tw-py-24">
    <Hero linkOneLink="/" linkTwoLink="/" />
    <Latest />
</div>
