<script>
    export let linkOneText = 'Link 1';

    export let linkTwoText = 'Link 2';
</script>

<div class="tw-container tw-flex tw-flex-col tw-items-center">
    <div class="tw-flex tw-w-11/12 tw-flex-col tw-items-center md:tw-w-2/3">
        <h3
            class="tw-mb-8 tw-text-center tw-text-6xl tw-text-accent3 tw-underline tw-decoration-accent1"
        >
            The Freedom to Create the Websites You Want
        </h3>
        <p class="cm-intro tw-mb-12 tw-w-9/12 tw-text-center">
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
    <div class="tw-flex tw-items-center tw-justify-center tw-space-x-8">
        <button class="cm-button-primary">
            {linkOneText}
        </button>
        <button class="cm-button-secondary">
            {linkTwoText}
        </button>
    </div>
</div>
