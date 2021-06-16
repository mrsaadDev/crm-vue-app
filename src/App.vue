<template>
<component :is="layout">
  <router-view></router-view>
</component>
  <router-view/>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout.vue'
export default {
  computed: {
    layout() {                                                                                                                                                                                                                                                                                                                                                             
     return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">

</style>
