<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('HOME DATA', data);

    import Code from '$lib/components/atoms/Code.svelte';
    import Hero from '$lib/components/atoms/Hero.svelte';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="An example of a homepage description" />
</svelte:head>

<Hero />

<h1>Welcome to SvelteKit</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Code {data} />
