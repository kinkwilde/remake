<script>
    console.log('Header.svelte');

    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
    import Mobile from '$lib/components/theme/Mobile.svelte';
    // import Panel from '$lib/components/theme/Panel.svelte';
</script>

<div class="tw-border-b tw-border-grey tw-bg-white tw-py-9 dark:tw-bg-black">
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
                <Mobile />
            </div>
        </div>
    </div>
</div>
<!-- <Panel /> -->
