<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            username: '',
            email: '',
            verify_code: '',
            remember_me: true,
            password: '',
            confirm_password: ''
        }
    },
    computed:{
        ...mapGetters(['info', 'user', 'step'])
    },
    methods: {
        ...mapActions(['fetchUsername', 'verifyUserInfo','sendVerifyCode', 'checkVerifyCode', 'resetPassword','restartStep','login']),
        fetchUser(){
            let data = {
                username: this.username
            }
            if(this.username.length > 0) this.fetchUsername(data)
        },
        verifyUser(){
            let data = {
                username: this.username,
                email: this.email
            }
            if(this.email.length > 0) this.verifyUserInfo(data)
        },
        sendMail(){
            let data = {
                email: this.email
            }
            this.sendVerifyCode(data)
        },
        verifyCode(){
            let data = {
                username: this.username,
                verify_code: this.verify_code
            }
            if(this.verify_code.length == 6) this.checkVerifyCode(data)
        },
        altInfo(){
            return `Profile Image for @${this.username}`
        },
        passwordMeeter(){
            if(this.password.length > 0 && this.password.length < 6) return 'Too short'
            if(this.password.length >= 6 && this.password.length < 9) return 'Weak'
            if(this.password.length >= 9 && this.password.length < 14) return 'Good'
            if(this.password.length >= 14 && this.password.length < 19) return 'Strong'
            if(this.password.length >= 19) return 'Very strong'
        },
        changePassword(){
            let data = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            if(this.password.length > 0 && this.confirm_password.length > 0 && this.password == this.confirm_password) this.resetPassword(data)
        },
        goStepOne(){
            this.restartStep()
            this.username = ''
            this.email = ''
        },
        continueButton(){
            this.login(this.user).then(() => this.$router.push('/home'))
            setTimeout(() => { this.restartStep() }, 2000);
            this.username = ''
            this.email = ''
            this.password = ''
            this.confirm_password = ''
            this.verify_code = ''
        }
    },
}
</script>

<template>
    <div>
        <nav class="TopNav container-fluid d-flex align-items-center">
            <div class="icon mx-2 py-2">
                <svg viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            </div>
            <div class="title">Password Reset</div>
        </nav>
        <main role="main">
            <!-- Step 1 -->
            <section class="container-fluid my-3 p-4" :style="[step == 1 ? 'display:block' : 'display:none']">
                <div class="header mb-3">Find your Twitter account</div>
                <p class="my-3">Enter your username</p>
                <form @submit.prevent="fetchUser">
                    <input type="text" name="username" id="username" v-model="username">
                    <span role="alert" class="d-block mt-3">{{ info.msg }}</span>
                    <input type="submit" value="Search" class="SubmitButton mt-4">
                </form>
            </section>
            <!-- Step 2 -->
            <section class="container-fluid my-3 p-4" :style="[step == 2 ? 'display:block' : 'display:none']">
                <div class="header mb-3">Verify your personal information</div>
                <p class="my-3">Enter your email address to continue</p>
                <form @submit.prevent="verifyUser">
                    <input type="text" name="email" id="email" v-model="email" placeholder="Email address" :class="[info.success == false ? 'b-red' : '']">
                    <span role="alert" class="d-inline-block mt-3">{{ info.msg }}</span>
                    <input type="submit" value="Submit" class="SubmitButton mt-4">
                </form>
            </section>
            <!-- Step 3 -->
            <section class="container-fluid my-3 p-4" :style="[step == 3 ? 'display:block' : 'display:none']">
                <div class="header mb-3">How do you want to reset your password?</div>
                <p class="my-3">You can use the information associated with your account.</p>
                <form @submit.prevent="sendMail">
                    <input type="radio" name="radio" id="radio" checked>
                    <label class="d-inline-block mx-2" for="radio" v-if="user">Send an email to <strong>{{ user.email }}</strong> </label>
                    <input type="submit" value="Next" class="SubmitButton mt-4">
                </form>
            </section>
            <!-- Step 4 -->
            <section class="container-fluid my-3 p-4" :style="[step == 4 ? 'display:block' : 'display:none']">
                <div class="header mb-3">Check your email</div>
                <p class="my-3">You'll receive a code to verify here so you can reset your account password</p>
                <form @submit.prevent="verifyCode">
                    <input class="input" type="text" name="verify_code" maxlength="6" v-model="verify_code">
                    <span role="alert" class="d-inline-block mt-3">{{ info.msg }}</span>
                    <input type="submit" value="Verify" class="SubmitButton mt-4">
                    <p class="mt-5">If you don't see the email, check other places it might be, like your junk, spam, social, or other folders</p>
                </form>
                <div class="section-footer pt-3" v-if="step == 4">
                    <button @click="goStepOne" class="btn p-0">Didn’t receive your code?</button>
                </div>
            </section>
            <!-- Step 5 -->
            <section class="container-fluid my-3 p-4" :style="[step == 5 ? 'display:block' : 'display:none']">
                <div class="header mb-3">Reset your password</div>
                <div class="userCard d-flex flex-row align-items-center" role="article" v-if="user">
                    <figure>
                        <img :src="user.profile_img_url" :alt="altInfo()" width="48" height="48">
                    </figure>
                    <div class="mx-3 mb-3">
                        <div class="fullname">{{ user.name }}</div>
                        <div class="screenname">@{{ user.username }}</div>
                    </div>
                </div>
                <p class="my-1">Strong passwords include numbers, letters, and punctuation marks. <a href="https://support.twitter.com/articles/76036-keeping-your-account-secure?ref=password_reset" target="_blank">Learn more</a></p>
                <form @submit.prevent="changePassword" class="position-relative mt-4">
                    <label for="password" class="d-block">Enter your new password</label>
                    <input type="password" name="password" id="password" v-model="password" maxlength="20" class="mb-2" :class="[password.length > 0 && password.length < 6 ? 'b-red' : '']">
                    <div class="strength position-absolute top-0 invisible">
                        <span class="block position-relative d-inline-block rounded-2">
                            <span class="meeter position-absolute left-0 rounded-2" :class="[password.length >= 6 && password.length < 9 ? 'weak' : '', password.length >= 9 && password.length < 14 ? 'good' : '', password.length >= 14 && password.length < 19 ? 'strong' : '', password.length >= 19 ? 'very-strong' : '' ]"></span>
                        </span>
                    </div>
                    <span class="d-block fs-6" :style="[password.length > 0 && password.length < 6 ? 'color:#c33' : '', password.length >= 6 && password.length < 9 ? 'color:#ffcc4d' : '', password.length >= 9 && password.length < 14 ? 'color:#3e721d' : '', password.length >= 14 && password.length < 19 ? 'color:#5c913b' : '', password.length >= 19 ? 'color:#77b255' : '']">{{ passwordMeeter() }}</span>
                    <label for="confirm_password" class="d-block">Enter your password one more time</label>
                    <input type="password" name="confirm_password" id="confirm_password" v-model="confirm_password" maxlength="20" :class="[confirm_password.length > 0 && password !== confirm_password ? 'b-red' : '', password.length < 6 && password == confirm_password && password.length > 0 ? 'b-red' : '']" :style="[password == confirm_password && confirm_password.length >= 9 ? 'border: 2px solid #77b255' : '']">
                    <span class="d-block" :class="[password !== confirm_password && password.length > 0 && confirm_password.length > 0 ? 'is-error' : '', password == confirm_password && password.length > 8 ? 'is-success' : '']">
                        <span style="display:none">Passwords do not match.</span>
                    </span>
                    <div class="d-flex align-items-center mt-2">
                        <input type="checkbox" name="remember_me" id="remember_me" v-model="remember_me">
                        <label for="remember_me" class="mx-2">Remember Me</label>
                    </div>
                    <p class="my-3">Resetting your password will log you out of all your active Twitter sessions.</p>
                    <input type="submit" value="Reset Password" class="SubmitButton mt-4">
                </form>
            </section>
            <!-- Step 6 -->
            <section class="container-fluid my-3 p-4" :style="[step == 6 ? 'display:block' : 'display:none']">
                <div class="header mb-4">You’re all set. You've successfully changed your password.</div>
                <router-link to="/" class="link">Review your applications</router-link>
                <p class="mb-5 mt-1">Take a moment to review the applications that have access to your account. Revoke those you don't recognize or no longer use.</p>
                <button @click="continueButton" class="link mt-5">Continue to Twitter</button>
            </section>
        </main>       
    </div>
