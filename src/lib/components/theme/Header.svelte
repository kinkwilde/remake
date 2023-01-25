<script>
    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    // import Mobile from '$lib/components/theme/Mobile.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
</script>

<div class="border-b border-grey bg-white py-9 dark:border-black dark:bg-black">
    <div class="container flex items-center justify-between">
        <Logo />
        <div class="hidden lg:flex">
            <Navigation />
        </div>
        <div class="justify-end">
            <div class="hidden lg:flex">
                <Links />
            </div>
            <div class="flex lg:hidden">
                <button
                    class="text-black focus:outline-none focus:ring-2 focus:ring-white dark:text-white"
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
