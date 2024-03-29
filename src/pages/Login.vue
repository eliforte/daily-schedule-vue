<template>
  <Header />
  <div class="form-container">
    <form
      @submit="onSubmit"
      :class="screen <= 416 ? 'form-login' : 'form-login absolute-center'"
    >
    <h3 class="title-login">Login</h3>
      <q-input
        filled
        auto-complete="off"
        :model-value="getLoginForm.email"
        @change="setLoginForm({ value: $event, key: 'email' })"
        class="q-my-sm"
        label="Email"
        label-color="grey-6"
        input-class="text-input"
        color="deep-purple-12"
        name="email"
        type="email"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Insira um email' ]"
      />
      <q-input
        filled
        auto-complete="off"
        :model-value="getLoginForm.password"
        @change="setLoginForm({ value: $event, key: 'password' })"
        class="q-my-sm"
        label-color="grey-6"
        label="Password"
        input-class="text-input"
        color="deep-purple-12"
        name="password"
        type="password"
        lazy-rules
        :rules="[ val => val && val.length > 5 || 'Insira uma senha' ]"
      />
      <span class="error-message" v-if="getResponseHasError">{{ getResponseMessage }}</span>
      <section class="btn-container">
        <q-btn
          push
          class="button-login"
          :size="'lg'"
          :ripple="{ color: 'pink-2' }"
          color="light-blue-13"
          label="Sign in"
          @click.prevent="onSubmit, Login()"
        />
        <p class="message">Click <a
          class="redirect-to-register"
          href="/register"
        >
        here
        </a> to register.</p>
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
  name: 'Login-vue',
  components: {
    Footer,
    Header,
    Loading,
  },
  data() {
    return {
      $q: useQuasar(),
      accept: false,
      error: '',
      screen: 0,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
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
    ...mapActions('UserModule', ['IfLoggedIn', 'RequestLogin']),
    ...mapMutations('UserModule', ['setLoginForm']),
    async Login() {
      const response = await this.RequestLogin();
      if (response.token) {
        this.$router.push('/home');
      }
    },
  },
  computed: {
    ...mapGetters(
      'UserModule',
      ['getLoginForm', 'getIsLoggedIn', 'getResponseHasError', 'getResponseMessage', 'getUserInfo'],
    ),
  },
  mounted() {
    this.IfLoggedIn();
    if (this.getIsLoggedIn) {
      this.$router.push('/home');
    }
    this.screen = window.screen.width;
  },
});

</script>

<style lang="sass">
@import '../css/mixins'

.form-container
  height: 100vh
  overflow: hidden
  overflow: hidden

.form-login
  background-color: #E6E6FA
  height: 100vh
  width: 100vw
  max-height: 430px
  max-width: 550px
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
  display: flex
  flex-direction: column
  flex-wrap: wrap
  align-items: center

.button-login
  width: 100%
  height: 40px
  @include mobile-version
    margin: 10px 0 0 0

.title-login
  padding: 20px 0
  @include mobile-version
    padding: 10vh 0 3vh 0
    color: #f5f5f5

.redirect-to-register
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

</style>
