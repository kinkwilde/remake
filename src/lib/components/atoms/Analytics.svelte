<script>
    import { page } from '$app/stores';

    $: if (typeof gtag !== 'undefined') {
        gtag('config', 'G-63KGQ1XDPP', {
            page_title: document.title,
            page_path: $page.url.pathname
        });
    }

    // TODO: Setup & Test for GA4
    // TODO: Find minimum for each page
</script>

<svelte:head>
    <script
        type="text/plain"
        data-categories="essential"
        src="https://www.googletagmanager.com/gtag/js?id=G-63KGQ1XDPP"
    >
    </script>
    <script type="text/plain" data-categories="essential">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'G-63KGQ1XDPP');
    </script>
</svelte:head>
