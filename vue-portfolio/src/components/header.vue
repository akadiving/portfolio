<template>
    <nav class="flex items-center justify-between flex-wrap bg-purple-200 dark:bg-gray-900 bg-opacity-75 p-5">
        <div class="flex items-center flex-no-shrink text-black mr-6">
            <span class="font-semibold text-xl tracking-tight dark:text-white">AKO</span>
        </div>

        <div class="flex items-start flex-no-shrink text-black mr-6" >
            <label for="toggleB" class="flex items-center cursor-pointer" >
                <div class="relative">
                    <input type="checkbox" id="toggleB" :checked="isDark" class="sr-only" @click="darkMode">
                    <div class="block bg-gray-600 w-14 h-8 rounded-full dark:bg-white transition ease-out duration-500"></div>
                    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full dark:bg-black transition ease-out duration-500"></div>
                </div>
                <div class="ml-3 text-gray-700 font-medium">
                    <svg  v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white animate-none" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" class="" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-yellow-500 animate-spin-slow" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                    </svg>
                </div>
            </label>
        </div>

        <div class="flex items-center flex-no-shrink mr-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 transition transform dark:text-white ease-out duration-500 hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    props: {
        
    },
    data: () => ({
        hover: false,
    }),
    computed: {
        isDark(){
            return this.$store.getters.getDarkMode
        }
    },
    methods: {
        darkMode(){
            this.$store.dispatch('setDarkMode')
        }
    }
}
</script>

<style scoped>

input:checked ~ .dot {
    transform: translateX(100%);
    background-color: #000000;

}
</style>