<template>
  <Header />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
body {
  background-color: hsl(0, 0%, 98%);
  height: 300vh;
}
#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: hsl(0, 0%, 10%);
}
a {
  color: #000;
}
</style>
