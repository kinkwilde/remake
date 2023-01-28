<script>
    console.log('Header.svelte');

    import Links from '$lib/components/theme/Links.svelte';
    import Logo from '$lib/components/theme/Logo.svelte';
    import Navigation from '$lib/components/theme/Navigation.svelte';
    import Mobile from '$lib/components/theme/Mobile.svelte';
    // import Panel from '$lib/components/theme/Panel.svelte';
</script>

<div class="tw-bg-black dark:tw-bg-grey">
    <div class="tw-container tw-grid tw-grid-cols-2 tw-items-center tw-gap-4 tw-py-9">
        <Logo textColor="tw-text-white" />
        <div class="tw-col-start-2 tw-flex tw-justify-end">
            <div class="tw-hidden lg:tw-block">
                <Links />
            </div>
            <div class="tw-block lg:tw-hidden">
                <Mobile />
            </div>
        </div>
    </div>
    <div
        class="tw-hidden tw-border-b tw-border-t tw-border-grey tw-py-4 dark:tw-border-black lg:tw-block"
    >
        <div class="tw-container">
            <Navigation />
        </div>
    </div>
</div>
