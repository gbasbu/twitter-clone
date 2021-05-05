<script>
export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
}
</script>

<template>
    <main role="main">
        <div class="container">
            <div class="row">
                <div class="col-1">
                    <i class="fab fa-twitter"></i>
                    <h1 role="heading"><span>Twitter'a giriş yap</span></h1>
                </div>
                <div class="col-2">
                    <form>
                        <div class="form-group">
                            <input type="email" name="email" class="form-field" v-model="email">
                            <label for="email" class="form-label" :class="[email ? 'top-5' : '']">E-posta</label>
                            <input type="password" name="password" id="password" class="form-field" v-model="password">
                            <label for="password" class="form-label" :class="[password ? 'top-85' : '']">Şifre</label>
                            <input type="submit" value="Giriş yap" class="form-field" :disabled="!email || !password">
                        </div>
                    </form>
                </div>
                <div class="col-3">
                    <router-link to="/begin_password_reset" class="link link-1">Şifreni mi unuttun?</router-link> .
                    <router-link to="/signup" class="link link-2">Twitter'a kaydol</router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
   main{
       height: 100vh;
       display: flex;
       justify-content: center;
       .container{
           max-width: 500px;
        .row{
           margin: 0 32px;
           margin-top: 20px;
           padding: 0px 16px;
           .col-1{
               margin: 0 16px;
               h1{
                   margin-top: 32px;
                   margin-bottom: 20px;
                   span{
                       font-size: 31px;
                   }
               }
           }
           .col-2{
               margin: 0px 16px;
               .form-group{
                   position: relative;
                   .form-field{
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
                .form-label{
                    position: absolute;
                    left: 10px;
                    font-size: 1.5rem;
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
                input[type=email]:focus{
                    ~ label[for=email]{
                        top: 5px;
                        font-size: 1.3rem;
                        color: #1DA1F2;
                        padding-top: 6px;
                    }
                    outline-color: #1DA1F2;
                }
                input[type=password]:focus{
                    ~ label[for=password]{
                        top: 85px;
                        font-size: 1.3rem;
                        color: #1DA1F2;
                        padding-top: 6px;
                    }
                    outline-color: #1DA1F2;
                }
                input[type=submit]{
                    padding: 0;
                    height: 50px;
                    background-color: #1DA1F2;
                    border-radius: 50px;
                    color: white;
                    font-weight: 700;
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
                   color: #1B95E0;
                   cursor: pointer;
                   font-size: 1.2rem;
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
        font-size: 1.3rem!important;
        padding-top: 6px!important;
    }
    .top-85{
        top: 85px!important;
        font-size: 1.3rem!important;
        padding-top: 6px!important;
    }
   } 
</style>