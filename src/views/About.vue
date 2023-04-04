<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  data() {
    return {
      title: 'This is an about page',
      description: 'Best application',
      team: 'Daniel Correa'
    }
  }
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
      <p>{{ team }}</p>
    </div>
  </div>
</template>