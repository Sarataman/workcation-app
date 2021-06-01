<template>
    <div class="relative">
        <button @click="toggle" type="button" class="hidden sm:block sm:h-8 sm:w-8 sm:overflow-hidden rounded-full border-2 border-gray-600 sm:focus:outline-none sm:focus:border-white xl:border-gray-300">
            <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
        </button>
        <div :class="[isOpen ? 'block' : 'hidden']">
            <button @click="isOpen= false" type="button" class="hidden sm:block sm:fixed sm:opacity-0 inset-0 sm:w-full sm:h-full cursor-default"></button>
            <div class="absolute z-40 right-0">
                <slot name="dropdown"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            buttonHasFocus: false,
            isOpen: false,
        }
    },
    mounted() {
        const onEscape = (e) => {
            if (!this.isOpen || e.key !== 'Escape') {
                return
            }
            this.isOpen = false
        }
        document.addEventListener('keydown', onEscape)
        this.$on('hook:destroyed', () => {
            document.removeEventListener('keydown', onEscape)
        })
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        },
    },
}
</script>

<style>

</style>