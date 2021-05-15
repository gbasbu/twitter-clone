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
          <span>Happening now</span>
        </div>
        <div class="col-3">
          <span>Join Twitter today.</span>
        </div>
        <div class="col-4">
          <router-link to="/signup" role="link" class="link link-1">Sign up</router-link>
          <router-link to="/login" role="link" class="link link-2">Login</router-link>
        </div>
      </div>
    </div>
    <div class="container-2">
      <div class="row-1">
        <div class="col-1">
          <figure>
            <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png">
        </figure>
        <svg viewBox="0 0 24 24"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </div>
      </div>
    </div>
    <nav role="navigation" aria-label="Altbilgi">
      <a href="https://about.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>About</span>
      </a>
      <a href="https://help.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Help Center</span>
      </a>
       <a href="https://twitter.com/tos" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Terms of Service</span>
      </a>
      <a href="https://twitter.com/privacy" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Privacy Policy</span>
      </a>
      <a href="https://support.twitter.com/articles/20170514" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Cookie Policy</span>
      </a>
      <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Ads info</span>
      </a>
      <a href="https://blog.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Blog</span>
      </a>
      <a href="https://status.twitterstat.us" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Status</span>
      </a>
      <a href="https://careers.twitter.com" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Careers</span>
      </a>
      <a href="https://about.twitter.com/press/brand-assets" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Brand Resources</span>
      </a>
      <a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Advertising</span>
      </a>
      <a href="https://marketing.twitter.com" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Marketing</span>
      </a>
      <a href="https://business.twitter.com" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Twitter of Business</span>
      </a>
      <a href="https://developer.twitter.com" class="link"  rel="noopener noreferrer" target="_blank" role="link">
        <span>Developers</span>
      </a>
      <a href="https://twitter.com/i/directory/profiles" class="link" rel="noopener noreferrer" target="_blank" role="link">
        <span>Directory</span>
      </a>
      <a href="/settings" class="link" role="link">
        <span>Settings</span>
      </a>
    </nav>
    <div class="copy-rigth"><span class="link">© 2021 Twitter, Inc.</span></div>
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
        svg{
          position: absolute;
          height: 85%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          fill: white;
        }
      }
    }
  }
  nav{
    padding: 15px 16px 5px;
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
      font-size: 1.3rem;
      span{
        font: inherit;
      }
    }
  }
}
.copy-rigth{
  text-align: center;
  padding-bottom: 15px;
  span{
    font-size: 1.2rem;
    color:rgb(91, 112, 131);
  }
}

</style>