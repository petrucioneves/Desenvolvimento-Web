<script setup lang="ts">
import { ref, computed } from 'vue'
const emit = defineEmits(['remove', 'update:done'])
const props = defineProps<{
  id: Number
  description: String
  done: Boolean
}>()
const id = ref()
const modelDone = computed({
  get() {
      return props.done
  },
  set(value) {
      emit('update:done', value);
  }
})

</script>

<template>
  <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="modelDone">
      <label class="form-check-label" for="flexCheckDefault" :class="{ done: done}">
      {{ props.description }}
      </label>  
      <button type="button" class="btn btn-sm float-end" @click="emit('remove', id)"><i class="bi bi-x-lg"></i></button>
  </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
