<script setup>
import HomeButton from '@/components/HomeButton.vue';
</script>

<template>
    <div class="w-screen h-screen bg-blue-300 flex justify-center items-center">
        <HomeButton />
        <div class="relative bg-blue-200 h-96 w-96 overflow-hidden">
            <div class="bg-green-500 w-80 h-16 rounded-full absolute -bottom-8 -left-4 z-[5]"></div>
            <div class="bg-green-600 w-48 h-24 rounded-full absolute -bottom-8 -right-4"></div>
            <div class="w-44 h-72 bg-red-500 rounded-t-full absolute bottom-0 right-1/2 z-10 overflow-hidden">
                <div class="w-10 h-16 bg-red-800 absolute bottom-0 left-3 rounded-t-full"></div>
                <div class="w-10 h-10 rounded-full bg-red-800 absolute top-24 left-16"></div>
                <div class="w-10 h-10 rounded-full bg-red-800 absolute top-24 -left-2"></div>
            </div>
            <div class="h-80 w-80 rounded-full z-20 absolute top-5 left-0 flex items-center justify-center animate-spin-slow">
                <div class="h-3 w-3 bg-black rounded-full"></div>
                <div class="h-36 w-16 bg-yellow-800 absolute top-0 rounded-3xl grid grid-cols-2 gap-1 overflow-hidden">
                    <div v-for="i in 6" class="h-full w-full bg-white"></div>
                </div>
                <div class="h-36 w-16 bg-yellow-800 absolute  bottom-0 rounded-3xl grid grid-cols-2 gap-1 overflow-hidden">
                    <div v-for="i in 6" class="h-full w-full bg-white"></div>
                </div>
                <div class="h-36 w-16 bg-yellow-800 absolute left-10 rotate-90 rounded-3xl grid grid-cols-2 gap-1 overflow-hidden">
                    <div v-for="i in 6" class="h-full w-full bg-white"></div>
                </div>
                <div class="h-36 w-16 bg-yellow-800 absolute right-10 rotate-90 rounded-3xl grid grid-cols-2 gap-1 overflow-hidden">
                    <div v-for="i in 6" class="h-full w-full bg-white"></div>
                </div>
            </div>
        </div>
    </div>
</template>