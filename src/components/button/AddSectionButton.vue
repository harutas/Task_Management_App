<script setup lang="ts">
import { useTaskStore } from '@/stores/task';

const { addSection } = useTaskStore();
</script>

<template>
  <v-btn class="my-5" @click="addSection()"> ADD SECTION </v-btn>
</template>
