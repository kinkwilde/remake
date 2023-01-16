/** @type {import('./$types').PageServerLoad} */
export async function load() {
    console.log('+page.server.ts');

    return {
        pageServerResponse: '+page.server.ts'
    };
}
