<script>
    export let data = {};
</script>

<div class="container">
    <div class="shadow-2xl">
        <div class="flex rounded-t-lg border border-b border-gray-900 bg-gray-800 py-3 px-4">
            <div class="inline-flex space-x-2">
                <div
                    class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-red-500"
                >
                    x
                </div>
                <div
                    class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-yellow-500"
                >
                    -
                </div>
                <div
                    class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-green-500"
                >
                    o
                </div>
            </div>
        </div>
        <code
            class="block max-h-80 overflow-scroll rounded-b-lg bg-gray-700 p-4 text-base text-white shadow-inner"
        >
            {JSON.stringify(data)}
        </code>
    </div>
</div>
