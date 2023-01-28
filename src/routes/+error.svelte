<script>
    import { page } from '$app/stores';

    const { status } = $page;

    const title = `${status}`;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="tw-py-12 tw-text-center lg:tw-py-24">
    <h2>{title}</h2>
    <h1 class="font-extrabold py-4 text-3xl lg:text-4xl">
        Looks like you've found the doorway to the great nothing
    </h1>
    <p class="py-4 text-base text-black">
        The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the
        link.
    </p>
    <p class="py-2 text-base text-black">
        Sorry about that! Please visit our hompage to get where you need to go.
    </p>
    <div>
        <a href="/" class="cm-button-primary">Go back to Homepage</a>
    </div>
</div>
