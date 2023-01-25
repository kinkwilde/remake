<script>
    import { page } from '$app/stores';

    const { status } = $page;

    const title = `${status}`;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="gap-16 py-28 px-6 text-center md:px-24 md:py-20 lg:gap-28 lg:py-32">
    <div class="w-full">
        <h2>{title}</h2>
        <h1 class="font-extrabold py-4 text-3xl text-black lg:text-4xl">
            Looks like you've found the doorway to the great nothing
        </h1>
        <p class="py-4 text-base text-black">
            The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the
            link.
        </p>
        <p class="py-2 text-base text-black">
            Sorry about that! Please visit our hompage to get where you need to go.
        </p>
        <a
            href="/"
            class="my-4 inline-block w-full rounded-md bg-accent2 px-1 py-5 text-black hover:bg-accent2 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-opacity-50 sm:px-16 lg:w-auto"
            >Go back to Homepage</a
        >
    </div>
</div>
