import { minify } from 'html-minifier-terser';

const minificationOptions = {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: true,
    sortAttributes: true,
    sortClassName: true
};

export async function handle({ event, resolve }: { event: any; resolve: any }) {
    const response = await resolve(event, {
        transformPageChunk: ({ html }: { html: any }) => minify(html, minificationOptions)
    });

    return response;
}
