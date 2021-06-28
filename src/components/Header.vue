<template>
  <header>
    <nav>
      <ul>
        <li>roupas</li>
        <li>roupas</li>
        <li>roupas</li>
        <li>roupas</li>
        <li>roupas</li>
      </ul>
    </nav>
    <img :src="img" class="logo" />
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      img: require("../assets/logo.svg"),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/_helpers";
header {
  background-color: hsl(0, 0%, 100%);
}
nav {
  display: none;
}
.logo {
  width: 10rem;
}
</style>
