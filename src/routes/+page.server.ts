/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        console.log('+page.server.ts');

        return {
            pageServerResponse: '+page.server.ts'
        };
    } catch {
        // const httpError = err as { status: number; message: string };

        // if (httpError.message) {
        //     return {
        //         status: httpError.status ?? 500,
        //         body: new Error(`Http Error ${httpError.message}`)
        //     };
        // }

        return {
            status: 500,
            body: new Error(`Page Error`)
        };
    }
}
