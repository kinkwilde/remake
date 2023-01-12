<script>
    import Logo from '$lib/components/theme/Logo.svelte';
</script>

<header>
    <div class="mx-auto flex max-w-7xl items-center justify-between p-4">
        <nav class="hidden items-center space-x-1 text-sm font-medium text-gray-800 md:flex">
            <a href="/about" class="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
                >About</a
            >
            <a href="/" class="rounded bg-white px-3 py-2 transition hover:bg-gray-100">Pricing</a>
        </nav>
        <button class="flex appearance-none p-1 text-gray-500 md:hidden"
            ><svg class="h-6 w-6" fill="currentcolor" viewBox="0 0 256 256"
                ><line
                    x1="40"
                    y1="128"
                    x2="216"
                    y2="128"
                    fill="none"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                /><line
                    x1="40"
                    y1="64"
                    x2="216"
                    y2="64"
                    fill="none"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                /><line
                    x1="40"
                    y1="192"
                    x2="216"
                    y2="192"
                    fill="none"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                /></svg
            ></button
        >
        <Logo />
        <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
            <a
                href="/"
                class="hidden rounded bg-white px-3 py-2 transition hover:bg-gray-100 sm:inline"
                >Login</a
            >
            <a
                href="/"
                class="rounded bg-rose-600 px-3 py-2 text-white transition hover:bg-rose-700"
                >Sign Up</a
            >
        </nav>
    </div>
</header>
