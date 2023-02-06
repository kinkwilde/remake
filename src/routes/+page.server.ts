/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // console.log('+page.server.ts');

    try {
        return {
            pageServerResponse: '+page.server.ts'
        };
    } catch {
        return {
            status: 500,
            body: new Error(`Page Server Error`)
        };
    }
}
