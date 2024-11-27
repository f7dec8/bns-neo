<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

const {
  region,
  zone,
  name,
  count = 0,
} = defineProps<{
  region: '제룡림' | '대사막' | '수월평원'
  zone: string;
  name: '주' | '원' | '각' | '정';
  count: number;
}>();

const { site } = useData();

const s = computed(() => `${region}_${zone}_${name}`);
</script>

<template>
  <div grid grid-cols-2 gap-2 mt-4>
    <a
      v-for="i in count"
      :key="i"
      :href="`${site.base}/artifact/${s}_${i}.webp`"
      target="_blank"
    >
      <img
        :alt="`${name}_${i}`"
        :src="`${site.base}/artifact/${s}_${i}.webp`"
        w-100
      />
    </a>
  </div>
</template>