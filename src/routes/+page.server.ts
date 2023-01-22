import { SECRET_SANITY_URL } from '$env/static/private';

import { homeGQL } from '$lib/graphql/homepage.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log('+page.server.ts');

    const sanityURL = SECRET_SANITY_URL;

    const sanityQuery = homeGQL;

    // TODO: Check for GQL errors, currently we're only checking for HTTP level errors
    const sanityData = await fetch(sanityURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: sanityQuery
        })
    }).then((res) => {
        if (res.status !== 200) {
            return {
                status: res.status,
                body: new Error(`expected status 200, got ${res.status}`)
            };
        }

        return res.json();
    });

    console.log('SANITY DATA', sanityData);

    return {
        pageServerResponse: '+page.server.ts',
        sanity: sanityData.data
    };
}
