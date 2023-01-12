<script>
    /** @type {import('./$types').PageData} */
    export let data;

    console.log('Home Data', data);

    import Hero from '$lib/components/atoms/Hero.svelte';
    import Code from '$lib/components/atoms/Code.svelte';

    const heroData = {
        title: data.page.title,
        content: data.page.content
    };
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Code {data} />

<Hero title={heroData.title} content={heroData.content} />

<Hero />

<Code data={heroData} />
