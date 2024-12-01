<script setup lang="ts">
import Timer from './Timer.vue';

const {
  count = 9
} = defineProps<{
  count?: number;
}>();
</script>

<template>
  <div grid grid-cols-3 gap-3>
    <Timer
      v-for="i in count"
      :key="i"
    >
      {{ i }} 채널
    </Timer>
  </div>
</template>