<script>
    export let data = {};
</script>

<div class="container">
    <div class="shadow-2xl">
        <div class="flex rounded-t-lg border border-b border-mono-900 bg-mono-800 py-3 px-4">
            <div class="inline-flex space-x-2">
                <div
                    class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-primary-500"
                >
                    x
                </div>
                <div
                    class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-primary-500"
                >
                    -
                </div>
                <div
                    class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-primary-500"
                >
                    o
                </div>
            </div>
        </div>
        <code
            class="block max-h-80 overflow-scroll rounded-b-lg bg-mono-700 p-4 text-base text-mono-50 shadow-inner"
        >
            {JSON.stringify(data)}
        </code>
    </div>
</div>
