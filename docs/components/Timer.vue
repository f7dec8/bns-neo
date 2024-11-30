<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core';
import { computed, ref } from 'vue';
import Card from './Card.vue';

const duration = ref(0);
const remaining = ref(0);
const running = ref(false);

const classes = computed(() => ({
  'vibration': remaining.value > 0 && remaining.value < 30
}));

const { resume, pause } = useIntervalFn(() => {
  if (remaining.value > 0) {
    remaining.value -= 1;
  } else {
    pause();
    running.value = false
  }
}, 1000, {
  immediate: false
});

function start(value: number): void {
  remaining.value = duration.value = value;
  running.value = true;
  resume();
}

function format(remaining: number): string {
  const mins = Math.floor((remaining % 3600) / 60);
  const secs = remaining % 60;
  return `${mins}분 ${secs}초`;
}
</script>

<template>
  <Card :class="classes">
    <h3 class="!m-0">
      <slot />
    </h3>
    <p>
      {{ format(remaining) }}
    </p>
    <div flex justify-between>
      <button
        btn
        @click="start(120)"
      >
        2분
      </button>
      <button
        btn
        @click="start(300)"
      >
        5분
      </button>
      <button
        btn
        @click="start(480)"
      >
        8분
      </button>
    </div>
  </Card>
</template>