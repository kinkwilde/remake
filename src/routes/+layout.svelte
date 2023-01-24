<script>
    console.log('+layout.svelte');

    /** @type {import('./$types').LayoutData} */
    export let data;

    console.log('LAYOUT DATA', data);

    import '../app.css';

    import Header from '$lib/components/theme/Header.svelte';
    import Footer from '$lib/components/theme/Footer.svelte';

    import Analytics from '$lib/components/atoms/Analytics.svelte';
</script>

<Analytics />

<Header />

<main>
    <slot />
</main>

<Footer />
