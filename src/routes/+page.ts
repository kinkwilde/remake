import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';

import Feature from '$lib/components/storyblok/Feature.svelte';
import Grid from '$lib/components/storyblok/Grid.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Teaser from '$lib/components/storyblok/Teaser.svelte';

// TODO: Move this to layout file
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

/** @type {import('./$types').PageLoad} */
export async function load(data: { data: JSON }) {
    console.log('+page.ts');

    const pageServerData = data?.data;

    const storyblokApi = useStoryblokApi();

    const storyData = await storyblokApi.get('cdn/stories/home', {
        version: 'draft'
    });

    console.log('STORY DATA', storyData);

    return {
        ...pageServerData,
        pageResponse: '+page.ts',
        story: storyData.data.story
    };
}
