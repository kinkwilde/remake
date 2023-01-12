<script>
    import '../app.css';

    import Header from '$lib/components/theme/Header.svelte';
    import Footer from '$lib/components/theme/Footer.svelte';
</script>

<Header />

<main>
    <slot />
</main>

<Footer />
