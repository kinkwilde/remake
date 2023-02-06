<script>
    // console.log('Newsletter.svelte');
</script>

<div class="tw-container">
    <div class="tw-relative tw-flex tw-w-full tw-items-center tw-justify-center">
        <img
            src="https://i.ibb.co/4sYZ8gC/img-2.png"
            alt="dining"
            class="tw-absolute tw-z-0 tw-hidden tw-h-full tw-w-full xl:tw-block"
        />
        <img
            src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            class="tw-absolute tw-z-0 tw-hidden tw-h-full tw-w-full sm:tw-block xl:tw-hidden"
        />
        <img
            src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
            alt="dining"
            class="tw-absolute tw-z-0 tw-h-full tw-w-full sm:tw-hidden"
        />
        <div
            class="tw-relative tw-z-40 tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-80 tw-py-10 tw-px-4 md:tw-my-16 md:tw-mx-24 md:tw-px-12 lg:tw-py-16"
        >
            <h1 class="tw-text-center tw-text-4xl tw-font-semi tw-leading-9 tw-text-black">
                Don’t miss out!
            </h1>
            <p class="tw-mt-6 tw-text-center tw-text-base tw-leading-normal tw-text-black">
                Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a
                week on every friday so subscribe to get latest news and updates.
            </p>
            <div
                class="tw-mt-12 tw-flex tw-w-full tw-flex-col tw-items-center tw-space-y-4 tw-border-white sm:tw-flex-row sm:tw-space-y-0 sm:tw-border lg:tw-w-5/12"
            >
                <input
                    class="tw-w-full tw-border tw-border-white tw-bg-transparent tw-p-4 tw-text-base tw-font-medium tw-leading-none tw-text-black tw-placeholder-white focus:tw-outline-none sm:tw-border-transparent"
                    placeholder="Email Address"
                />
                <button
                    class="tw-w-full tw-border tw-border-white tw-bg-black tw-py-4 tw-px-6 hover:tw-bg-opacity-75 focus:tw-outline-none focus:tw-ring focus:tw-ring-offset-2 sm:tw-w-auto sm:tw-border-transparent"
                >
                    Subscribe
                </button>
            </div>
        </div>
    </div>
</div>
