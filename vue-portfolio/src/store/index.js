import { createStore } from 'vuex'

export default createStore({
  state: {
    isDark: false
  },
  mutations: {
    darkModeOn(state) {
      state.isDark = true
    },
    darkModeOff(state) {
      state.isDark = false
    },
    darkModeToggle(state){
      state.isDark = !state.isDark
    }
  },
  actions: {
    setDarkMode(state){
      state.commit('darkModeToggle')
      if (!localStorage.getItem('darkmode')){
        localStorage.setItem('darkmode', 'true')
        state.commit('darkModeOn')
        
      } else {
        localStorage.removeItem('darkmode')
        state.commit('darkModeOff')
      }
    },
    checkMode(state){
      if (!localStorage.getItem('darkmode')){
        state.commit('darkModeOff')
      } else {
        state.commit('darkModeOn')
      }
    }
  },
  modules: {
  },
  getters: {
    getDarkMode: state => state.isDark
  }
})
