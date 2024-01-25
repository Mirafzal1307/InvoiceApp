<template>
  <Sidebar />
  <main class="container w-[1200px] m-auto">
    <div>
    
      <Card  :data="data" />

    </div>
  </main>
</template>
<script setup>
import Card from '@/components/Card.vue'
import Sidebar from '@/components/Sidebar.vue'
import { ref } from 'vue'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/init.js'

const data = ref('')

const getData = async () => {
  const docSnap = await getDoc(doc(db, 'data','invoice'))

  if (docSnap.exists()) {
    console.log(docSnap.data())
    data.value = docSnap.data()
  } else {
    console.log('Data not found')
  }
}
console.log(data.value)
getData()
</script>
