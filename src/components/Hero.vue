<template>
  <section v-bind:style="{ backgroundImage: 'url(' + heroImg + ')' }">
    <div class="cta">
      <h1>Summer Sale</h1>
      <p><b>50%</b> Off in <b>All</b> products</p>
      <button>Shop Now</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heroImg: require("../assets/hero.jpg"),
    };
  },
};
</script>
<style lang="scss" scoped>
section {
  height: 30em;
  background-size: cover;
  background-position: center;
  isolation: isolate;
}

.cta {
  position: relative;
  display: grid;
  gap: 1em;
  justify-items: center;
  align-content: center;
  height: 100%;
  width: 15em;
  padding: 1em;
  color: #fff;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: hsl(216, 3%, 34%);
    mix-blend-mode: multiply;
  }
  h1 {
    font-size: 2rem;
  }
  b {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: hsl(195, 53%, 59%);
  }
  button {
    padding: 1em 2em;
    color: #fff;
    background-color: hsl(195, 53%, 29%);
    border: #000 solid 2px;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>
