<template>
  <div id="app">
    <h1>ELCP</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/explore">Explore</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  float: left;
  padding: 10px;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}
nav a :hover {
  background-color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #FFF;
  background-color: #000;
}
</style>
