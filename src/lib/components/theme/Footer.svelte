<script>
    import Logo from '$lib/components/theme/Logo.svelte';

    const copyrightDate = new Date().getFullYear();
</script>

<footer class="mx-auto max-w-7xl">
    <div
        class="flex w-full max-w-2xl flex-col items-center justify-center space-y-5 px-4 py-12 md:items-start"
    >
        <Logo />
        <nav
            class="flex flex-col flex-wrap items-center space-y-4 text-xs font-medium text-gray-500 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
            <a href="/" class="hover:text-black">Status</a>
            <a href="/" class="hover:text-black">Twitter</a>
            <a href="/" class="hover:text-black">Contact</a>
            <a href="/" class="hover:text-black">Docs</a>
            <a href="/" class="hover:text-black">API</a>
            <a href="/" class="hover:text-black">Privacy</a>
            <a href="/" class="hover:text-black">Terms</a>
        </nav>
        <p class="text-center text-xs leading-5 text-gray-500 md:text-left">
            Copyright &copy; 2022 &ndash; {copyrightDate}
        </p>
    </div>
</footer>
