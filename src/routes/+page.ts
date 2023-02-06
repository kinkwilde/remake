/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ parent }: { parent: () => Promise<any> }, data: { data: JSON }) {
    console.log('+page.ts');

    const pageServerData = data?.data;

    const { storyblokApi } = await parent();

    const dataStory = await storyblokApi.get('/cdn/stories/home', {
        version: 'draft'
    });

    console.log('STORY DATA', dataStory);

    return {
        ...pageServerData,
        pageResponse: '+page.ts',
        story: dataStory.data.story
    };
}
