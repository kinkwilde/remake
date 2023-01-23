<script>
    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    import Menu from '$lib/components/theme/Menu.svelte';
    import Mobile from '$lib/components/theme/Mobile.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
</script>

<div class="bg-gray-900 px-6 py-9">
    <div class="container flex items-center justify-between">
        <Logo />
        <Navigation />
        <div class="flex items-center justify-end space-x-4 xl:space-x-8">
            <div class="hidden items-center lg:flex">
                <button
                    aria-label="search items"
                    class="w-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                    <img
                        class="rotate-90 transform dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg"
                        alt="search"
                    />
                    <img
                        class="hidden rotate-90 transform dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg"
                        alt="search"
                    />
                </button>
            </div>
            <Links />
            <Menu />
        </div>
    </div>
</div>
<Mobile />
