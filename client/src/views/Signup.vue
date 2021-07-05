<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
const api = 'http://localhost:5000'

export default {
    data() {
        return {
            name: '',
            email: '',
            month: '',
            day: '',
            year: '',
            password: '',
            passwordType: 'password',
            selectedFile: null,
            sortMohthString: ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            reg: /^\S+@\S+\.\S+$/,
            imageUrl: 'https://res.cloudinary.com/dnmlcizxx/image/upload/v1620409537/twitter-clone/user_vxydcy.png',
            checked: true,
            isFileChange: false
        }
    },
    computed:{
        ...mapGetters(['info', 'user', 'step']),
        fullDateOfBirth(){
            let month = this.sortMohthString[this.month]
            return `${month} ${this.day} ${this.year}`
        }
    },
    methods: {
        ...mapActions(['emailCheck', 'login', 'restartStep', 'plusStep','minusStep','goStep5']),
        isEmailValid(){
            if(this.info.status !== false) return (!this.email) ? '' : (this.reg.test(this.email)) ? '' : 'Please enter a valid email.'
        },
        emailControl(){
            let data = {
                email: this.email
            }
            if(!this.isEmailValid()) ( this.emailCheck(data))
        },
        backFirstStep(){
            this.restartStep()
        },
        nextStep(){
          this.plusStep()
        },
        previousStep(){
            this.minusStep()
        },
        goToStep5(){
            this.goStep5()
        },
        step1Button(){
            if(this.name.length > 0 
                && this.email.length > 0 
                && this.info.status !== false 
                && !this.isEmailValid()
                && this.month.length > 0
                && this.day.length > 0
                && this.year.length > 0
            ) this.nextStep()
        },
        register(){
            let user = {
            name: this.name,
            email: this.email,
            birthday: `${this.month},${this.day},${this.year}`,
            }
            axios.post(`${api}/user/register`, user)
            this.goToStep5()
            setTimeout(() => { this.login(user) }, 2000)
        },
        chancePasswordType(){
            this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
        },
        savePassword(){
            let data = {
                email: this.email,
                password: this.password
            }
            axios.post(`${api}/user/add_password`, data)
        },
        skip(){
            this.$router.push('/home')
            this.backFirstStep()
        },
        onFileChange(e) {
            this.selectedFile = e.target.files[0]
            this.imageUrl = URL.createObjectURL(this.selectedFile)
            this.isFileChange = !this.isFileChange
        },
        savePicture(){
            const fd = new FormData()
            fd.append('image', this.selectedFile, this.selectedFile.name)
            axios.post(`${api}/user/change_picture`, fd)
            this.$router.push('/home')
        }
    },
}
</script>

