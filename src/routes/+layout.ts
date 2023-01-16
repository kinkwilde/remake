/** @type {import('./$types').LayoutLoad} */
export async function load(data: { data: any }) {
    console.log('+layout.ts');

    let serverData = data?.data;

    return {
        ...serverData,
        layoutResponse: '+layout.ts'
    };
}
