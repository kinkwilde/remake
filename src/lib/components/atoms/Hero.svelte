<script>
    export let heroData = {
        title: 'Default Hero Title',
        content: 'Default Hero Content'
    };

    console.log('Hero Data', heroData);
</script>

<section class="mx-auto max-w-7xl px-4">
    <div class="border-b border-gray-200">
        <div class="max-w-lg space-y-0.5 py-6">
            <h2 class="text-sm font-medium text-gray-900">
                {heroData.title}
            </h2>
            <p class="text-sm text-gray-500">
                {heroData.content}
            </p>
        </div>
    </div>
</section>
