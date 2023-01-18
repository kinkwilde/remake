/** @type {import('./$types').PageLoad} */
export async function load(data: { data: JSON }) {
    console.log('+page.ts');

    const serverData = data?.data;

    const sanityURL = 'https://j84trkrv.api.sanity.io/v1/graphql/production/default';

    const sanityQuery = `{
            allHomepage {
                name
            }
        }`;

    // TODO: Check for GQL errors, currently we're only checking for HTTP level errors
    const sanityData = await fetch(sanityURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: sanityQuery
        })
    }).then((res) => {
        if (res.status != 200) {
            return {
                status: res.status,
                body: new Error(`expected status 200, got ${res.status}`)
            };
        }

        return res.json();
    });

    console.log('SANITY DATA', sanityData);

    return {
        ...serverData,
        pageResponse: '+page.ts',
        page: {
            title: 'Page Title',
            content: 'Page content'
        },
        sanity: sanityData.data
    };
}
