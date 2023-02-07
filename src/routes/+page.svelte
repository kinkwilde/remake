<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('HOME DATA', data);
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="An example of a homepage description" />
</svelte:head>

<div class="tw-space-y-12 tw-py-12 lg:tw-space-y-24 lg:tw-py-24">
    <p>Homepage</p>
</div>
