<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('BLOG DATA', data);

    import Newsletter from '$lib/components/atoms/Newsletter.svelte';
</script>

<svelte:head>
    <title>Blog</title>
    <meta name="description" content="An example of a blog page description" />
</svelte:head>

<div class="container flex flex-col items-center py-12 sm:py-24">
    <div class="w-11/12 flex-col items-center justify-center sm:mb-10 sm:w-2/3 lg:flex">
        <h1
            class="text-center text-2xl leading-7 text-mono-800 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl"
        >
            The Freedom to Create the
            <span class="text-primary-700">Websites</span>
            You Want
        </h1>
        <p
            class="mt-5 mb-0 text-center text-sm font-normal text-mono-400 sm:mt-10 sm:text-lg lg:w-10/12"
        >
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
</div>

<div class="container mx-auto py-20 px-6">
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div class="rounded">
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h4 class="mb-3 font-bold text-mono-800 dark:text-mono-100">
                        13 things to work on
                    </h4>
                    <p class="text-sm text-mono-800 dark:text-mono-100">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-mono-800 dark:text-mono-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="border-pink-300 bg-pink-300 mb-6 flex h-64 w-full flex-col justify-between rounded-lg border py-5 px-4"
            >
                <div>
                    <h4 class="mb-3 font-bold text-mono-800">13 things to work on</h4>
                    <p class="text-sm text-mono-800">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-mono-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="ring-offset-pink-300 focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2   focus:ring-offset-2"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="border-blue-300 bg-blue-300 mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border py-5 px-4"
            >
                <div>
                    <h4 class="mb-3 font-bold text-mono-800">13 things to work on</h4>
                    <p class="text-sm text-mono-800">
                        Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque
                        porro quisquam est, quid malum, sensu iudicari
                    </p>
                </div>
                <div class="flex w-full flex-col items-start">
                    <div
                        class="mb-3 flex items-center rounded-full border border-mono-800 px-3 py-1 text-xs text-mono-800"
                        aria-label="Due on"
                        role="contentinfo"
                    >
                        <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                            alt="clock"
                        />
                        <p class="ml-2">7 Sept, 23:00</p>
                    </div>
                    <div class="flex w-full items-center justify-between text-mono-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="ring-offset-blue-300 focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2  focus:ring-offset-2"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded">
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h3 class="w-11/12 font-semi leading-7 text-mono-800 dark:text-mono-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="flex items-center justify-between text-mono-800">
                        <p class="text-sm dark:text-mono-100">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h3 class="w-11/12 font-semi leading-7 text-mono-800 dark:text-mono-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="mb-3 flex items-center">
                        <div
                            class="flex items-center rounded-full border border-mono-300 px-3 py-1 text-xs text-mono-600 dark:border-mono-700 dark:text-mono-400"
                            aria-label="due on"
                            role="contentinfo"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                                alt="clock"
                            />
                            <p class="ml-2 dark:text-mono-400">7 Sept, 23:00</p>
                        </div>
                        <button
                            class="text-yellow-500 focus:ring-black ml-2 rounded-full bg-mono-800 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2  dark:bg-mono-100"
                            aria-label="save in starred items"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg3.svg"
                                alt="star"
                            />
                        </button>
                    </div>
                    <div class="flex items-center justify-between text-mono-800">
                        <p class="text-sm dark:text-mono-100">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h3 class="w-11/12 font-semi leading-7 text-mono-800 dark:text-mono-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="flex-no-wrap mb-3 flex items-center">
                        <div class="h-6 w-6 rounded-md bg-cover bg-center">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                                alt="read by Alia"
                                class="border-white h-full w-full overflow-hidden rounded-full border-2 object-cover shadow dark:border-mono-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                                alt="read by jason"
                                class="border-white h-full w-full overflow-hidden rounded-full border-2 object-cover shadow dark:border-mono-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover bg-center">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                                alt="read by Kane"
                                class="border-white h-full w-full overflow-hidden rounded-full border-2 object-cover shadow dark:border-mono-700"
                            />
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-mono-800">
                        <p class="text-sm dark:text-mono-100">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded">
            <div
                class="mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h4 class="mb-3 font-bold text-mono-800 dark:text-mono-100">
                        13 things to work on
                    </h4>
                    <p class="text-sm text-mono-800 dark:text-mono-100">
                        Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque
                        porro quisquam est, quid malum, sensu iudicari
                    </p>
                </div>
                <div class="flex w-full flex-col items-start">
                    <div
                        aria-label="time"
                        role="contentinfo"
                        class="mb-3 flex items-center rounded-full border border-mono-800 px-3 py-1 text-xs text-mono-800 dark:border-mono-700 dark:text-mono-400"
                    >
                        <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                            alt="clock"
                        />
                        <p class="ml-2">7 Sept, 23:00</p>
                    </div>
                    <div
                        class="flex w-full items-center justify-between text-mono-800 dark:text-mono-100"
                    >
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-300 bg-mono-300 py-5 px-4 dark:border-mono-700 dark:bg-mono-700"
            >
                <div>
                    <h4 class="mb-3 font-bold text-mono-800 dark:text-mono-100">
                        13 things to work on
                    </h4>
                    <p class="text-sm text-mono-800 dark:text-mono-100">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-mono-800 dark:text-mono-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 ring-offset-mono-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="border-yellow-400 bg-yellow-400 mb-6 flex h-64 w-full flex-col justify-between rounded-lg border py-5 px-4"
            >
                <div>
                    <h4 class="mb-3 font-bold text-mono-800">13 things to work on</h4>
                    <p class="text-sm text-mono-800">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-mono-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="ring-offset-yellow-400 focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2  focus:ring-offset-2"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded">
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h3 class="w-11/12 font-semi leading-7 text-mono-800 dark:text-mono-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="mb-3 flex items-center">
                        <button
                            class="text-yellow-500 focus:ring-black rounded-full bg-mono-800 p-1 focus:outline-none focus:ring-2 focus:ring-offset-2  dark:bg-mono-100"
                            aria-label="save in starred messages"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg3.svg"
                                alt="star"
                            />
                        </button>
                    </div>
                    <div class="flex items-center justify-between text-mono-800 dark:text-mono-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-mono-400 bg-mono-50 py-5 px-4 dark:border-mono-700 dark:bg-mono-800"
            >
                <div>
                    <h3 class="w-11/12 font-semi leading-7 text-mono-800 dark:text-mono-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="flex-no-wrap mb-3 flex items-center">
                        <div class="h-6 w-6 rounded-md bg-cover bg-center">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                                alt="read by Alia"
                                class="border-white h-full w-full overflow-hidden rounded-full border-2 object-cover shadow dark:border-mono-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                                alt="read by jason"
                                class="border-white h-full w-full overflow-hidden rounded-full border-2 object-cover shadow dark:border-mono-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover bg-center">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                                alt="read by Kane"
                                class="border-white h-full w-full overflow-hidden rounded-full border-2 object-cover shadow dark:border-mono-700"
                            />
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-mono-800 dark:text-mono-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-mono-100  dark:text-mono-800"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-primary-300 bg-primary-300 py-5 px-4"
            >
                <div>
                    <h3 class="w-11/12 font-semi leading-7 text-mono-800">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="flex items-center justify-between text-mono-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="focus:ring-black flex h-8 w-8 items-center justify-center rounded-full bg-mono-800 text-mono-50 ring-offset-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            aria-label="edit note"
                        >
                            <img
                                class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
                                alt="edit"
                            />
                            <img
                                class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
                                alt="edit"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<Newsletter />
