import { appSecret } from '$lib/server/secrets';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    console.log('+layout.server.ts');

    console.log('SECRET', appSecret);

    try {
        return {
            layoutServerResponse: '+layout.server.ts'
        };
    } catch {
        return {
            status: 500,
            body: new Error(`Layout Server Error`)
        };
    }
}
