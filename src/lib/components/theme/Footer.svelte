<script>
    console.log('Footer.svelte');

    import Logo from '$lib/components/theme/Logo.svelte';
    import Color from '$lib/components/theme/Color.svelte';

    const copyrightDate = new Date().getFullYear();
</script>

<footer id="footer" class="tw-border-t tw-border-grey tw-bg-white dark:tw-bg-black">
    <div
        aria-label="footer"
        class="border-t border-b border-black py-16 focus:outline-none dark:border-black"
    >
        <div class="2xl:px-4 container mx-auto px-4 xl:px-12">
            <div class="lg:flex">
                <div class="mb-16 flex w-full lg:mb-0 lg:w-1/2">
                    <div class="w-full px-6 lg:w-1/2">
                        <ul>
                            <li>
                                <a
                                    class="hover:text-brand dark:hover:text-brand  text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Components</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Templates</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Pricing</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">FAQ</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    href="/"
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    >Documentation</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="w-full px-6 lg:w-1/2">
                        <ul>
                            <li>
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Free components</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Blog</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Changelog</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2">
                    <div class="w-full px-6 lg:w-1/2">
                        <ul>
                            <li>
                                <a
                                    href="/"
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    >Privacy policy</a
                                >
                            </li>
                            <li class="mt-6">
                                <a
                                    class="hover:text-brand dark:hover:text-brand text-xs leading-none text-black focus:underline focus:outline-none dark:text-black lg:text-sm"
                                    href="/">Terms of service</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="flex w-full flex-col justify-between px-6 lg:w-1/2">
                        <div class="mb-6 flex items-center">
                            <a aria-label="Github" href="/">
                                <div
                                    class="hover:text-brand dark:hover:text-brand cursor-pointer text-black dark:text-black"
                                >
                                    <img
                                        class="dark:hidden"
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1.svg"
                                        alt="Github"
                                    />
                                    <img
                                        class="hidden dark:block"
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1dark.svg"
                                        alt="Github"
                                    />
                                </div>
                            </a><a aria-label="Twitter" href="/" class="ml-4">
                                <div class="">
                                    <img
                                        class="dark:hidden"
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2.svg"
                                        alt="Twitter"
                                    />
                                    <img
                                        class="hidden dark:block"
                                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2dark.svg"
                                        alt="Twitter"
                                    />
                                </div>
                            </a>
                        </div>
                        <div class="relative w-36">
                            <select
                                aria-label="select box"
                                class="focus:ring-black0 flex h-12 w-full appearance-none items-center rounded border border-black py-2 pl-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-black dark:bg-black dark:text-black"
                            >
                                <option value="auto">Auto</option>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                            <Color />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center py-16">
        <Logo textSize="text-4xl" logoH1={false} />
        <p
            class="mt-6 text-xs leading-none text-black focus:outline-none dark:text-black lg:text-sm"
        >
            Copyright &copy; 2020 - {copyrightDate}. All Rights Reserved.
        </p>
    </div>
</footer>
