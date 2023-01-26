<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('HOME DATA', data);

    import Featured from '$lib/components/atoms/Featured.svelte';
    import Hero from '$lib/components/atoms/Hero.svelte';
    import Newsletter from '$lib/components/atoms/Newsletter.svelte';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="An example of a homepage description" />
</svelte:head>

<div class="tw-space-y-12 tw-py-12 md:tw-space-y-24 md:tw-py-24">
    <Hero />

    <Featured />

    <Newsletter />
</div>
