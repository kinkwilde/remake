<script>
    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    // import Mobile from '$lib/components/theme/Mobile.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
</script>

<div class="bg-mono-900 py-9">
    <div class="container flex items-center justify-between">
        <Logo />
        <div class="hidden lg:flex">
            <Navigation />
        </div>
        <div class="flex items-center justify-end space-x-4">
            <div class="hidden lg:flex">
                <button
                    class="text-mono-800 focus:outline-none focus:ring-2 focus:ring-mono-800"
                    aria-label="search items"
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
                    class="rounded text-mono focus:outline-none focus:ring-2 focus:ring-mono-600"
                    aria-label="show options"
                >
                    <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg"
                        alt="toggler"
                    />
                </button>
            </div>
        </div>
    </div>
</div>
<!-- <Mobile /> -->
