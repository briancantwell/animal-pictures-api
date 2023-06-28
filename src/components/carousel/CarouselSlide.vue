<template>
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            <q-img
      alt="animal pic"
      :src="props.img"
      style="width: 400px;"
      loading
    />
          </div>
        </q-carousel-slide>
</template>

<script setup>

import { defineComponent, ref } from 'vue'

const props = defineProps(['img'])


defineComponent({
  name: 'CarouselSlide',
})



</script>
