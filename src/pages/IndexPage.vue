<template>
	<q-page class="flex flex-center ">
		<CarouselView ref="carouselViewRef"    />

    <CarouselControl
    @nextSlide="carouselViewRef.nextSlide()"
    @previousSlide="carouselViewRef.previousSlide()"
    @thumbClick="(index) => {carouselViewRef.goToSlide(index)}"
    class='fixed-bottom'
		/>
	</q-page>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import CarouselView from 'src/components/carousel/CarouselView.vue';
import CarouselControl from 'src/components/carousel/CarouselControl.vue'

const carouselViewRef = ref(null)


defineComponent({
  name: 'IndexPage'
})
</script>
