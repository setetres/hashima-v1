<template>
  <div class="min-h-screen">
    <img src="/images/1.png" class="w-full h-full absolute object-cover pointer-none" />
    <div class="bottom-0 bg-gradient-to-t from-black w-full h-64 fixed z-10 pointer-none"></div>
    <header class="w-full flex justify-between sticky z-30 top-0 p-8 md:p-16 lg:p-32">
      <img src="/images/hashima.svg" class="w-24 h-24 md:w-32 md:h-32 shrink-0">
      <nav aria-label="Menu" class="py-2">
        <ul class="flex text-white text-sm space-x-12">
          <li>
            Coming Soon
          </li>
        </ul>
      </nav>
    </header>
    <footer class="fixed bottom-0 z-20 p-8 md:p-16 lg:p-32 w-full flex flex-col md:flex-row justify-between">
      <p class="text-white text-sm max-w-md">DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki.</p>
      <a href="https://creepycrappy.show" target="_blank" rel="nofollow noopenner" class="shrink-0">
        <img src="/images/toilet-paper.gif" class="w-12 h-12 mt-4 md:mt-0">
      </a>
    </footer>
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
