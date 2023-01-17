<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('ABOUT DATA', data);
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<h1 class="text-3xl font-bold underline">About</h1>
