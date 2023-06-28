<template>
	<q-toolbar class="bg-none text-white">
		<q-btn
			push
			dense
			color="secondary"
			text-color="black"
			icon="arrow_left"
			:disable="store.slide === 0"
			size="20px"
			padding="10px"
			@click="previousSlide()"
		/>
		<q-scroll-area
			style="width: 100%; height: 80px; overflow: hidden;"
		>
			<div class="row no-wrap q-gutter-sm ">
				<q-img
					v-for="(url, index) in store.picHistory"
					:key="index"
					:src="url"
					alt=""
					height="75px"
					width="75px"
					:class="{'thumbnail': true, 'active':index === store.slide} "
					ref="thumbImg"
					@click="thumbClick(index)"
				/>
			</div>
		</q-scroll-area>

		<q-btn
			push
			dense
			color="secondary"
			text-color="black"
			icon="arrow_right"
			size="20px"
			padding="10px"
			@click="nextSlide()"
		/>
	</q-toolbar>
</template>

<script setup>
import { useStore } from 'src/stores/store';
import { ref } from 'vue';
const store = useStore()

const thumbImg = ref(null)

const emit = defineEmits(['nextSlide', 'previousSlide', 'thumbClick'])

const previousSlide = (() => {
    emit('previousSlide')
})
const nextSlide = (() => {

  emit('nextSlide')
})

const thumbClick = ((index) => {
    emit('thumbClick', index)
})
</script>

<style lang="sass">

.thumbnail
    opacity: 0.3


    &.active
        opacity: 1
    &.inactive
    position: relative

    &::after
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      opacity: 0.5 // Adjust the overlay opacity as desired
</style>
