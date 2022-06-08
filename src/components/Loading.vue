<template>
  <div>
    <q-inner-loading
      :showing="getIsLoading"
      label="Please wait..."
      label-class="text-deep-purple-10"
      label-style="font-size: 1.1em"
      color="deep-purple-10"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Loading-vue',
  computed: {
    ...mapGetters('UserModule', ['getIsLoading']),
  },
});
</script>

<style lang="sass">
@import '../css/mixins'
</style>
