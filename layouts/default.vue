<template>
  <div class="min-h-screen">
    <img src="" data-random-image="/images/1.png /images/2.png /images/3.png /images/4.png" class="w-full h-full absolute object-cover pointer-none top-0" />
    <div class="bottom-0 bg-gradient-to-t from-black w-full h-64 fixed z-10 pointer-none"></div>
    <header class="w-full flex justify-between sticky z-30 top-0 p-8 md:p-16 lg:p-32">
      <nuxt-link to="/">
        <img src="/images/hashima.svg" class="w-24 h-24 md:w-32 md:h-32 shrink-0" alt="Hashima Islands">
      </nuxt-link>
      <nav aria-label="Menu" class="py-2">
        <ul class="flex text-white text-sm space-x-12">
          <Nuxt />
          <li>
            <a href="https://setetres.notion.site/setetres/Hashima-Islands-5b1180fa96414245ae39e2043ca91e26" class="shrink-0 uppercase text-xs tracking-wider border border-white rounded-full px-4 py-2">
              Information
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <footer class="fixed bottom-0 z-20 p-8 md:p-16 lg:p-32 w-full flex flex-col md:flex-row justify-between">
      <h1 class="text-white text-sm max-w-md">DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki.</h1>
      <a href="https://creepycrappy.show" class="shrink-0">
        <img src="/images/toilet-paper.gif" class="w-12 h-12 mt-4 md:mt-0" alt="CreepyCrappyShow">
      </a>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
  mounted() {
    const image = document.querySelector('img[data-random-image]');
    const sources = image.dataset.randomImage.split(" ");
    const randomSource = sources[Math.floor(Math.random() * sources.length)];

    image.setAttribute('src', randomSource);
  },
}
</script>
