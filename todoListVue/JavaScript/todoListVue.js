

const { createApp } = Vue

const root =  {
  data() {
    return {
      newTask:  "",
      tasks: []
    }
  },
  computed: {
    nTask() {
      return this.tasks.length
    },
    tasksDone() {
      return this.tasks.filter(t => t.done).length
    },
    percentageOfTasksDone() {
      return (this.tasksDone/this.nTask) * 100
    },
    isEmpty() {
      return this.newTask.length === 0
    }
  },
  methods: {
    addTask() {
      const id = this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1
      this.tasks.push({
        id: id,
        deion: this.newTask,
        done: false
      })
      this.newTask = ""
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id != id)
    }
  }
}
  
const app = createApp(root)
app.mount('#app')