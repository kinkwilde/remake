<script>
    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    // import Mobile from '$lib/components/theme/Mobile.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
</script>

<div class="bg-gray-900 px-6 py-9">
    <div class="container flex items-center justify-between">
        <Logo />
        <div class="hidden lg:flex">
            <Navigation />
        </div>
        <div class="flex items-center justify-end space-x-4 xl:space-x-8">
            <div class="hidden items-center lg:flex">
                <button
                    aria-label="search items"
                    class="w-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                    <img
                        class="rotate-90"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg"
                        alt="search"
                    />
                </button>
            </div>
            <div class="hidden lg:flex">
                <Links />
            </div>
            <div class="flex lg:hidden">
                <button
                    aria-label="show options"
                    class="rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    <img
                        class="dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg"
                        alt="toggler"
                    />
                </button>
            </div>
        </div>
    </div>
</div>
<!-- <Mobile /> -->
