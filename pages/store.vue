<template>
  <div>
    <ul style="display: block">
      <li v-for="(item, index) in 10" :key="index" style="display: inline">{{ 'Menu' + index }}</li>

      <h1>{{ $store.state.counter }}</h1>
      <nuxt-link to="/">Go To Homepage</nuxt-link>
    </ul>
  </div>
</template>

<script>
  export default {
    watch: {
      '$store.state.counter': {
        handler(newValue, oldValue){
          console.log(newValue)
        },
        deep: true
      }
    }
  }
</script>
