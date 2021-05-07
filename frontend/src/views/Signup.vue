<script>
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
          sortMohthString: ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          reg: /^\S+@\S+\.\S+$/,
          step: 5,
          checked: true
      }
  },
  methods: {
    isEmailValid(){
        return (!this.email) ? '' : (this.reg.test(this.email)) ? '' : 'error-email'
    },
    passLength(){
        return this.password.length
    },
    chancePasswordType(){
        this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
    }
  },
}
</script>

<template>
    <main role="main">
        <div class="cont-1">
            <button class="back" @click="step--" v-if="step > 1 && step !== 5 && step !== 6">X</button>
            <i class="fab fa-twitter" v-if="step !== 3"></i>
            <h2 aria-level="2" role="heading" v-if="step == 3">
                <span>Step 3 of 5</span>
            </h2>
            <button class="link" @click="step++" v-if="step < 3" :disabled="!name || !email || !month || !day || !year ">Next</button>
            <button class="link" @click="step++" v-if="step == 5" :disabled="passLength() < 8">Next</button>
            <button class="link" @click="step = 3" v-if="step == 4">Done</button>
            <router-link to="/home" class="link skip" @click="step = 7" v-if="step == 6">Skip for now</router-link>
        </div>
        <div class="cont-2" v-if="step == 1">
            <div class="heading">
                <span>Create your account</span>
            </div>
            <form>
                <div class="form-group">
                    <input type="text" name="name" id="name" maxlength="50" v-model="name">
                    <span class="max">{{ name.length }}/50</span>
                    <label for="name" :class="[name ? 'top-10' : '', !name ? 'error-name' : '']">Name</label>
                    <input type="email" name="email" id="email" v-model="email" :class="[isEmailValid()]">
                    <span class="error-msg">Please enter a valid email.</span>
                    <label for="email" :class="[email ? 'top-90' : '']">Email</label>
                </div>
            </form>
            <div class="day" aria-label="Day of birtday">
                <span class="day-heading">Date of birth</span>
                <span class="day-p">
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </span>
                <div class="day-group" role="group">
                    <div class="item-1">
                        <svg viewBox="0 0 24 24" class="arrow-1">
                            <g>
                                <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 
                                    0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 
                                    0-1.413z">
                                </path>
                            </g>
                        </svg>
                        <label for="month">Month</label>
                        <select name="month" id="month" aria-label="Month" v-model="month">
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
                    </div>
                    <div class="item-2">
                        <svg viewBox="0 0 24 24" class="arrow-2">
                            <g>
                                <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 
                                    0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 
                                    0-1.413z">
                                </path>
                            </g>
                        </svg>
                        <label for="day">Day</label>
                        <select name="day" id="day" aria-label="Day" v-model="day">
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
                    </div>
                    <div class="item-3">
                        <svg viewBox="0 0 24 24" class="arrow-3">
                            <g>
                                <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 
                                    0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 
                                    0-1.413z">
                                </path>
                            </g>
                        </svg>
                        <label for="year">Year</label>
                        <select name="year" id="year" aria-label="Year" class="year" v-model="year">
                            <option value selected disabled></option>
                            <option value="1940">1940</option>
                            <option value="1941">1941</option>
                            <option value="1942">1942</option>
                            <option value="1943">1943</option>
                            <option value="1944">1944</option>
                            <option value="1945">1945</option>
                            <option value="1946">1946</option>
                            <option value="1947">1947</option>
                            <option value="1948">1948</option>
                            <option value="1949">1949</option>
                            <option value="1950">1950</option>
                            <option value="1951">1951</option>
                            <option value="1952">1952</option>
                            <option value="1953">1953</option>
                            <option value="1954">1954</option>
                            <option value="1955">1955</option>
                            <option value="1956">1956</option>
                            <option value="1957">1957</option>
                            <option value="1958">1958</option>
                            <option value="1959">1959</option>
                            <option value="1960">1960</option>
                            <option value="1961">1961</option>
                            <option value="1962">1962</option>
                            <option value="1963">1963</option>
                            <option value="1964">1964</option>
                            <option value="1965">1965</option>
                            <option value="1966">1966</option>
                            <option value="1967">1967</option>
                            <option value="1968">1968</option>
                            <option value="1969">1969</option>
                            <option value="1970">1970</option>
                            <option value="1971">1971</option>
                            <option value="1972">1972</option>
                            <option value="1973">1973</option>
                            <option value="1974">1974</option>
                            <option value="1975">1975</option>
                            <option value="1976">1976</option>
                            <option value="1977">1977</option>
                            <option value="1978">1978</option>
                            <option value="1979">1979</option>
                            <option value="1980">1980</option>
                            <option value="1981">1981</option>
                            <option value="1982">1982</option>
                            <option value="1983">1983</option>
                            <option value="1984">1984</option>
                            <option value="1985">1985</option>
                            <option value="1986">1986</option>
                            <option value="1987">1987</option>
                            <option value="1988">1988</option>
                            <option value="1989">1989</option>
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
                    </div>
                </div>
            </div>
        </div>
        <div class="cont-3" v-if="step == 2">
            <div class="col-1">
                <span>Customize your experience</span>
            </div>
            <div class="col-2">
                <span>Track where you see Twitter content across the web</span>
            </div>
            <div class="col-3">
                <div class="row-1">
                    <span>
                        Twitter uses this data to personalize your experience. 
                        This web browsing history will never be stored with your name, email, or phone number.
                    </span>
                </div>
                <div class="row-2">
                    <input type="checkbox" v-model="checked">
                </div>   
            </div>
            <div class="col-4">
                <span>For more details about these settings, visit the </span>
                <a href="https://help.twitter.com/managing-your-account/new-account-settings" class="link" rel="noopener noreferrer" target="_blank" role="link"><span>Help Center</span>.</a>
            </div>
        </div>
        <div class="cont-4" v-if="step == 3">
            <div class="col-1">
                <span>Create your account</span>
            </div>
            <div class="col-2">
                <button class="row-1" @click="step = 1">
                    <label>Name</label>
                    <span>{{ name }}</span>
                </button>
                <button class="row-2" @click="step = 1">
                    <label>Email</label>
                    <span>{{ email }}</span>
                </button>
                <button class="row-3" @click="step = 1">
                    <label>Birth date</label>
                    <span>{{ sortMohthString[month] }} {{ day }}, {{ year }}</span>
                </button>
            </div>
            <div class="col-3">
                <span>By signing up, you agree to the</span>
                <a href="https://twitter.com/tos" target="_blank" class="link"> Terms of Service </a>
                <span>and</span>
                <a href="https://twitter.com/en/privacy" target="_blank" class="link"> Privacy Policy </a>,
                <span>including </span>
                <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank" class="link">Cookie Use</a>.
                <span>Others will be able to find you by email or phone number when provided. </span>
                <button class="link" @click="step = 4"> Privacy Options</button>
            </div>
            <div class="col-4" role="button">
                <button @click="step = 5">Sign up</button>
            </div>
        </div>
        <div class="cont-5" v-if="step == 4">
            <div class="col-1">
                <span class="title">Privacy</span>
            </div>
            <div class="col-2">
                <div>
                    <label>Let others find me by my email address</label>
                    <span>People who have your email address will be able to connect with you on Twitter.</span>
                </div>
                <div class="input">
                    <input type="checkbox" checked>
                </div>
            </div>
        </div>
        <div class="cont-6" v-if="step == 5">
            <div class="col-1">
                <span>You'll need a password</span>
            </div>
            <div class="col-2">
                <span>Make sure it’s 8 characters or more.</span>
            </div>
            <div class="col-3">
                <input :type="passwordType" name="password" id="password" minlength="8" v-model="password">
                <label for="password" :class="[password ? 'top-30' : '']">Password</label>
                <button @click="chancePasswordType" v-if="passwordType == 'password'">Reveal password</button>
                <button @click="chancePasswordType" v-if="passwordType == 'text'">Hide password</button>
            </div>
        </div>
        <div class="cont-7" v-if="step == 6">
            <div class="col-1">
                <span>Pick a profile picture</span>
            </div>
            <div class="col-2">
                <span>Have a favorite selfie? Upload it now.</span>
            </div>
            <div class="col-3">
                <figure>
                    <img src="https://res.cloudinary.com/dnmlcizxx/image/upload/v1620409537/twitter-clone/user_vxydcy.png" width="200" height="200" alt="User Picture">
                </figure>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main{
        display: flex;
        flex-direction: column;

        .top-10{
            top: 10px!important;
            font-size: 1.2rem!important;
        }
        .top-90{
            top:90px!important;
            font-size: 1.2rem!important;
        }
        .top-30{
            top: 20px!important;
            font-size: 1.3rem!important;
        }
        input{
            width: 100%;
            height: 60px;
            margin-bottom: 20px;
            border: 1px solid lightgray;
            border-radius: 5px;
            padding-left:  10px;
            font-size: 1.5rem;
            background: transparent;
            padding-top: 20px;
        }
        label{
            position: absolute;
            left: 10px;
            font-size: 1.5rem;
            cursor: text;
            opacity: .6;
            transition: .2s;
        }
        .cont-1{
            position: fixed;
            width: 100%;
            height: 50px;
            padding: 10px 15px;
        i{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 3rem;
        }
        .link{
            position: absolute;
            right: 15px;
            display: flex;
            align-items: center;
            background-color: rgb(29, 161, 242);
            min-height: 30px;
            padding: 1px 14px;
            color: white;
            font-weight: 700;
            font-size: 1.2rem;
            border-radius: 25px;
            cursor: pointer;
            border: none;
            &:disabled{
                opacity: .5;
                cursor: none;
            }
        }
        .skip{
            color: #1DA1F2;
            background: none;
            font-size: 1.4rem;
            font-weight: 700;

            &:hover{
                background-color: rgba(29, 161, 242, 0.1);
            }
        }
        .back{
            position: absolute;
            background: none;
            border: none;
            font-size: 1.5rem;
            top: 50%;
            transform: translateY(-50%);
            color: #1DA1F2;
            font-weight: 500;
            cursor: pointer;
        }
        
        h2{
            font-weight: 700;
            line-height: 23px;
            font-size: 2rem;
            color: rgb(15, 20, 25);
            margin-left: 50px;
            margin-top: 5px;
            span{
                font: inherit;
                color: inherit;
            }
        }
        }
        .error-email{
            outline-color: #E0245E!important;
            border-color: #E0245E!important;
            ~label[for=email]{
                color: #E0245E;
            }
            ~ .error-msg{
                display: inline-block!important;
                color: #E0245E;
                font-size: 1.1rem;
                margin-left: 10px;
            }
            &:focus ~ label[for=email]{
                color: #E0245E!important;
            }
        }
        .cont-2{
            margin: 20px 30px;
            
            .heading{
                margin-top: 50px;
                margin-bottom: 20px;
                span{
                    line-height: 27px;
                    font-size: 2rem;
                    font-weight: 600;
                    
                }
            }
            
            .form-group{
                position: relative;
                .max{
                    position: absolute;
                    right: 15px;
                    font-size: 1.3rem;
                    opacity: .6;
                    margin-top: 10px;
                    display: none;
                }
                label[for=name]{
                    top: 20px;
                }
                label[for=email]{
                    top: 100px;
                }
                input[type=text]{
                    &:focus ~ label[for=name]{
                        top: 10px;
                        font-size: 1.3rem;
                        color: #1DA1F2;
                    }
                    &:focus ~ .max{
                        display: inline-block;
                    }
                    outline-color: #1DA1F2;
                }
                input[type=email]{
                    &:focus ~ label[for=email]{
                        top: 90px;
                        font-size: 1.3rem;
                        color: #1DA1F2;
                        
                    }
                    outline-color: #1DA1F2;
                    margin-bottom: 5px ;
                }
                .error-msg{
                    display: none;
                }
            }
            .day{
                margin-top: 50px;
                .day-heading{
                    display: block;
                    font-size: 1.4rem;
                    font-weight: 700;
                    line-height: 22px;
                }
                .day-p{
                    display: block;
                    font-size: 1.2rem;
                    font-weight: 400;
                    line-height: 19px;
                    color: rgb(91, 112, 131);
                    margin-bottom: 11px;
                }
                .day-group{
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    gap: 10px;
                    select{
                        appearance: none;
                        outline: 0;
                        box-shadow: none;
                        width: 100%;
                        height: 60px;
                        border: 1px solid lightgray;
                        border-radius: 5px;
                        background: transparent;
                        cursor: pointer;
                        position: relative;
                        font-size: 1.6rem;
                        padding-left: 10px;
                        padding-top: 15px;
                        &:focus{
                            border: 2px solid #1DA1F2;
                        }
                    }
                    label{
                        position: absolute;
                        margin-top: 10px;
                        font-size: 1.3rem;
                    }
                    .item-1, .item-2, .item-3{
                        position: relative;
                        .arrow-1, .arrow-2, .arrow-3{
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            transform: translateY(-50%);
                            height: 2.5rem;
                            fill: rgb(91, 112, 131);
                        }
                    }
                }
            }
        }
        .cont-3{
            margin: 0 30px; 
            .col-1{
                font-size: 2rem;
                line-height: 27px;
                margin-top: 50px;
                margin-bottom: 11px;
                font-weight: 700;
                color: rgb(15, 20, 25);
                span{
                    font: inherit;
                    line-height: inherit;
                    color: inherit;
                }
            }
            .col-2{
                margin-top: 30px;
                font-size: 1.6rem;
                line-height: 23px;
                font-weight: 700;
                color: rgb(15, 20, 25);
                span{
                    font: inherit;
                    line-height: inherit;
                    color: inherit;
                }
            }
            .col-3{
                margin-top: 11px;
                display: grid;
                grid-template-columns: 11fr 1fr;
                .row-1{
                    padding-right: 15px;
                    span{
                        font-size: 1.2rem;
                        font-weight: 400;
                        line-height: 19px;
                    }
                }
                .row-2{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    input{
                        width: 19px;
                        height: 19px;
                        border: 1px solid lightgray;
                        border-radius: 5px;
                    }
                }
            }
            .col-4{
                margin-top: 38px;
                span{
                    font-size: 1.2rem;
                    color: rgb(91, 112, 131);
                }
                a > span {
                    color: #1DA1F2;
                }
            }
        }
        .cont-4{
            margin: 0 30px;
            margin-top: 50px;
            .col-1{
                span{
                font-size: 1.9rem;
                font-weight: 700;
                line-height: 27px;
                color: rgb(15, 20, 25);
                }
            }
            .col-2{
                .row-1, .row-2, .row-3{
                    margin-top: 25px;
                    width: 100%;
                    height: 60px;
                    border: 1px solid lightgray;
                    border-radius: 5px;
                    background: none;
                    position: relative;
                    cursor: text;
                    label, span{
                        position: absolute;
                        left: 10px;
                    }
                    label{
                        top: 10px;
                        font-size: 1.3rem;
                        color: rgb(91, 112, 131);
                    }
                    span{
                        font-size: 1.5rem;
                        top: 50%;
                    }
                }
            }
            .col-3{
                margin-top: 61px;
                line-height: 18px;
                a, span, button {
                    font-size: 1.3rem;
                    font-weight: 400;
                }
                .link{
                    color: #1DA1F2;
                    background: none;
                    border: none;
                }
            }
            .col-4{
                margin-top: 15px;
                button{
                    width: 100%;
                    height: 50px;
                    color: white;
                    font-size: 1.4rem;
                    font-weight: 700;
                    background-color: #1DA1F2;
                    border:none;
                    border-radius: 60px;
                    cursor: pointer;
                }
            }
        }
        .cont-5{
            margin: 50px 30px 15px;
            .title{
                font-size: 1.9rem;
                font-weight: 700;
                line-height: 27px;
                color: rgb(15, 20, 25);
            }
            .col-2{
                display: grid;
                grid-template-columns: 11fr 1fr;
                margin-top: 30px;
                label, span{
                    display: block;
                    font-size: 1.3rem;
                }
                span{
                    color: rgb(91, 112, 131);
                    font-size: 1.2rem;
                    margin-top: 5px;
                }
                .input{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    input{
                        width: 19px;
                        height: 19px;
                        color: #1DA1F2;
                        background-color: #1DA1F2;
                        outline-color: #1DA1F2;
                    }
                }
            }
        }
        .cont-6{
            margin: 60px 30px 30px 30px;
            .col-1{
                margin: 16px 0;
                span{
                    color: rgb(15, 20, 25);
                    font-weight: 700;
                    line-height: 23px;
                    font-size: 2rem;
                }
            }
            .col-2{
                margin-bottom: 16px;
                span{
                    color: rgb(91, 112, 131);
                    font-weight: 400;
                    font-size: 15px;
                }
            }
            .col-3{
                padding: 12px 0;
                position: relative;
                label{
                    top: 30%;
                }
                input{
                    outline-color: #1DA1F2;
                    margin: 0;
                    &:focus ~ label[for=password]{
                        font-size: 1.3rem;
                        top: 20px;
                        color: #1DA1F2;
                    }
                }
                button{
                    background: none;
                    border: none;
                    color: #1DA1F2;
                    font-size: 1.2rem;
                    margin-left: 10px;
                    margin-top: 5px;
                }
            }
        }
        .cont-7{
            margin: 50px 30px;
            .col-1{
                margin: 16px 0;
                span{
                    line-height: 28px;
                    font-size: 2.1rem;
                    font-weight: 700;
                    color: rgb(15, 20, 25);

                }
            }
            .col-2{
                span{
                    color: rgb(91, 112, 131);
                    font-weight: 400;
                    font-size: 1.4rem;
                }
            }
            .col-3{
                margin: 64px 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    
</style>