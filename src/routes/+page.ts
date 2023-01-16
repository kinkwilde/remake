/** @type {import('./$types').PageLoad} */
export async function load(data: { data: any }) {
    console.log('+page.ts');

    let serverData = data?.data;

    return {
        ...serverData,
        pageResponse: '+page.ts',
        page: {
            title: 'Page Title',
            content: 'Page content'
        }
    };
}
