<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters(['info', 'isLoggedIn'])
    },
    methods: {
        ...mapActions(['loginRequest']),
        loginUser(){
            let data = {
                email: this.email,
                password: this.password
            }
            this.loginRequest(data).then(() => {
                if(this.isLoggedIn == true){
                    this.$router.push('/home')
                }
            })
        }
    },
}
</script>

<template>
    <main role="main">
        <div class="container-fluid">
            <div class="row mx-4 mt-4 px-4">
                <div class="col-12 mb-3 my-3">
                    <svg class="mb-4" viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    <h1 role="heading"><span>Login to Twitter</span></h1>
                </div>
                <span role="alert" class="d-none" :class="[info.msg ? 'alert' : '']">{{ info.msg }}</span>
                <div class="col-12 my-3 col-2">
                    <form @submit.prevent="loginUser">
                        <div class="form-group position-relative">
                            <input type="email" name="email" class="form-field d-inline-block mb-4 pt-3 rounded-3" v-model="email">
                            <label for="email" class="form-label position-absolute" :class="[email ? 'top-5' : '']">Email</label>
                            <input type="password" name="password" id="password" class="form-field mb-4 pt-3 rounded-3" v-model="password">
                            <label for="password" class="form-label position-absolute" :class="[password ? 'top-85' : '']">Password</label>
                            <input type="submit" value="Login" class="form-field" :disabled="!email || !password">
                        </div>
                    </form>
                </div>
                <div class="col-12 my-3 col-3">
                    <router-link to="/reset_password" class="link link-1">Did you forget your password?</router-link> .
                    <router-link to="/signup" class="link link-2">Sign up for Twitter</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import '../assets/css/main.scss';

   main{
       height: 100vh;
       .container-fluid{
           max-width: 500px;
            @media (min-width: 500px) { 
                margin: 0 auto;        
            }
        .row{
           .alert{
            display: inline-block!important;
            color: rgb(224, 36, 94);
            font-size: 1rem;
            line-height: 20px;
           }
           svg{
               height: 40px;
               fill: $first-blue;
           }
           h1[role=heading] > span{
               font-size: 31px;
               font-weight: 700;
           }
           .col-2{
               .form-group{
                   .form-field{
                   width: 100%;
                   height: 60px;
                   border: 1px solid lightgray;
                   font-size: 1.5rem;
                   background: transparent;
                }
                .form-label{
                    left: 10px;
                    font-size: 1rem;
                    cursor: text;
                    opacity: .6;
                    transition: .2s;
                }
                label[for=email]{
                    top: 20px;
                }
                label[for=password]{
                    top: 100px;
                }
                input[type=email], input[type=password]{
                    font-size: 1rem;
                    padding-left: 10px;
                }
                input[type=email]:focus{
                    ~ label[for=email]{
                        top: 5px;
                        font-size: .8rem;
                        color: $first-blue;
                        padding-top: 6px;
                    }
                    outline-color: $first-blue;
                }
                input[type=password]:focus{
                    ~ label[for=password]{
                        top: 85px;
                        font-size: .8rem;
                        color: $first-blue;
                        padding-top: 6px;
                    }
                    outline-color: $first-blue;
                }
                input[type=submit]{
                    padding: 0;
                    height: 50px;
                    background-color: $first-blue;
                    border-radius: 50px;
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;

                    &:disabled{
                        opacity: .5;
                        cursor: none;
                    }
                }
            }
           }
           .col-3{
               display: flex;
               justify-content: center;
               margin-top: 10px;
               .link{
                   color: $second-blue;
                   cursor: pointer;
                   font-size: .9rem;
                   @media (max-width: 500px) { 
                        font-size: .8rem;        
                    }
               }
               .link-1{
                   margin-right: 7px;
               }
               .link-2{
                   margin-left: 7px;
               }
           }
        }
    }
    .top-5{
        top: 5px!important;
        font-size: .8rem!important;
        padding-top: 6px!important;
    }
    .top-85{
        top: 85px!important;
        font-size: .8rem!important;
        padding-top: 6px!important;
    }
   } 
</style>