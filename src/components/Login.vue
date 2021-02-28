<template>
    <div class="main">
        <h1 class="main-title mt-5">Subscription Manager</h1>
        <v-card flat class="mx-auto mt-10 justify-content-center p-5" max-width="500" color="secondary">
            <v-form v-model="valid" lazy-validation ref="form" class="justify-content-center">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                ></v-text-field>
                <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4 mt-5"
                @click="login"
                >
                Login
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'Email must be valid',
            ],
            email: null,
            password: null,
            valid: true
        }
    },
    methods: {
        validate(){
            this.$refs.form.validate()
        },
        login(){
            this.validate()
            if(this.valid){
                this.$store.dispatch('login').then((data) => {
                    localStorage.setItem('User', data)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>