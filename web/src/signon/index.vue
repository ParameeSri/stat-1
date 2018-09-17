<template>
    <div class="container mainSingon">
      <div class="columns is-centered">
        <section>
            <article class="card is-rounded">
              <div class="card-content">
                <div class="columns">
                    <div class="column">
                        <b-field label="Username">
                            <b-input placeholder="Username" v-model="form.userName" rounded></b-input>
                        </b-field>
                        <b-field label="Password">
                            <b-input placeholder="Password" v-model="form.password" type="Password" rounded></b-input>
                        </b-field>
                        <button  class="button is-primary" @click="doLogin">
                          <span>Login</span>
                        </button>
                        <button  class="button is-defluat">
                          <span>Register</span>
                        </button>
                    </div>
                  </div>
                  <span>{{ strLogin }}</span>
                </div>
              </article>
        </section>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        listMenu: ['login','register'],
        form: {
          userName: '',
          password: ''
        },
        token: '',
        strLogin: ''
      }
    },
    created() {

    },
    methods: {
      async doLogin() {
        let { data } = await axios.post(`http://localhost:5000/api/login`, this.form)
        if (data.Status && data.Status.code === '200') {
          this.token = data.Status.data.token
          localStorage.setItem('stat-token', this.token)
          return this.$router.push('/stat')
        }
        return this.strLogin = 'Invalid login'
      }
    }
  }
</script>