<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/scss/fonts.scss";

html,
body {
  box-sizing: border-box;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
