/** @type {import('./$types').LayoutLoad} */
export async function load(data: { data: JSON }) {
    console.log('+layout.ts');

    const layoutServerData = data?.data;

    return {
        ...layoutServerData,
        layoutResponse: '+layout.ts'
    };
}
