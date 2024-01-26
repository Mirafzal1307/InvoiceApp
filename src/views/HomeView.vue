<template>
  <Sidebar />
  <main class="container w-[1000px] mt-20 ml-auto mr-auto">
    <div class="flex justify-between mb-6">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold text-black dark:text-white">Invoices</h1>
        <p class="text-sm font-medium text-light2">There are 7 total invoices</p>
      </div>
      <div class="flex items-center gap-6">
        <div>
          <CDropdown />
        </div>
        <div>
          <CButton :bg-color="'#7C5DFA'" :text-color="'white'">
            <span class="bg-white rounded-xl p-1 text-purple-600"><Icon icon="bi:plus" /> </span>
            new invoce</CButton
          >
        </div>
      </div>
    </div>
    <div>
      <Card  />
    </div>
  </main>
  <div>
    <!-- <div>
    <button @click="openModal">Open Modal</button>
    
    <CModal :isOpen="modalOpen" @closeModal="closeModal">
      <h2>Hello from the modal!</h2>
    </CModal>
  </div> -->
  </div>
</template>
<script setup>
import Card from '@/components/CCard.vue'
import Sidebar from '@/components/Sidebar.vue'
import CDropdown from '@/components/CDropdown.vue'
import CButton from '@/components/CButton.vue'
// import CModal from '@/components/CModal.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const modalOpen = ref(false);


const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};
</script>
