<template>
  <footer class="footer absolute-bottom">
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
  components: {},
  methods: {},
  computed: {},
});
</script>

<style lang="sass">
@import '../css/mixins'

.footer
  width: 100vw
  height: 50px
  display: flex
  justify-content: center
  position: absolute

  .container
    display: flex
    justify-self: center
    color: #fff
    align-items: center
.icon
  img
    width: 50px
    height: 50px
    margin: 0 10px
    @include mobile-version
      height: 100%

</style>
