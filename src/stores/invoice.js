import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useInvoicesStore = defineStore('invoice', () => {
  const invoice = reactive([])

  // const getUserName = computed(() => user.value.name)

  const updateInvoice = (data) => {
    console.log(data)
  }

  const addInvoice = async (data) => {
    this.invoice.push(data)
  }

  return { invoice, updateInvoice, addInvoice }
})
