import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';

import Feature from '$lib/components/storyblok/Feature.svelte';
import Grid from '$lib/components/storyblok/Grid.svelte';
import Page from '$lib/components/storyblok/Page.svelte';
import Teaser from '$lib/components/storyblok/Teaser.svelte';

// TODO: Move this to layout file
storyblokInit({
    accessToken: 'ioaTMb5iyqfQsmfCk2BNYQtt',
    use: [apiPlugin],
    components: {
        feature: Feature,
        grid: Grid,
        page: Page,
        teaser: Teaser
    }
});

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // console.log('+page.server.ts');

    try {
        const storyblokApi = useStoryblokApi();

        const storyData = await storyblokApi.get('cdn/stories/home', {
            version: 'draft'
        });

        return {
            pageServerResponse: '+page.server.ts',
            story: storyData.data.story
        };
    } catch {
        return {
            status: 500,
            body: new Error(`Page Server Error`)
        };
    }
}
