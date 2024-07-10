<script setup>
import HomeButton from '@/components/HomeButton.vue';
</script>

<template>
    <div class="w-screen h-screen bg-blue-100/50 flex justify-center items-center">
        <HomeButton />
        <div class="relative bg-blue-100 h-96 w-96 overflow-hidden rounded-2xl flex items-center justify-center">
            <div class="cap relative">
                <div class="absolute bg-red-500 h-1 w-1 rounded-full left-[3.9rem] -top-1"></div>
                <div class="absolute bg-green-500 h-1 w-1 rounded-full left-[3.9rem] -top-2"></div>
                <div class="absolute bg-yellow-500 h-1 w-1 rounded-full left-[3.9rem] -top-3"></div>
                <div class="absolute h-2 w-16 -top-5 left-8 flex spinner">
                    <div class="w-full bg-blue-500 rounded-full"></div>
                    <div class="w-full bg-blue-500 rounded-full"></div>
                </div>
                <div class="relative base-radius overflow-hidden bg-blue-500 h-20 w-32 z-30">
                    <div class="absolute w-full h-full z-30 top-0 left-0">
                        <div class="realtive w-12 bg-yellow-400 h-[120%] left-0 -top-2 rounded-full m-auto z-30"></div>
                    </div>
                    <div class="absolute w-16 bg-red-400 h-[120%] right-0"></div>
                </div>
                <div class="absolute top-14 w-32 h-16 bg-green-500 rounded-b-[50px] z-20"></div>
            </div>
            <div class="absolute -top-4 -left-8 h-20 w-32 z-20">
                <div class="absolute rounded-full h-16 w-16 bg-white top-2 left-0"></div>
                <div class="absolute rounded-full h-12 w-12 bg-white -top-2 left-12"></div>
                <div class="absolute rounded-full h-16 w-16 bg-white bottom-0 left-6"></div>
                <div class="absolute rounded-full h-16 w-16 bg-white -bottom-2 left-16"></div>
                <div class="absolute rounded-full h-16 w-16 bg-white top-1 -right-3"></div>

            </div>
            <div class="absolute top-8 -right-8 h-20 w-32 z-20">
                <div class="absolute rounded-full h-16 w-16 bg-white top-2 left-0"></div>
                <div class="absolute rounded-full h-12 w-12 bg-white -top-2 left-12"></div>
                <div class="absolute rounded-full h-16 w-16 bg-white bottom-0 left-6"></div>
                <div class="absolute rounded-full h-16 w-16 bg-white -bottom-2 left-16"></div>
                <div class="absolute rounded-full h-16 w-16 bg-white top-1 -right-3"></div>

            </div>
            <div class="absolute bottom-0 left-0 bg-orange-100 w-full h-1/2 z-10"></div>
            <div class="absolute -right-20 top-8 rounded-t-full border border-8 border-red-300 h-96 w-96">
                <div class=" rounded-t-full border border-8  border-orange-300 h-full w-full">
                    <div class=" rounded-t-full border border-8  border-yellow-300 h-full w-full">
                        <div class=" rounded-t-full border border-8  border-green-300 h-full w-full">
                            <div class=" rounded-t-full border border-8  border-blue-300 h-full w-full">
                                <div class=" rounded-t-full border border-8  border-purple-300 h-full w-full">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.base-radius {
    border-radius: 99px 99px 50px 50px;
}

.spinner {
    animation: rotateAnimation 3s ease infinite
}


.cap:hover > .spinner{
    animation: rotateAnimation 0.3s ease infinite
}

@keyframes rotateAnimation {
    0% {
        transform: rotateY(0deg) RotateZ(0deg);
    }

    50% {
        transform: rotateY(180deg) RotateZ(5deg);
    }

    100% {
        transform: rotateY(360deg) RotateZ(0deg);
    }
}
</style>