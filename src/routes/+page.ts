/** @type {import('./$types').PageLoad} */
export async function load(data: { data: JSON }) {
    console.log('+page.ts');

    const serverData = data?.data;

    return {
        ...serverData,
        pageResponse: '+page.ts',
        page: {
            title: 'Page Title',
            content: 'Page content'
        }
    };
}
