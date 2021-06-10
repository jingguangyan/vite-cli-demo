<template>
  <div id="app">
    <div class="container">
      <div>{{ count }}</div>
      <button @click="count++">click me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
  background-size: 100%;
}
</style>
