<template>
  <Header/>
  <div class="form-container">
    <form @submit="onSubmit"
      :class="screen <= 416 ? 'form-register' : 'form-register absolute-center'"
    >
      <h3 class="title-register">Register</h3>
      <q-input
        filled
        auto-complete="off"
        :model-value="getRegisterForm.name"
        @change="setRegisterForm({ value: $event, key: 'name' })"
        class="q-my-sm text-input"
        label-color="grey-6"
        label="Name"
        input-class="text-input"
        color="deep-purple-12"
        name="name"
        type="text"
        lazy-rules
        :rules="[ val => val && val.length > 2 || 'Enter your name' ]"
      />
      <q-input
        filled
        auto-complete="off"
        :model-value="getRegisterForm.email"
        @change="setRegisterForm({ value: $event, key: 'email' })"
        class="q-my-sm"
        label-color="grey-6"
        label="Email"
        input-class="text-input"
        color="deep-purple-12"
        name="email"
        type="email"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Enter your email' ]"
      />
      <q-input
        filled
        auto-complete="off"
        :model-value="getRegisterForm.password"
        @change="setRegisterForm({ value: $event, key: 'password' })"
        class="q-my-sm"
        label-color="grey-6"
        label="Password"
        input-class="text-input"
        color="deep-purple-12"
        name="password"
        type="password"
        lazy-rules
        :rules="[ val => val && val.length > 5 || 'Enter a password with at least 6 characters' ]"
      />
        <span class="error-message" v-if="getResponseHasError">{{ getResponseMessage }}</span>
        <section class="btn-container">
          <q-btn
            push
            class="button-register"
            :size="'lg'"
            :ripple="{ color: 'pink-2' }"
            color="light-blue-13"
            label="Sign up"
            @click.prevent="onSubmit, Register()"
          />
        <p class="message">Already have an account? Click <a
          class="redirect-to-login"
          href="/"
        >
        here
        </a> to Login.</p>
        </section>
    </form>
    <Loading/>
    <Footer/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Loading from '../components/Loading.vue';

export default defineComponent({
  name: 'Register-vue',
  components: {
    Footer,
    Header,
    Loading,
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
    ...mapActions('UserModule', ['RequestRegister']),
    ...mapMutations('UserModule', ['setRegisterForm']),
    async Register() {
      const response = await this.RequestRegister();
      if (response.token) {
        this.$router.push('/home');
      }
    },
  },
  computed: {
    ...mapGetters('UserModule', ['getRegisterForm', 'getUserInfo', 'getResponseMessage', 'getResponseHasError']),
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
    max-height: 0
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

.title-register
  padding: 20px 0
  @include mobile-version
    font-size: 40px
    padding: 5vh 0 3vh 0
    color: #f5f5f5

.redirect-to-login
  cursor: pointer
  color: #197cf2
  font-weight: bold
  text-decoration: none

.message
  margin: 20px 0
  @include mobile-version
    color: #f5f5f5

.error-message
  color: red
  font-size: 13px
  margin-top: 5px
  @include mobile-version
    font-size: 13px
    padding-left: 10px

.text-input
  @include mobile-version
    color: #f5f5f5
</style>
