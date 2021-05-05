<script>
export default {
  data() {
      return {
          name: '',
          email: '',
          date: ''
      }
  },
  methods: {
      next(){
          this.$router.push('/')
      }
  },
}
</script>

<template>
    <main role="main">
            <div class="cont-1">
                <i class="fab fa-twitter"></i>
                <button class="link" @click.prevent="next" :disabled="!name || !email || !date">İleri</button>
            </div>
        <div class="cont-2">
            <div class="heading">
                <span>Hesabını oluştur</span>
            </div>
            <form>
                <div class="form-group">
                    <input type="text" name="name" id="name" v-model="name">
                    <label for="name" :class="[name ? 'top-10' : '']">İsim</label>
                    <input type="email" name="email" id="email" v-model="email">
                    <label for="email" :class="[email ? 'top-90' : '']">E-posta</label>
                </div>
            </form>
            <div class="day" aria-label="Doğum tarihi" role="group">
                <span class="day-heading">Doğum tarihi</span>
                <span class="day-p">
                    Bu, herkese açık olarak gösterilmeyecek. Bu hesap bir işletme, evcil hayvan 
                    veya başka bir şey için olsa bile kendi yaşını doğrulaman gerekir.
                </span>
                <input type="date" name="date" id="date" v-model="date">
                <label for="date">Doğum tarihi</label>
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
            
            .form-group{
                position: relative;
                
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
                    outline-color: #1DA1F2;
                }
                input[type=email]{
                    &:focus ~ label[for=email]{
                        top: 90px;
                        font-size: 1.3rem;
                        color: #1DA1F2;
                    }
                    outline-color: #1DA1F2;
                }
            }
            .day{
                margin-top: 30px;
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
                input{
                    padding-right: 10px;
                    
                    &:focus {
                        outline-color: #1DA1F2;

                        ~ label[for=date]{
                            color: #1DA1F2;
                        }
                    }
                }
                label{
                    left: 40px;
                    padding-top: 10px;
                }
            }
        }
    }
    
</style>