<template>
    <body class="flex justify-center items-center bg-white dark:bg-gray-900 h-screen">
        <div class="dark:bg-gray-900 bg-white flex space-x-2 p-5 rounded-full justify-center items-center">
        <img src="../assets/akuma.gif" width="250" />
        </div>
    </body>
</template>

<script>
export default {
    name: 'Preloader',

    props: {
        
    },
    
}
</script>

<style>

#blue-circle{
    animation-delay: 0.1s;
}
#green-circle{
    animation-delay: 0.2s;
}
#red-circle{
    animation-delay: 0.3s;
}

</style>