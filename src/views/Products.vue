<script lang="ts">
import { defineComponent } from 'vue';
import ProductService from '../services/ProductService';

export default defineComponent({
  name: 'Products',
  data() {
    return {
      title: 'List Products',
      products: [],
    }
  },
  async created() {
    this.products = await ProductService.getAll();
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="product in products" class="col" :key="product.id">
          <div class="card">
            <img alt="Vue logo" src="../assets/logo.svg" height="200" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ product.name }}</h5>
              <p class="btn btn-primary">
                Check this product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>