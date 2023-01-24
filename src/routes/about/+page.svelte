<script>
    console.log('+page.svelte');

    /** @type {import('./$types').PageData} */
    export let data;

    console.log('ABOUT DATA', data);

    import Instagram from '$lib/components/atoms/Instagram.svelte';
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="An example of an about page description" />
</svelte:head>

<div class="container flex flex-col items-center py-12 sm:py-24">
    <div class="w-11/12 flex-col items-center justify-center sm:mb-10 sm:w-2/3 lg:flex">
        <h1
            class="text-center text-2xl leading-7 text-mono-800 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl"
        >
            The Freedom to Create the
            <span class="text-primary-700">Websites</span>
            You Want
        </h1>
        <p
            class="mt-5 mb-0 text-center text-sm font-normal text-mono-400 sm:mt-10 sm:text-lg lg:w-10/12"
        >
            A professonal website drives sales. Create a beautiful website to impress and engage new
            customers and establish your business online
        </p>
    </div>
</div>

<div class="container flex flex-col items-center">
    <div class="w-full">
        <img
            class="h-full w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
        />
    </div>
</div>

<div class="container flex flex-col justify-between gap-8 pt-12 lg:flex-row">
    <div class="flex w-full flex-col justify-center lg:w-5/12">
        <h1 class="pb-4 text-3xl font-bold leading-9 text-mono-800 lg:text-4xl">Our Story</h1>
        <p class="text-base font-normal leading-6 text-mono-600">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum.In the first place
            we have granted to God, and by this our present charter confirmed for us and our heirs
            forever that the English Church shall be free, and shall have her rights entire, and her
            liberties inviolate; and we will that it be thus observed; which is apparent from
        </p>
    </div>
    <div class="w-full lg:w-8/12 lg:pt-8">
        <div class="grid grid-cols-1 rounded-md shadow-lg sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
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
                <p class="mt-4 text-xl font-medium leading-5 text-mono-800">Alexa</p>
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
                <p class="mt-4 text-xl font-medium leading-5 text-mono-800">Olivia</p>
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
                <p class="mt-4 text-xl font-medium leading-5 text-mono-800">Liam</p>
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
                <p class="mt-4 text-xl font-medium leading-5 text-mono-800">Elijah</p>
            </div>
        </div>
    </div>
</div>

<Instagram />
