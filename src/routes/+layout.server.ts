/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    console.log('+layout.server.ts');

    return {
        layoutServerResponse: '+layout.server.ts'
    };
}
