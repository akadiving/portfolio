<template>
  <div :class="isDark ? 'dark ' : ''">
    <div v-if="loading">
      <Preloader />
    </div>
    
    <div v-else>
      <Header />
      <router-view/>
    </div>
    {{isDark}}
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Preloader from '@/components/preloader.vue'

export default {
  components: {
    Header,
    Preloader
  },

  data: () => ({
    loading: true,
    show: false
  }),
  computed: {
    isDark(){
      return this.$store.getters.getDarkMode
    }
  },
  methods: {
    darkMode(){
      this.$store.dispatch('setDarkMode')
    },
    preload(){
      this.loading = true
      this.show = false
      setTimeout(() => {
        this.loading = false
        this.show = true
      }, 2000)
    },
  },

  mounted(){
    this.$store.dispatch("checkMode")
    this.preload()
  }
}
</script>

<style src="./assets/tailwind.css">

</style>