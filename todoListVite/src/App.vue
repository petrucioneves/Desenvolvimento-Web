<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup



import taskItem from './components/taskItem.vue'
import progressBar from './components/progressBar.vue'
import taskForm from './components/taskForm.vue';
</script>

<template>
    <div class="container">
      <div class="row">
          <div class="col-8 m-auto mt-5" id="app">
            <taskForm></taskForm>
            
            <div id="todolist" v-for="(task, index) in tasks" :key="task.id" class="clearfix">
              <taskItem 
                  :id="index"
                  :description="task.description"
                  v-model:done="task.done"
                  @remove="removeTask"
              ></taskItem>
            </div>
            <progressBar></progressBar>
          </div>
      </div>
    </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
