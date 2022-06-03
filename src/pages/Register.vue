<template>
  <div class="form-container">
    <Dialog />
    <form @submit="onSubmit"
      :class="screen <= 416 ? 'form-register' : 'form-register fixed-center'"
    >
      <h3 class="title">Register</h3>
      <q-input
        filled
        :model-value="getRegisterForm.name"
        @change="setRegisterForm({ value: $event, prop: 'name' })"
        class="q-my-sm"
        label="Name"
        name="name"
        type="text"
        lazy-rules
        :rules="[ val => val && val.length > 2 || 'Enter your name' ]"
      />
      <q-input
        filled
        :model-value="getRegisterForm.email"
        @change="setRegisterForm({ value: $event, prop: 'email' })"
        class="q-my-sm"
        label="Email"
        name="email"
        type="email"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Enter your email' ]"
      />
      <q-input
        filled
        :model-value="getRegisterForm.password"
        @change="setRegisterForm({ value: $event, prop: 'password' })"
        class="q-my-sm"
        label="Password"
        name="password"
        type="password"
        lazy-rules
        :rules="[ val => val && val.length > 5 || 'Enter a password with at least 6 characters' ]"
      />
        <section class="btn-container">
          <q-btn
            push
            class="button-register"
            :size="'lg'"
            :ripple="{ color: 'pink-2' }"
            color="light-blue-13"
            label="Sign up"
            @click.prevent="onSubmit"
          />
        <p class="message">Already have an account? Click <spam
          class="redirect-to-login"
          @click="$router.push('/')"
        >
        here
        </spam> to Login.</p>
        </section>
    </form>
    <Footer/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Footer from '../components/Footer.vue';

export default defineComponent({
  name: 'Register-vue',
  components: {
    Footer,
  },
  data() {
    return {
      $q: useQuasar(),
      accept: false,
      maxHeigth: '',
      screen: 0,
    };
  },
  methods: {
    onSubmit() {
      if (!this.accept) {
        this.$q.notify({
          color: 'purple-12',
          textColor: 'white',
          icon: 'warning',
        });
      } else {
        this.$q.notify({
          color: 'green-3',
          textColor: 'white',
          icon: 'cloud_done',
        });
      }
    },
    ...mapActions('UserModule', ['Register']),
    ...mapMutations('UserModule', ['setRegisterForm']),
  },
  computed: {
    ...mapGetters('UserModule', ['getRegisterForm', 'getUserInfo']),
  },
  mounted() {
    this.screen = window.screen.width;
  },
});
</script>

<style lang="sass">
@import '../css/mixins'

.form-container
  height: 100vh
  overflow: hidden

.form-register
  background-color: #E6E6FA
  height: 100vh
  width: 100vw
  max-width: 550px
  max-height: 520px
  border-radius: 10px
  margin: auto
  padding: 20px 20px
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5)
  @include mobile-version
    max-height: 100%
    padding: 0 10px
    background-color: rgba(230,230,250,0.6306897759103641)
    border-radius: 0px
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2)

.btn-container
  margin-top: 25px
  display: flex
  flex-direction: column
  align-items: center
  width: 100%

.button-register
  width: 100%
  height: 40px
  @include mobile-version
    margin: 10px 0 0 0

.title
  padding: 20px 0 0px 0
  @include mobile-version
    padding: 10vh 0 3vh 0

.redirect-to-login
  cursor: pointer
  color: #197cf2
  font-weight: bold

.message
  margin: 20px 0

</style>
