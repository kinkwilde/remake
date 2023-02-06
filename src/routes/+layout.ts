import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';

import Feature from '$lib/components/storyblok/Feature.svelte';
import Grid from '$lib/components/storyblok/Grid.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Teaser from '$lib/components/storyblok/Teaser.svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load(data: { data: JSON }) {
    console.log('+layout.ts');

    const layoutServerData = data?.data;

    storyblokInit({
        accessToken: 'hbMtGqNYiGnjhZVRegC8tQtt',
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser
        }
    });

    const storyblokApi = useStoryblokApi();

    return {
        ...layoutServerData,
        layoutResponse: '+layout.ts',
        storyblokApi: storyblokApi
    };
}
