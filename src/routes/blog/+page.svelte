<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('BLOG DATA', data);

    import Code from '$lib/components/atoms/Code.svelte';
    import Newsletter from '$lib/components/atoms/Newsletter.svelte';
</script>

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="An example of a blog page description" />
</svelte:head>

<div class="px-4 md:container">
    <div class="pt-10 md:pt-40">
        <div>
            <div class="flex flex-wrap items-center pb-12">
                <div class="w-full md:w-1/2 md:pr-6 lg:w-2/3 xl:pr-20">
                    <div class="text-color py-2">
                        <h1
                            class="text-2xl font-black tracking-tighter md:leading-snug lg:text-6xl"
                        >
                            Boost adoption of product and services
                        </h1>
                        <p
                            role="contentinfo"
                            class="py-4 text-lg md:py-8 md:leading-10 lg:text-3xl lg:leading-7"
                        >
                            Here at Globex we take special care of what your organization needs
                            instead of selling you a mass market tool that takes a one size fits all
                            approach. I personally review each and every client business and oversee
                            the team that tailores a solution
                        </p>
                        <button
                            class="flex cursor-pointer items-center pb-4 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 md:pb-0"
                        >
                            <span
                                aria-label="lets get started"
                                role="button"
                                class="focus text-lg font-semibold text-indigo-700 underline outline-none lg:text-2xl"
                                >Lets Get Started</span
                            >
                            <div class="pl-2">
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                                    alt="arrow"
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div class="relative flex h-96 w-full items-end justify-center md:w-1/2 lg:w-1/3">
                    <img
                        class="absolute inset-0 h-full w-full rounded-md object-cover object-center"
                        src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png"
                        alt="A girl enjoying in sunlight"
                    />
                    <div class="relative z-10 -mb-20 w-10/12 rounded bg-white p-6 shadow">
                        <div class="mb-8 flex w-full items-center justify-between sm:w-full">
                            <div class="flex items-center">
                                <div class="rounded-md bg-yellow-200 p-4">
                                    <img
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg2.svg"
                                        alt="icon"
                                    />
                                </div>
                                <div class="ml-6">
                                    <p class="mb-1 text-2xl font-bold leading-5 text-gray-800">
                                        2,330
                                    </p>
                                    <p
                                        class="text-sm font-normal leading-5 tracking-normal text-gray-600"
                                    >
                                        Avg Sales
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center pl-3 text-green-400">
                                    <img
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg3.svg"
                                        alt="arrow"
                                    />
                                    <p
                                        class="pl-1 text-xs font-bold leading-normal tracking-wide text-green-700"
                                    >
                                        7.2%
                                    </p>
                                </div>
                                <p
                                    class="text-right text-xs font-normal leading-4 tracking-normal text-green-700"
                                >
                                    Increase
                                </p>
                            </div>
                        </div>
                        <div class="relative mb-3">
                            <hr class="h-1 rounded-sm bg-gray-200" />
                            <hr class="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                        </div>
                        <h2 class="text-base font-normal leading-5 tracking-normal text-gray-600">
                            Yearly Goal
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pb-32 pt-16">
        <div>
            <div class="flex flex-row-reverse flex-wrap items-center">
                <div class="w-full pl-0 sm:pl-0 md:w-1/2 md:pl-10 lg:w-2/3 lg:pl-20">
                    <div class="text-color py-2">
                        <div>
                            <h1
                                class="text-2xl font-black tracking-tighter md:leading-snug lg:text-6xl"
                            >
                                Easily manage sales through our invoicing system
                            </h1>
                        </div>
                        <p
                            role="contentinfo"
                            class="py-8 text-lg leading-7 md:leading-10 lg:text-3xl"
                        >
                            Here at Globex we take special care of what your organization needs
                            instead of selling you a mass market tool that takes a one size fits all
                            approach. I personally review each and every client business and oversee
                            the team that tailores a solution
                        </p>
                        <button
                            class="flex cursor-pointer items-center pb-4 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 md:pb-0"
                        >
                            <span
                                aria-label="lets get started"
                                role="button"
                                class="focus text-lg font-semibold text-indigo-700 underline outline-none lg:text-2xl"
                                >Lets Get Started</span
                            >
                            <div class="pl-2">
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                                    alt="arrow"
                                />
                            </div>
                        </button>
                    </div>
                </div>
                <div class="relative flex h-96 w-full items-end justify-center md:w-1/2 lg:w-1/3">
                    <img
                        class="absolute inset-0 h-full w-full rounded-md object-cover object-center"
                        src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                        alt="A group of three having a meeting"
                    />
                    <div class="relative z-10 mx-auto -mb-20 w-9/12 rounded bg-white p-4 shadow">
                        <p class="text-md mb-2 font-normal leading-4 tracking-normal text-gray-800">
                            Invoice # 35RD87
                        </p>
                        <p class="text-xs font-normal leading-3 text-gray-600">
                            Assigned to: Josh Rollins
                        </p>
                        <div class="mt-4 flex items-center">
                            <span class="text-gray-600">
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg4.svg"
                                    alt="account"
                                />
                            </span>
                            <p
                                class="ml-1 text-sm font-normal leading-3 tracking-normal text-gray-800"
                            >
                                Specter Consultancy
                            </p>
                        </div>
                        <div class="mt-3 flex items-center">
                            <span class="text-gray-600">
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg5.svg"
                                    alt="dollar"
                                />
                            </span>
                            <p
                                class="ml-1 text-sm font-normal leading-3 tracking-normal text-gray-800"
                            >
                                2,354 USD
                            </p>
                        </div>
                        <button
                            class="relative mt-4 cursor-pointer bg-indigo-700 py-2 pr-10 pl-3 text-xs tracking-normal text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                        >
                            View Invoice
                            <img
                                class="icon icon-tabler icon-tabler-arrow-right absolute inset-0 m-auto mr-3"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg6.svg"
                                alt="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Newsletter />

<Code {data} />
