import { appSecret } from '$lib/server/secrets';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    console.log('+layout.server.ts');

    console.log('SECRET', appSecret);

    return {
        layoutServerResponse: '+layout.server.ts'
    };
}
