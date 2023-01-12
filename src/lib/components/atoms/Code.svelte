<script>
    export let data = {};
</script>

<div data-testid="code" class="mb-4 shadow-2xl">
    <div class="flex rounded-t-lg border border-b border-gray-900 bg-gray-800 py-3 px-4">
        <div
            class="mr-2 flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-red-500"
        >
            x
        </div>
        <div
            class="mr-2 flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-yellow-500"
        >
            -
        </div>
        <div
            class="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-green-500"
        >
            o
        </div>
    </div>
    <code
        class="block max-h-80 overflow-scroll rounded-b-lg bg-gray-700 p-4 text-base text-white shadow-inner"
    >
        {JSON.stringify(data)}
    </code>
</div>
