/** @type {import('./$types').PageLoad} */
export async function load() {
    return {
        page: {
            title: 'Page Title',
            content: 'Page content'
        },
        sanity: {
            data: 'Sanity data'
        }
    };
}
