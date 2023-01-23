<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('HOME DATA', data);

    import Featured from '$lib/components/atoms/Featured.svelte';
    import Hero from '$lib/components/atoms/Hero.svelte';
    import Instagram from '$lib/components/atoms/Instagram.svelte';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="An example of a homepage description" />
</svelte:head>

<Hero />

<Featured />

<Instagram />