<template>
    <div>
        <nav class="p-2 position-relative">
            <button @click="previousStep" class="btn p-0 mx-3  exit" v-if="step == 2 || step == 3 || step == 4 || step == 5">X</button>
            <svg viewBox="0 0 24 24" class="position-absolute" v-if="step !== 3"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            <h2 class="d-inline-block fs-5 fw-bold position-absolute mt-1 mx-2" v-if="step == 3">Step {{ step }} of 5</h2>
            <button @click="skip" class="btn p-0 link text-decoration-underline fs-6 fw-bold position-absolute end-0 mx-4 mt-1" v-if="step == 6">Skip for now</button>
        </nav>
        <main>
            <section class="container-fluid step1" :class="[step == 1 ? 'd-inline-block' : 'd-none']">
                <div class="my-5 mb-4">
                    <span class="fs-5 fw-bold">Create your account</span>
                </div>
                <div class="col-12">
                    <div class="position-relative">
                        <input type="text" name="name" id="name" maxlength="50" class="rounded-3 w-100 mb-4 px-2 pt-3" v-model="name">
                        <label for="name" class="position-absolute fs-6" :class="[name.length > 0 ? 'label-style' : '']">Name</label>
                        <span class="position-absolute text-muted counter" :class="[name.length > 0 ? 'd-inline-block' : 'd-none']">{{ name.length }} / 50</span>
                    </div>
                    <div class="position-relative">
                        <input type="email" name="email" id="email" class="rounded-3 w-100 px-2 pt-3 mb-1" v-model="email" @change="emailControl" :class="[isEmailValid() || info.status == false ? 'b-red' : '']">
                        <span role="alert" class="px-8 text-danger">{{ isEmailValid() }}</span>
                        <span role="" class="px-8 text-danger" v-if="info.status == false">{{ info.msg }}</span>
                        <label for="email" class="position-absolute fs-6" :class="[email.length > 0 ? 'label-style' : '', isEmailValid() ? 'text-danger' : '', info.status == false ? 'text-danger' : '']">Email</label>
                    </div>
                </div>
                <div class="col-12 mt-5">
                    <span class="fw-bold fs-6">Date of birth</span>
                    <p class="text-muted">This will not be displayed publicly. Even if this account is for a business, pet, or something else, you'll still need to verify your own age.</p>
                </div>
                <div class="col-12 mt-2 d-grid gap-3">
                    <div class="position-relative">
                        <select name="month" id="month" aria-label="Month" v-model="month" class="rounded-3">
                            <option value selected disabled></option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <label for="month" class="position-absolute fs-6 top-5px z-1 label-1">Month</label>
                        <span class="position-absolute z-1">></span>
                    </div>
                    <div class="position-relative">
                        <select name="day" id="day" aria-label="Day" v-model="day" class="rounded-3">
                            <option value disabled selected></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <label for="day" class="position-absolute fs-6 top-5px z-1 label-2">Day</label>
                        <span class="position-absolute z-1">></span>
                    </div>
                    <div class="position-relative">
                        <select name="year" id="year" aria-label="Year" class="year rounded-3" v-model="year">
                            <option value selected disabled></option>
                            <option value="1990">1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                            <option value="1994">1994</option>
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                            <option value="1997">1997</option>
                            <option value="1998">1998</option>
                            <option value="1999">1999</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                        <label for="year" class="position-absolute fs-6 top-5px z-1 label-3">Year</label>
                        <span class="position-absolute z-1">></span>
                    </div>
                </div>
                <div class="col-12">
                    <button @click="nextStep" class="SubmitButton w-100 mt-5">Next</button>
                </div>
            </section>
            <section class="container-fluid step2" :class="[step == 2 ? 'd-inline-block' : 'd-none']">
                <div class="my-3 mb-4">
                    <span class="fs-5 fw-bold">Customize your experience</span>
                </div>
                <div class="mt-5 mb-3">
                    <span class="fs-6 fw-bold">Track where you see Twitter content on the web</span>
                </div>
                <div class="d-flex align-items-center">
                    <p>
                        Twitter uses this data to personalize its experience. This web browsing history will never be stored with your name, email address or phone number.
                    </p>
                    <input type="checkbox" class="p-0" :checked="checked">
                </div>
                <div class="mt-4">
                    <p class="text-muted">For more details on these settings 
                        <a href="https://help.twitter.com/managing-your-account/new-account-settings" class="link">Help center</a> visit
                    </p>
                </div>
                <div class="col-12 buttonBlock">
                    <button @click="step1Button" class="SubmitButton w-100 mt-5">Next</button>
                </div>
            </section>
            <section class="container-fluid step3" :class="[step == 3 ? 'd-inline-block' : 'd-none']">
                <div class="my-3 mb-4">
                    <span class="fs-5 fw-bold">Create your account</span>
                </div>
                <div class="col-12">
                    <div class="inputBlock position-relative rounded-3 w-100 mb-4 px-2 pt-3 cursor-text" @click="backFirstStep">
                        <label class="position-absolute fs-6" :class="[name.length > 0 ? 'label-style' : '']">Name</label>
                        <span class="fs-6 d-inline-block pt-3">{{ name }}</span>
                    </div>
                    <div class="inputBlock position-relative rounded-3 w-100 mb-4 px-2 pt-3 cursor-text" @click="backFirstStep">
                        <label class="position-absolute fs-6" :class="[email.length > 0 ? 'label-style' : '']">Email</label>
                        <span class="fs-6 d-inline-block pt-3">{{ email }}</span>
                    </div>
                    <div class="inputBlock position-relative rounded-3 w-100 mb-4 px-2 pt-3 cursor-text" @click="backFirstStep">
                        <label class="position-absolute fs-6" :class="[email.length > 0 ? 'label-style' : '']">Date of Birth</label>
                        <span class="fs-6 d-inline-block pt-3">{{ fullDateOfBirth }}</span>
                    </div>
                </div>
                <div class="fs-6 mt-5">
                    When you sign up <a class="link" href="https://twitter.com/tos#new">Terms of Service</a> 
                    and <a class="link" href="https://support.twitter.com/articles/20170514">Use of Cookies</a> 
                    including <a class="link" href="https://twitter.com/privacy">Privacy Policy</a> you accept.
                    <span class="link" @click="nextStep">Privacy Options</span> When you determine accordingly, 
                    others can find you by your e-mail or phone number.
                </div>
                <div class="col-12 buttonBlock">
                    <button @click="register" class="SubmitButton w-100 mt-5">Register</button>
                </div>
            </section>
            <section class="container-fluid step4" :class="[step == 4 ? 'd-inline-block' : 'd-none']">
                <div class="my-3 mb-4">
                    <span class="fs-5 fw-bold">Privacy</span>
                </div>
                <div class="d-flex align-items-center">
                    <div>
                        <span style="font-size:.8rem">Let others find me by my email address</span>
                        <span class="d-block text-muted" style="font-size:.7rem">People with your email address can connect with you on Twitter.</span>
                    </div>
                    <input type="checkbox" class="p-0 mx-3" :checked="checked">
                </div>
                <div class="col-12 buttonBlock">
                    <button @click="previousStep" class="SubmitButton w-100 mt-5">OK</button>
                </div>
            </section>
            <section class="container-fluid step5" :class="[step == 5 ? 'd-inline-block' : 'd-none']">
                <div class="my-3 mb-4">
                    <span class="fs-5 fw-bold">You'll need a password</span>
                </div>
                <div class="my-4">
                    <span style="font-size:.8rem" class="text-muted">Make sure it’s 8 characters or more.</span>
                </div>
                <div class="position-relative">
                    <input :type="passwordType" @change="savePassword" name="password" id="password" minlength="8" class="rounded-3 w-100 mb-4 px-2 pt-3" v-model="password">
                    <label for="password" class="position-absolute fs-6" :class="[password.length > 0 ? 'label-style' : '']">Password</label>
                    <button class="btn p-0" style="color:rgba(29,161,242,1)" @click="chancePasswordType" v-if="passwordType == 'password'">Reveal password</button>
                    <button class="btn p-0" style="color:rgba(29,161,242,1)" @click="chancePasswordType" v-if="passwordType == 'text'">Hide password</button>
                </div>
                <div class="col-12 buttonBlock" style="margin-top:300px">
                    <button @click="step1Button" class="SubmitButton w-100 mt-5">Next</button>
                </div>
            </section>
            <section class="container-fluid step6" :class="[step == 6 ? 'd-inline-block' : 'd-none']">
                <div class="my-5 mb-4">
                    <span class="fs-5 fw-bold">Pick a profile picture</span>
                </div>
                <div class="my-4">
                    <span style="font-size:.8rem" class="text-muted">Have a favorite selfie? Upload it now.</span>
                </div>
                <div class="select-block position-relative" style="margin-top:80px">
                    <div class="position-absolute">
                        <input type="file" name="image" id="image" @change="onFileChange">
                    </div>
                    <figure class="position-absolute z-1">
                        <img :src="imageUrl" width="200" height="200" alt="User Picture" class="rounded-circle">
                    </figure>
                </div>
                <div style="margin-top:350px" class="d-flex justify-content-center" :class="[isFileChange == true ? 'd-inline-block' : 'd-none']">
                    <button class="btn p-0 link" @click="savePicture">Save picture and go home page</button>
                </div>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/main.scss';
