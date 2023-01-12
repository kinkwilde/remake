import sanityClient from '@sanity/client';

const sanityConnection = sanityClient({
    projectId: 'j84trkrv',
    dataset: 'production',
    apiVersion: '2023-01-11',
    useCdn: false
});

/** @type {import('./$types').PageLoad} */
export async function load() {
    const sanityData = await sanityConnection.fetch(`*[_type == "homepage"]`);

    const modifiedSanityData = sanityData[0];

    if (modifiedSanityData) {
        return {
            page: {
                title: 'Page Title',
                content: 'Page content'
            },
            sanity: modifiedSanityData
        };
    }

    return {
        status: 500,
        body: new Error('Internal Server Error')
    };
}
