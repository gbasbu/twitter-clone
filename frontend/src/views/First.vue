<script>

export default {
  name: 'First',
  
}
</script>

<template>
  <main role="main">
    <div class="container-1">
      <div class="row-1">
        <div class="col-1">
          <i class="fab fa-twitter"></i>
        </div>
        <div class="col-2">
          <span>Şu anda olup bitenler</span>
        </div>
        <div class="col-3">
          <span>Twitter'a bugün katıl.</span>
        </div>
        <div class="col-4">
          <router-link to="/signup" role="link" class="link link-1">Kaydol</router-link>
          <router-link to="/login" role="link" class="link link-2">Giriş yap</router-link>
        </div>
      </div>
    </div>
    <div class="container-2">
      <div class="row-1">
        <div class="col-1">
          <figure>
            <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png">
        </figure>
        <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
    <nav role="navigation" aria-label="Altbilgi">
      <a href="https://about.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Hakkında</span>
      </a>
      <a href="https://help.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Yardım Merkezi</span>
      </a>
       <a href="https://twitter.com/tos" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Hizmet Şartları</span>
      </a>
      <a href="https://twitter.com/privacy" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Gizlilik Politikası</span>
      </a>
      <a href="https://support.twitter.com/articles/20170514" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Çerez Politikası</span>
      </a>
      <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Reklam bilgisi</span>
      </a>
      <a href="https://blog.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Blog</span>
      </a>
      <a href="https://status.twitterstat.us" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Durum</span>
      </a>
      <a href="https://careers.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Kariyer</span>
      </a>
      <a href="https://about.twitter.com/press/brand-assets" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Marka Kaynakları</span>
      </a>
      <a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Reklam</span>
      </a>
      <a href="https://marketing.twitter.com" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Pazarlama</span>
      </a>
      <a href="https://business.twitter.com" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>İşletmeler İçin Twitter</span>
      </a>
      <a href="https://developer.twitter.com" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Geliştiriciler</span>
      </a>
      <a href="https://twitter.com/i/directory/profiles" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Dizin</span>
      </a>
      <a href="/settings" class="link" role="link">
        <span>Ayarlar</span>
      </a>
      <div><span class="link">© 2021 Twitter, Inc.</span></div>
    </nav>
  </main>
</template>

<style lang="scss" scoped>
main{
  .container-1{
    padding: 15px;
    .row-1{
      padding: 19px;
      .col-2{
        margin: 40px 0;
        span{
          font-size: 3.6rem;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: -0.8px;
        }
      }
      .col-3{
        margin-bottom: 20px;
        span{
          font-size: 2.1rem;
          font-weight: 700;
          letter-spacing: -0.8px;
        }
      }
      .col-4{
        .link{
          display: block;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          border: 1px solid rgb(29, 161, 242);
          min-height: 46px;
          outline-style: none;
          transition-property: background-color, box-shadow;
          transition-duration: 0.2s;
          min-width: calc(74.06px);
          padding: 0 30px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 700;
        }
        .link-1{
          background-color: rgba(29,161,242,1.00);
          color: white;
        }
        .link-2{
          color: rgba(29,161,242,1.00)
        }
      }
    }
  }
  .container-2{
    min-height: 45vh;
    .row-1{
      .col-1{
        position: relative;
        height: 45vh;
        figure{
          height: 45vh;
          background-image: url("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;

          img{
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
        i{
          position: absolute;
          top: 15%;
          left: 35%;
          color: white;
          font-size: 20rem;
        }
      }
    }
  }
  nav{
    padding: 12px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    .link{
      padding-right: 16px;
      color: rgb(91, 112, 131);
      overflow-wrap: break-word;
      margin: 4px 0;
      font-weight: 400;
      line-height: 16px;
      font-size: 12px;
      span{
        font: inherit;
        color: inherit;
        white-space: inherit;
      }
    }
  }
}

</style>