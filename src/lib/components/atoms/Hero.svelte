<script>
    console.log('Hero.svelte');

    export let linkOneText = 'Click Here';
    export let linkOneLink = '';

    export let linkTwoText = 'Click Here';
    export let linkTwoLink = '';
</script>

<div class="tw-container tw-flex tw-flex-col tw-items-center">
    <div class="tw-flex tw-w-11/12 tw-flex-col tw-items-center md:tw-w-2/3">
        <h3
            class="tw-mb-8 tw-text-center tw-text-4xl !tw-leading-tight tw-text-accent3 tw-underline tw-decoration-accent1 tw-decoration-8 dark:tw-text-accent1 dark:tw-decoration-accent3 lg:tw-text-6xl"
        >
            The Freedom to Create the Websites You Want
        </h3>
        <p class="cm-intro tw-mb-0 tw-w-9/12 tw-text-center lg:tw-text-xl">
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
    {#if linkOneLink !== '' || linkTwoLink !== ''}
        <div
            class="tw-mt-12 tw-flex tw-flex-col tw-space-x-0 tw-space-y-4 lg:tw-flex-row lg:tw-items-center lg:tw-justify-center lg:tw-space-x-8 lg:tw-space-y-0"
        >
            {#if linkOneLink}
                <button class="cm-button-primary">
                    {linkOneText}
                </button>
            {/if}
            {#if linkTwoLink}
                <button class="cm-button-secondary">
                    {linkTwoText}
                </button>
            {/if}
        </div>
    {/if}
</div>
