<template>
  <span class="text-yellow-500">Error</span>
</template>
<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },

  head() {
    return {
      title: 'Sete Três',
    }
  },

  mounted() {
  },
}
</script>
