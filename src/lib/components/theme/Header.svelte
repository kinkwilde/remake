<script>
    import Logo from '$lib/components/theme/Logo.svelte';
    import Mobile from '$lib/components/theme/Mobile.svelte';
</script>

<div class="bg-gray-900 px-6 py-9">
    <div class="container flex items-center justify-between">
        <Logo />
        <ul class="mb-0 hidden items-center justify-center space-x-8 pl-0 lg:flex">
            <li>
                <a
                    href="/about"
                    class="text-base text-white no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >About</a
                >
            </li>
            <li>
                <a
                    href="/"
                    class="text-base text-white no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >Furniture</a
                >
            </li>
            <li>
                <a
                    href="/"
                    class="text-base text-white no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >Lookbook</a
                >
            </li>
            <li>
                <a
                    href="/"
                    class="text-base text-white no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >Support</a
                >
            </li>
        </ul>
        <div class="flex items-center justify-end space-x-4 xl:space-x-8">
            <div class="hidden items-center lg:flex">
                <button
                    aria-label="search items"
                    class="w-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                    <img
                        class="rotate-90 transform dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg"
                        alt="search"
                    />
                    <img
                        class="hidden rotate-90 transform dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg"
                        alt="search"
                    />
                </button>
                <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    class="ml-1 hidden rounded border border-transparent px-1 text-sm text-gray-600 focus:border-gray-400 focus:outline-none dark:bg-gray-900 dark:placeholder-gray-300"
                />
            </div>
            <div class="hidden items-center space-x-4 lg:flex xl:space-x-8">
                <button
                    aria-label="view favourites"
                    class="w-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                    <img
                        class=" dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg"
                        alt="favourites"
                    />
                    <img
                        class=" hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg"
                        alt="favourites"
                    />
                </button>
                <button
                    aria-label="go to cart"
                    class="w-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300"
                >
                    <img
                        class=" dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg"
                        alt="bag"
                    />
                    <img
                        class=" hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg"
                        alt="bag"
                    />
                </button>
            </div>
            <div class="flex lg:hidden">
                <button
                    aria-label="show options"
                    class="hidden rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-600 dark:text-white dark:hover:text-gray-300 md:flex"
                >
                    <img
                        class=" dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5.svg"
                        alt="toggler"
                    />
                    <img
                        class=" hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg"
                        alt="toggler"
                    />
                </button>
                <button
                    aria-label="open menu"
                    class="rounded text-black focus:outline-none focus:ring-2 focus:ring-gray-600 dark:text-white dark:hover:text-gray-300 md:hidden"
                >
                    <img
                        class=" dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5.svg"
                        alt="toggler"
                    />
                    <img
                        class=" hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg"
                        alt="toggler"
                    />
                </button>
            </div>
        </div>
    </div>
</div>
<Mobile />
