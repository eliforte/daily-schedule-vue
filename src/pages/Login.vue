<template>
  <div class="form-container">
    <form
      @submit="onSubmit"
      :class="screen <= 416 ? 'form-login' : 'form-login absolute-center'"
    >
    <h3 class="title">Login</h3>
      <q-input
        filled
        :model-value="getLoginForm.email"
        @change="setLoginForm({ value: $event, key: 'email' })"
        class="q-my-sm"
        label="Email"
        name="email"
        type="email"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Insira um email' ]"
      />
      <q-input
        filled
        :model-value="getLoginForm.password"
        @change="setLoginForm({ value: $event, key: 'password' })"
        class="q-my-sm"
        label="Password"
        name="password"
        type="password"
        lazy-rules
        :rules="[ val => val && val.length > 5 || 'Insira uma senha' ]"
      />
      <section class="btn-container">
        <q-btn
          push
          class="button-login"
          :size="'lg'"
          :ripple="{ color: 'pink-2' }"
          color="light-blue-13"
          label="Sign in"
          @click="onSubmit, Login()"
        />
        <p class="message">Click <spam
          class="redirect-to-register"
          @click="$router.push('/register')"
        >
        here
        </spam> to register.</p>
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
  name: 'Login-vue',
  components: {
    Footer,
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
    ...mapActions('UserModule', ['IfLoggedIn', 'Login']),
    ...mapMutations('UserModule', ['setLoginForm']),
  },
  computed: {
    ...mapGetters('UserModule', ['getLoginForm', 'getIsLoggedIn']),
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
    max-height: 100%
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

.title
  padding: 20px 0
  @include mobile-version
    padding: 10vh 0 3vh 0

.redirect-to-register
  cursor: pointer
  color: #197cf2
  font-weight: bold

.message
  margin: 20px 0

</style>
