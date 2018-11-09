<template>
  <div id="app">
    <router-view/>
    <div class="loading" v-show=" $store.state.loading">
      <mt-spinner type="double-bounce" color="#26a2ff" :size="46"></mt-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.loading {
  z-index:1000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
