<template>
  <div id="app" class="flex items-center justify-center">
    <div class=" ">
      <div class="" @click="toggle">
        <div class="label p-3 text-base text-gray-600 flex gap-4 items-center">
          <span class="font-bold text-black cursor-pointer dark:text-white
          " >{{ value }} </span>
          <div :class="{ 'rotate-180 transition-transform': visible }" class=" font-bold text-purple-600 text-lg " ><Icon class="font-extrabold" icon="bi:chevron-down" /></div>
        </div>
        
        <div
          :class="{ hidden: !visible, visible: visible }"
          class="absolute w-48 bg-white shadow-md rounded-md p-4"
        >
          <ul>
            <li
              v-for="(item, index) in list"
              @click="
                {
                  select(item);
                  toggle()
                }
              "
              :key="index"
            >
              <input type="checkbox" :id="item" :name="item" class="form-checkbox text-primary h-3 w-3 transition duration-150 ease-in-out transform hover:scale-100 focus:outline-none focus:shadow-outline-indigo focus:border-primary" />
              <label :for="item" class="p-3 font-bold text-base cursor-pointer">{{
                item
              }}</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const value = ref('Filter by status')
const list = ref(['Paid', 'Pending', 'Draft'])
const visible = ref(false)

const toggle = () => {
  visible.value = !visible.value
}

const select = (option) => {
  value.value = option
  visible.value = false // Hide the dropdown after selection
}
</script>
