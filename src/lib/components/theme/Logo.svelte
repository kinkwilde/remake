<script>
    export let logoData = {
        ariaLabel: 'Link back to homepage'
    };

    console.log('Logo Data', logoData);
</script>

<a
    href="/"
    class="inline-flex py-2 text-4xl no-underline hover:text-red-500"
    aria-label={logoData.ariaLabel}
>
    <span class="font-bold">wilde</span>
    <span>.</span>
</a>
