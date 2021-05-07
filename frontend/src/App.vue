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
}
</style>
