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
            class="text-center text-2xl font-black leading-7 text-gray-800 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl"
        >
            The Freedom to Create the
            <span class="text-indigo-700">Websites</span>
            You Want
        </h1>
        <p
            class="mt-5 mb-0 text-center text-sm font-normal text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h4 class="mb-3 font-bold text-gray-800 dark:text-gray-100">
                        13 things to work on
                    </h4>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-pink-300 bg-pink-300 py-5 px-4"
            >
                <div>
                    <h4 class="mb-3 font-bold text-gray-800">13 things to work on</h4>
                    <p class="text-sm text-gray-800">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-gray-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white ring-offset-pink-300 focus:outline-none focus:ring-2 focus:ring-black   focus:ring-offset-2"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border border-blue-300 bg-blue-300 py-5 px-4"
            >
                <div>
                    <h4 class="mb-3 font-bold text-gray-800">13 things to work on</h4>
                    <p class="text-sm text-gray-800">
                        Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque
                        porro quisquam est, quid malum, sensu iudicari
                    </p>
                </div>
                <div class="flex w-full flex-col items-start">
                    <div
                        class="mb-3 flex items-center rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-800"
                        aria-label="Due on"
                        role="contentinfo"
                    >
                        <img src="../svgs/4-by-3-multiple-styled-cards-svg2.svg" alt="clock" />
                        <p class="ml-2">7 Sept, 23:00</p>
                    </div>
                    <div class="flex w-full items-center justify-between text-gray-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white ring-offset-blue-300 focus:outline-none focus:ring-2 focus:ring-black  focus:ring-offset-2"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h3 class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="flex items-center justify-between text-gray-800">
                        <p class="text-sm dark:text-gray-100">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h3 class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="mb-3 flex items-center">
                        <div
                            class="flex items-center rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-400"
                            aria-label="due on"
                            role="contentinfo"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                                alt="clock"
                            />
                            <p class="ml-2 dark:text-gray-400">7 Sept, 23:00</p>
                        </div>
                        <button
                            class="ml-2 rounded-full bg-gray-800 p-1 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2  dark:bg-gray-100"
                            aria-label="save in starred items"
                            role="button"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg3.svg"
                                alt="star"
                            />
                        </button>
                    </div>
                    <div class="flex items-center justify-between text-gray-800">
                        <p class="text-sm dark:text-gray-100">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h3 class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
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
                                class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                                alt="read by jason"
                                class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover bg-center">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                                alt="read by Kane"
                                class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                            />
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-gray-800">
                        <p class="text-sm dark:text-gray-100">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col items-start justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h4 class="mb-3 font-bold text-gray-800 dark:text-gray-100">
                        13 things to work on
                    </h4>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque
                        porro quisquam est, quid malum, sensu iudicari
                    </p>
                </div>
                <div class="flex w-full flex-col items-start">
                    <div
                        aria-label="time"
                        role="contentinfo"
                        class="mb-3 flex items-center rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-800 dark:border-gray-700 dark:text-gray-400"
                    >
                        <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg2.svg"
                            alt="clock"
                        />
                        <p class="ml-2">7 Sept, 23:00</p>
                    </div>
                    <div
                        class="flex w-full items-center justify-between text-gray-800 dark:text-gray-100"
                    >
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-300 bg-gray-300 py-5 px-4 dark:border-gray-700 dark:bg-gray-700"
            >
                <div>
                    <h4 class="mb-3 font-bold text-gray-800 dark:text-gray-100">
                        13 things to work on
                    </h4>
                    <p class="text-sm text-gray-800 dark:text-gray-100">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white ring-offset-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-yellow-400 bg-yellow-400 py-5 px-4"
            >
                <div>
                    <h4 class="mb-3 font-bold text-gray-800">13 things to work on</h4>
                    <p class="text-sm text-gray-800">
                        Our interior design experts work with you to create the space that you have
                        been dreaming about.
                    </p>
                </div>
                <div>
                    <div class="flex items-center justify-between text-gray-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white ring-offset-yellow-400 focus:outline-none focus:ring-2 focus:ring-black  focus:ring-offset-2"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h3 class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="mb-3 flex items-center">
                        <button
                            class="rounded-full bg-gray-800 p-1 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2  dark:bg-gray-100"
                            aria-label="save in starred messages"
                            role="button"
                        >
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg3.svg"
                                alt="star"
                            />
                        </button>
                    </div>
                    <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-gray-400 bg-white py-5 px-4 dark:border-gray-700 dark:bg-gray-800"
            >
                <div>
                    <h3 class="w-11/12 font-semibold leading-7 text-gray-800 dark:text-gray-100">
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
                                class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                                alt="read by jason"
                                class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                            />
                        </div>
                        <div class="-ml-2 h-6 w-6 rounded-md bg-cover bg-center">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                                alt="read by Kane"
                                class="h-full w-full overflow-hidden rounded-full border-2 border-white object-cover shadow dark:border-gray-700"
                            />
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-gray-100  dark:text-gray-800"
                            aria-label="edit note"
                            role="button"
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
                class="mb-6 flex h-64 w-full flex-col justify-between rounded-lg border border-red-300 bg-red-300 py-5 px-4"
            >
                <div>
                    <h3 class="w-11/12 font-semibold leading-7 text-gray-800">
                        What does success as a UX designer look like and how to get there
                        systematically
                    </h3>
                </div>
                <div>
                    <div class="flex items-center justify-between text-gray-800">
                        <p class="text-sm">March 28, 2020</p>
                        <button
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white ring-offset-red-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                            aria-label="edit note"
                            role="button"
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
