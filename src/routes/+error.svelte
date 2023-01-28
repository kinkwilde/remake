<script>
    import { page } from '$app/stores';

    const { status } = $page;

    const title = `${status}`;
</script>

<svelte:head>
    <title>{title}</title>
    <meta
        name="description"
        content="The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link."
    />
</svelte:head>

<div class="tw-py-12 lg:tw-py-24">
    <div class="tw-container tw-flex tw-flex-col tw-items-center">
        <div class="tw-flex tw-w-11/12 tw-flex-col tw-items-center tw-text-center md:tw-w-2/3">
            <h1>{title}</h1>
            <h2
                class="tw-mb-8 tw-text-4xl !tw-leading-tight tw-text-accent3 tw-underline tw-decoration-accent1 tw-decoration-8 dark:tw-text-accent1 dark:tw-decoration-accent3 lg:tw-text-6xl"
            >
                Looks like you've found the doorway to the great nothing
            </h2>
            <p class="cm-intro tw-w-9/12 lg:tw-text-xl">
                The content you’re looking for doesn’t exist. Either it was removed, or you mistyped
                the link.
            </p>
            <p class="tw-mb-0">
                Sorry about that! Please visit our hompage to get where you need to go.
            </p>
            <div class="tw-mt-12">
                <a href="/" class="cm-button-primary tw-inline-flex">Go back to Homepage</a>
            </div>
        </div>
    </div>
</div>
