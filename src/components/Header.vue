<template>
  <header>
    <fa icon="bars" class="menu" @click="hidden = false" />
    <nav v-if="!hidden">
      <fa icon="times" class="menu close" @click="hidden = true" />
      <ul>
        <li>
          <a href="#">Jackets<fa icon="chevron-right" /></a>
        </li>
        <li>
          <a href="#">Sneakers<fa icon="chevron-right" /></a>
        </li>
        <li>
          <a href="#">Hoods<fa icon="chevron-right" /></a>
        </li>
        <li>
          <a href="#">Hoods lorem<fa icon="chevron-right" /></a>
        </li>
        <li>
          <a href="#">Hoods<fa icon="chevron-right" /></a>
        </li>
        <li>
          <a href="#">Hoods<fa icon="chevron-right" /></a>
        </li>
      </ul>
      <div class="social-media">
        <a href="#"><fa :icon="['fab', 'instagram']" /></a>
        <a href="#"><fa :icon="['fab', 'facebook']" /></a>
        <a href="#"><fa :icon="['fab', 'twitter']" /></a>
      </div>
    </nav>
    <img :src="logo" class="logo" />
    <fa icon="shopping-bag" class="shopping" />
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: require("../assets/logo.svg"),
      hidden: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/_helpers";
header {
  border-bottom: hsla(0, 0%, 0, 0.3) solid 1px;
  padding: 0.5em 1em;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  align-items: center;
}
nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: hsl(0, 0%, 95%);
  padding: 1em 1em;
  border-right: rgba(#000, 0.5) solid 1px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: start;
  gap: 2em;
  min-width: 15em;
  font-weight: 400;
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.social-media {
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  width: 100%;
}
.menu {
  font-size: 1.5rem;
  cursor: pointer;
}
.close {
  justify-self: end;
}
.logo {
  width: 2.5rem;
}
.shopping {
  font-size: 1.5rem;
}
</style>
