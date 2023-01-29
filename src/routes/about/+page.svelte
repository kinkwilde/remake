<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('ABOUT DATA', data);

    import Hero from '$lib/components/atoms/Hero.svelte';

    import Instagram from '$lib/components/atoms/Instagram.svelte';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="An example of an about page description" />
</svelte:head>

<div class="tw-space-y-12 tw-py-12 lg:tw-space-y-24 lg:tw-py-24">
    <Hero
        title="The Freedom to Create the Websites You Want"
        text="A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online."
    />

    <div class="tw-container tw-flex tw-flex-col tw-items-center">
        <img
            class="tw-h-auto tw-w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
        />
    </div>

    <div class="flex flex-col justify-between gap-8 pt-12 lg:flex-row tw-container">
        <div class="flex w-full flex-col justify-center lg:w-5/12">
            <h1 class="pb-4 text-3xl font-bold leading-9 text-black lg:text-4xl">Our Story</h1>
            <p class="text-base font-normal leading-6 text-black">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum.In the
                first place we have granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and shall have her
                rights entire, and her liberties inviolate; and we will that it be thus observed;
                which is apparent from
            </p>
        </div>
        <div class="w-full lg:w-8/12 lg:pt-8">
            <div
                class="grid grid-cols-1 rounded-md shadow-lg sm:grid-cols-2 md:grid-cols-4 lg:gap-4"
            >
                <div class="flex flex-col items-center justify-center p-4 pb-6">
                    <img
                        class="hidden md:block"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured"
                    />
                    <img
                        class="block md:hidden"
                        src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                        alt="Alexa featured"
                    />
                    <p class="mt-4 text-xl font-medium leading-5 text-black">Alexa</p>
                </div>
                <div class="flex flex-col items-center justify-center p-4 pb-6">
                    <img
                        class="hidden md:block"
                        src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                        alt="Olivia featured"
                    />
                    <img
                        class="block md:hidden"
                        src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                        alt="Olivia featured"
                    />
                    <p class="mt-4 text-xl font-medium leading-5 text-black">Olivia</p>
                </div>
                <div class="flex flex-col items-center justify-center p-4 pb-6">
                    <img
                        class="hidden md:block"
                        src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                        alt="Liam featued"
                    />
                    <img
                        class="block md:hidden"
                        src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                        alt="Liam featued"
                    />
                    <p class="mt-4 text-xl font-medium leading-5 text-black">Liam</p>
                </div>
                <div class="flex flex-col items-center justify-center p-4 pb-6">
                    <img
                        class="hidden md:block"
                        src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                        alt="Elijah featured"
                    />
                    <img
                        class="block md:hidden"
                        src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                        alt="Elijah featured"
                    />
                    <p class="mt-4 text-xl font-medium leading-5 text-black">Elijah</p>
                </div>
            </div>
        </div>
    </div>
</div>

<Instagram />
