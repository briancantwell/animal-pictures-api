<template>
   <div class="absolute-full "  >
	<q-carousel
		animated
		v-model="slide"
    ref="carousel"
		infinite
		:autoplay="autoplay"
		transition-prev="slide-right"
		transition-next="slide-left"
    class='bg-primary '
    style='height: 100%; overflow: hidden;'
    
	>
		<q-carousel-slide
			v-for="(url, index) in store.fetchPics"
			:key="index"
			:name="index"
      class=''
		>
    <div class='absolute-top fixed-center' style='max-width: 80%;'>


      <q-img
      :src="url"
      spinner-color="primary"
      spinner-size="82px"
      class=''        
      fit='scale-down'
      style='max-height: 90%;'
			/>
    </div>
      <q-inner-loading :showing="visible">
        <q-spinner-ios size="50px" color="primary" />
      </q-inner-loading>
		</q-carousel-slide>
   
	</q-carousel>
</div>
</template>

<script setup>
import { defineComponent, ref, defineExpose } from 'vue'
import { useStore } from 'stores/store'
import {useQuasar, QSpinnerIos } from 'quasar'

const $q = useQuasar()
const store = useStore()
const carousel = ref()
const visible = ref(false)
store.getRandomPic()
const slide = ref(0)
const autoplay = ref(false)

const nextSlide = ref((async () => {
  visible.value = true
  if(!store.picHistory[slide.value+1]){
    await store.getRandomPic()
  }
    carousel.value.next()
    store.slide = slide.value
    visible.value = false
    console.log(carousel.value)
}))
const previousSlide = ref((async () => {
  visible.value = true
  carousel.value.previous()
  store.slide = slide.value
  visible.value = false
}))
const goToSlide = ref((async (index) => {
  visible.value = true
  carousel.value.goTo(index)
  store.slide = slide.value
  visible.value = false
}))

defineExpose({
  nextSlide,
  previousSlide,
  goToSlide,
})

defineComponent({
  name: 'CarouselView',
})
</script>

<style lang='sass'>

.q-panel
  overflow: hidden



</style>
