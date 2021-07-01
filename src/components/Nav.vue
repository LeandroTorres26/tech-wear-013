<template>
  <nav>
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
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
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
  grid-template-rows: 1.5em 1fr auto;
  justify-items: start;
  gap: 2em;
  min-width: 15em;
  font-weight: 400;
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;
    grid-row: 2/3;
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
  grid-row: 3/4;
}
</style>
