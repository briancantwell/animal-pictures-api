<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>
          {{ appName }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
<!--
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >

    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref, onBeforeMount } from 'vue'

const appName = 'Critter Collage'
const leftDrawerOpen = ref('false')

const toggleLeftDrawer = (() => {
  leftDrawerOpen.value = !leftDrawerOpen.value

})

defineComponent({
  name: 'MainLayout',

})
</script>
