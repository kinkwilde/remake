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
        <div class="tw-col-start-2 tw-flex tw-justify-end tw-space-x-4">
            <div class="tw-hidden lg:tw-block">
                <Links />
            </div>
            <div>
                <Mobile />
            </div>
        </div>
    </div>
</div>
