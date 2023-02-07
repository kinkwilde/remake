/** @type {import('./$types').LayoutLoad} */
export async function load(data: { data: JSON }) {
    console.log('+layout.ts');

    const layoutServerData = data?.data;

    console.log('LAYOUT CLIENT DATA', layoutServerData);

    return {
        ...layoutServerData,
        layoutResponse: '+layout.ts'
    };
}
