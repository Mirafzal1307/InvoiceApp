<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <p class="color">#RT3080</p>
    <p class="date">Due 19 Aug 2021</p>
    <h3 class="name">Jensen Huang</h3>
    <p class="price">£ 1,800.90</p>

    <IButton><img src="../assets/img/status.svg" alt="img" /> Paid</IButton>
    <span  > <img src="../assets/img/navigate.svg" alt="img" /> </span>
  </div>
</template>

<script setup>
import IButton from './IButton.vue'
</script>

<style scoped>
.card {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
  border-radius: 20px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 20px 0px ;
}
.color {
  font-weight: 700;
  color: black;
  font-size: 15px;
}
.date {
  font-weight: 500;
  color: #888eb0;
  font-size: 13px;
}
.name {
  font-weight: 500;
  color: #888eb0;
  font-size: 13px;
}

.price {
  font-weight: 700;
  color: black;
  font-size: 15px;
}
</style>
