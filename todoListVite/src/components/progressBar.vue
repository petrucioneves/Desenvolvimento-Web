<script setup lang="ts">
defineProps<{
    percentagedone: Number
}>()
</script>
<template>
    <div id="progress" class="progress mt-1 ">
        <div class="progress-bar" role="progressbar" :style="{ width: percentagedone + '%'}" :aria-valuenow="percentagedone" aria-valuemin="0" aria-valuemax="100">{{ percentagedone }}%</div>
    </div>
</template>