<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 10px;
  font-family: TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  .link{
    text-decoration: none;
    cursor: pointer;
  }

  .fab{
    width: 42px;
    height: 42px;
    padding-bottom: 11px;
    font-size: 4rem;
    color: rgba(29,161,242,1.00);
  }
  input[type=checkbox]{
    cursor: pointer;
  }
  .d-none{
    display: none!important;
  }
  .d-block{
    display: inline-block!important;
  }
  .p-16{
    padding: 16px;
  }
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
}
</style>
