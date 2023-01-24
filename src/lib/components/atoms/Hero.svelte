<script>
    export let linkOneText = 'Link 1';

    export let linkTwoText = 'Link 2';
</script>

<div>
    <div class="container flex flex-col items-center py-12 sm:py-24">
        <div class="w-11/12 flex-col items-center justify-center sm:mb-10 sm:w-2/3 lg:flex">
            <h1
                class="text-center text-2xl  leading-7 text-mono-800 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl"
            >
                The Freedom to Create the
                <span class="text-primary-700">Websites</span>
                You Want
            </h1>
            <p
                class="mt-5 mb-0 text-center text-sm font-normal text-mono-400 sm:mt-10 sm:text-lg lg:w-10/12"
            >
                A professonal website drives sales. Create a beautiful website to impress and engage
                new customers and establish your business online
            </p>
        </div>
        {#if linkOneText !== '' && linkTwoText !== ''}
            <div class="mt-5 flex items-center justify-center space-x-4">
                <button class="button-primary">
                    {linkOneText}
                </button>
                <button class="button-secondary">
                    {linkTwoText}
                </button>
            </div>
        {/if}
    </div>
</div>
