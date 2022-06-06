<template>
  <header class="header-container">
    <h3 class="title-header">Daily Schedule</h3>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header-vue',
});
</script>

<style lang="sass">
@import '../css/mixins'

.header-container
  display: flex
  align-items: center
  background: rgba(17,22,125,0.5)
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4)

  @include mobile-version
    background: rgba(17,22,125,0.1)

.title-header
  font-family: 'Dancing Script', cursive
  font-size: 55px
  font-weight: bold
  color: #fff
  text-align: center
  margin: 0 0 0 40px
  padding: 15px 0px

  @include mobile-version
    font-size: 20px
    margin: 5px 0 0 10px
    padding: 0

</style>
