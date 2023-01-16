<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('PAGE DATA', data);

    import Hero from '$lib/components/atoms/Hero.svelte';
    import Code from '$lib/components/atoms/Code.svelte';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- <p>{JSON.stringify($urqlClientData.data)}</p> -->

<Code {data} />

<!-- <Hero title={heroData.title} content={heroData.content} /> -->

<Hero />

<!-- <Code data={heroData} /> -->
