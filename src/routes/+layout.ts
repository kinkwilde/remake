/** @type {import('./$types').LayoutLoad} */
export async function load(data: { data: JSON }) {
    console.log('+layout.ts');

    const serverData = data?.data;

    return {
        ...serverData,
        layoutResponse: '+layout.ts'
    };
}
