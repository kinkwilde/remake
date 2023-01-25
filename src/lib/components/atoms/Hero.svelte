<script>
    export let linkOneText = 'Link 1';

    export let linkTwoText = 'Link 2';
</script>

<div class="container flex flex-col items-center py-12 sm:py-24">
    <div class="w-11/12 md:flex md:w-2/3 md:flex-col md:items-center md:justify-center">
        <h3 class="mb-0 text-center text-6xl text-accent3 underline decoration-accent1">
            The Freedom to Create the Websites You Want
        </h3>
        <p class="mb-0 text-center lg:w-9/12">
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
    <div class="tw-flex tw-items-center tw-justify-center tw-space-x-4">
        <button class="cm-button-primary">
            {linkOneText}
        </button>
        <button class="cm-button-secondary">
            {linkTwoText}
        </button>
    </div>
</div>
