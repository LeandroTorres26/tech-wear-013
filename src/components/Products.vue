<template>
  <ul class="products">
    <li v-for="product in products" :key="product.id" class="product">
      <img :src="product.img" alt="" />
      <h2>{{ product.name }}</h2>
      <span>${{ (Math.round(product.price * 100) / 100).toFixed(2) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },
  created() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em 1em;
  padding: 2rem;
}
.product {
  background-color: hsl(0, 0%, 8%);
  color: #fff;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1em;
  padding: 0.5em;
  padding-bottom: 1em;
  justify-items: center;
  border-radius: 10px;
  h2 {
    font-size: 1.1rem;
    font-weight: 400;
  }
  span {
    font-weight: 900;
    font-size: 1.8rem;
  }
  img {
    width: 100%;
  }
}
</style>