main, nav {
    @media (min-width: 600px) { 
        width: 600px;
        margin: 0 auto;
    }
}
nav{
    svg{
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        fill: $first-blue;
    }
    .exit{
        font-size: 20px;
        color: $first-blue;
    }
}
main{
    padding: 0 25px;
    input{
        height: 60px;
        outline: none;
        border: 1px solid lightgray;
        font-size: 15px;
        &:focus{
            border: 2px solid $first-blue;
        }
    }
    label{
        left: 8px;
        top: 18px;
        opacity: .7;
        transition: .2s ease;
    }
    input[type=text]:focus ~ label[for=name],
    input[type=email]:focus ~ label[for=email],
    input[name=password]:focus ~ label[for=password]{
        top: 9px;
        font-size: .8rem!important;
        color: $first-blue!important;
    }
    .counter{
        right: 8px;
        top: 10px;
    }
    .col-12 > p {
        font-size: 15px;
    }
    select{
        appearance: none;
        outline: 0;
        box-shadow: none;
        width: 100%;
        height: 60px;
        border: 1px solid lightgray;
        cursor: pointer;
        background: transparent;
        font-size: 15px;
        padding-left: 6px;
        padding-top: 15px ;
        &:focus{
            border: 2px solid $first-blue;
        }
    }
    select:focus + label{
        color: $first-blue;
    }
    select:focus + label + span{
        color: $first-blue!important;
    }
    .d-grid{
        grid-template-columns: 6fr 3fr 3fr;
        span{
            font-size: 20px;
            transform: rotate(90deg);
            color: gray;
            right: 10px;
            top: 15px;
        }
    }
    .SubmitButton{
        height: 40px;
        &:disabled{
            opacity: .5;
        }
    }
    .step2 {
        .buttonBlock{
            margin-top: 250px;
        }
    }
    .step4{
        .buttonBlock{
            margin-top: 400px;
        }
    }
    .d-flex{
        p{
            font-size: 14px;
            padding-right: 10px;   
        }
        input{
            width: 50px;
            height: 50px;
        }
    }
    .text-muted{
        font-size: 14px;
        a{
            font: inherit;
        }
    }
    .step3{
        .inputBlock{
            border: 1px solid lightgray;
            height: 60px;
            span{
                padding-top: 10px!important;
            }
        }
    }
    .select-block{
        div, figure{
            left: 50%;
            transform:translateX(-50%)
        }
        input{
            width: 200px;
            height: 200px;
            cursor: pointer;
            padding-left: 200px;
            opacity: 0;
        }
    }
}
</style>