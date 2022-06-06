<template>
  <footer class="footer">
    <div class="container">
      Developed by Elias Forte<a class="icon" href="https://github.com/eliforte/">
        <img src="https://img.icons8.com/nolan/64/github.png"/>
      </a>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer-vue',
});
</script>

<style lang="sass">
@import '../css/mixins'

.footer
  margin-top: 85vh
  width: 100vw
  height: 50px
  display: flex
  justify-content: center

  @include mobile-version
    margin-top: 90vh
    height: 50px
    width: 100vw

  .container
    display: flex
    justify-self: center
    color: #fff
    align-items: center

    @include mobile-version
      font-size: 10px
.icon
  img
    width: 50px
    height: 50px
    margin: 0 10px
    @include mobile-version
      height: 100%
      width: 30px
      height: 30px

</style>