</template>

<style scoped lang="scss">
@import '../assets/css/main.scss';
.TopNav{
    box-shadow: 0px 0px 2px 1px lightgrey;
    svg{
        width: 25px;
        fill: $first-blue;
    }
    .title{
        font-size: 16px;
        color: #66757f;
    }
}
section{
    .header{
        font-size: 21px;
        font-weight: 600;
    }
    p{
        font-size: 14px;
        line-height: 18px;
        a{
            text-decoration: none;
            color: $first-blue;
            font: inherit;
        }
    }
    form{
        input[type=text], input[type=password]{
            width: 300px;
            border-radius: 18px;
            padding: 7px 15px 5px;
            border: 1px solid #ccd6dd;
            outline: 0;
            font-size: 16px;
            margin: 5px 10px 5px 0;
            &:focus{
                border-color: $first-blue;
            }
        }
    }
    span[role=alert]{
        font-size: 15px;
        color: red;
        opacity: .7;
    }
    label[for=radio]{
        font-size: 15px;
        strong{
            font-size: inherit;
        }
    }
    .section-footer{
        *{
            font-size: 13px;
            color: #55acee;
            background: transparent;
            border: none;
        }
    }
    .userCard{
        min-width: 250px;
        line-height: 18px;
        .fullname{
            color: #14171a;
            font-size: 14px;
            font-weight: bold;
        }
        .screenname{
            font-size: 14px;
            color: #657786;
        }
    }
    label[for=password], label[for=confirm_password]{
        font-weight: bold;
        font-size: 14px;
    }
    label[for=remember_me]{
        font-size: 14px;
    }
    input[type=password]:focus ~ .strength{
        visibility: visible!important;
    }
    .strength{
        right: 170px;
        margin-top: 38px;
        .block{
            height: 8px;
            width: 65px;
            background: #e1e8ed;
            .meeter{
                height: 100%;
            }
        }
    }
    .weak{
        background: #ffcc4d;
        width: 25%;
    }
    .good{
        background: #3e721d;
        width: 50%;
    }
    .strong{
        background: #5c913b;
        width: 75%;
    }
    .very-strong{
        background: #77b255;
        width: 100%;
    }
    .is-error{
        color: #c33;
        span{
            font-size: 13px;
            margin-top: 10px;
            font-size:14px ;
            display: block!important;
        }
    }
    .is-success{
        color: #77b255;
        &::before{
            content: '\2713';
            font-size: 14px;
        }
    }
}
</style>