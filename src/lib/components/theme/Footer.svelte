<script>
    // console.log('Footer.svelte');

    import Logo from '$lib/components/theme/Logo.svelte';
    import Color from '$lib/components/theme/Color.svelte';
    import Social from '$lib/components/theme/Social.svelte';

    import Center from '$lib/components/atoms/Center.svelte';

    const copyrightDate = new Date().getFullYear();

    // TODO: Fix link styling
    // TODO: Check classes
    // TODO: Use SVGs
</script>

<div class="tw-border-t tw-border-grey tw-bg-black dark:tw-bg-grey">
    <div class="tw-container tw-py-12 lg:tw-py-24">
        <div class="tw-grid lg:tw-grid-cols-2">
            <div class="tw-grid md:tw-grid-cols-2">
                <div>
                    <ul class="tw-mb-0 tw-flex tw-list-none tw-flex-col tw-space-y-2 tw-pl-0">
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/about"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/blog"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/contact"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Terms of service
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="tw-mb-0 tw-flex tw-list-none tw-flex-col tw-space-y-2 tw-pl-0">
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Components
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Changelog
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tw-grid md:tw-grid-cols-2">
                <div>
                    <ul class="tw-mb-0 tw-flex tw-list-none tw-flex-col tw-space-y-2 tw-pl-0">
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a
                                class="cm-focus tw-p-2 tw-text-base tw-uppercase tw-text-white tw-no-underline tw-decoration-4 hover:tw-underline hover:tw-decoration-accent1 dark:hover:tw-decoration-accent3"
                                href="/"
                            >
                                Terms of service
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="tw-mb-6">
                        <Social />
                    </div>
                    <div>
                        <Color />
                        <Center />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tw-border-t tw-border-grey tw-bg-white tw-py-9 dark:tw-bg-black">
        <div class="tw-container tw-flex tw-flex-col tw-items-center">
            <Logo textSize="tw-text-4xl" logoH1="{false}" />
            <p class="tw-mt-4 tw-mb-0 tw-text-xs tw-leading-none md:tw-text-sm">
                Copyright &copy; 2020 - {copyrightDate}. All Rights Reserved.
            </p>
        </div>
    </div>
</div>
