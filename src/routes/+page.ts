/** @type {import('./$types').PageLoad} */
export async function load(data: { data: JSON }) {
    console.log('+page.ts');

    const pageServerData = data?.data;

    console.log('PAGE CLIENT DATA', pageServerData);

    return {
        ...pageServerData,
        pageResponse: '+page.ts'
    };
}
