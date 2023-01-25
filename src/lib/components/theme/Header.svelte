<script>
    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    // import Mobile from '$lib/components/theme/Mobile.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
</script>

<div class="tw-border-b tw-border-grey tw-bg-white tw-py-9 dark:tw-border-black dark:tw-bg-black">
    <div class="tw-container tw-flex tw-items-center tw-justify-between">
        <Logo />
        <div class="tw-hidden lg:tw-flex">
            <Navigation />
        </div>
        <div class="tw-justify-end">
            <div class="tw-hidden lg:tw-flex">
                <Links />
            </div>
            <div class="tw-flex lg:tw-hidden">
                <button
                    class="tw-text-black focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white dark:tw-text-white"
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
