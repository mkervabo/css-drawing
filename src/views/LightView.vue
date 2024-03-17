<script setup>
import { ref } from 'vue'
import HomeButton from '@/components/HomeButton.vue';

const lightOn = ref(true)
</script>

<template>
    <div class="w-screen h-screen flex justify-center items-center" :class="{'bg-purple-200': lightOn, 'bg-indigo-800': !lightOn}">
        <HomeButton />
        <div class="relative h-96 w-96 overflow-hidden" :class="{'bg-purple-100': lightOn, 'bg-indigo-400': !lightOn}">
            <div class="absolute bottom-0 rounded-tl-3xl right-0 h-24 w-72" :class="{'bg-red-500': lightOn, 'bg-fuchsia-900': !lightOn}">
                <div class="h-16 w-16 absolute rounded-full left-0 -bottom-5" :class="{'bg-red-300': lightOn, 'bg-fuchsia-800': !lightOn}"></div>
            </div>
            <div class="h-32 w-24 rounded-xl absolute left-5 top-5 border-4 " :class="{'bg-white border-yellow-500': lightOn, 'bg-blue-700 border-blue-900': !lightOn}"></div>
            <div class="relative h-full w-16 m-auto">
                <div class="h-16 w-1 bg-black left-11 absolute bottom-20"></div>
                <div class="h-12 w-16 rounded-t-full absolute bottom-32 left-3" :class="{'bg-yellow-100': lightOn, 'bg-blue-400': !lightOn}"> </div>
                <div class="h-24 w-24 rounded-t-full absolute -bottom-5" :class="{'bg-purple-300': lightOn, 'bg-indigo-600': !lightOn}"></div>
                <div class="h-16 w-16 rounded-t-3xl absolute bottom-12 left-3" :class="{'bg-purple-300': lightOn, 'bg-indigo-600': !lightOn}"></div>
            </div>
            <div class="h-8 w-6 bg-white rounded-md flex items-center justify-center absolute top-56 right-5">
                <div class="border border-neutral-100 rounded-sm h-[80%] w-[80%] cursor-pointer hover:bg-neutral-100" @click="lightOn = !lightOn"></div>
            </div>
        </div>
    </div>
</template>