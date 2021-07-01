<template>
  <header>
    <fa :icon="icon" class="menu" @click="closeMenu()" />
    <transition name="move-right">
      <Nav v-if="!hidden" />
    </transition>
    <img :src="logo" class="logo" />
    <a href="#"><fa icon="shopping-bag" class="shopping" /></a>
  </header>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "Header",
  components: {
    Nav,
  },
  data() {
    return {
      logo: require("../assets/logo.svg"),
      hidden: true,
      icon: "bars",
    };
  },
  methods: {
    closeMenu() {
      this.hidden = !this.hidden;
      if (this.hidden == false) {
        document.getElementsByClassName("menu")[0].style.transform =
          "translateX(7.5em)";
        this.icon = "times";
      } else {
        document.getElementsByClassName("menu")[0].style.transform =
          "translateX(0)";
        this.icon = "bars";
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/_helpers";
header {
  border-bottom: hsla(0, 0%, 0, 0.3) solid 1px;
  padding: 0.5em 1em;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-items: center;
  align-items: center;
}
.logo {
  width: 2.5rem;
}
.shopping {
  font-size: 1.5rem;
}
.menu {
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  transition: 0.5s ease;
}

.move-right-enter-from {
  transform: translateX(-100%);
}

.move-right-enter-active,
.move-right-leave-active {
  transition: all 0.5s ease;
}

.move-right-leave-to {
  transform: translateX(-100%);
}
</style>
