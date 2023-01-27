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
            class="tw-mb-8 tw-text-center tw-text-6xl tw-uppercase tw-leading-tight tw-text-accent3 tw-underline tw-decoration-accent1 tw-decoration-8 dark:tw-text-accent1 dark:tw-decoration-accent3"
        >
            The Freedom to Create the Websites You Want
        </h3>
        <p class="cm-intro tw-mb-0 tw-w-9/12 tw-text-center tw-text-black dark:tw-text-white">
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
    {#if linkOneLink !== '' || linkTwoLink !== ''}
        <div class="tw-mt-12 tw-flex tw-items-center tw-justify-center tw-space-x-8">
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
