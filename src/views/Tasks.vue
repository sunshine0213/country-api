<template>
  <div class="tasks">
    <div class="tasks__inner">
      <div class="task-list">
        <h2>Today</h2>
      </div>

      <TodoItem
        v-for="item in items"
        v-bind:key="item.id"
        v-bind="item"
        v-bind:complete="complete"
        v-bind:edit="edit"
      />
    </div>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "Tasks",
  components: {
    TodoItem,
  },
  data: function () {
    return {
      items: JSON.parse(localStorage.getItem("taskapp")).items,
    };
  },
  methods: {
    complete: function (id) {
      const _items = this.items.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      this.items = [..._items];
      let _taskapp = JSON.parse(localStorage.getItem("taskapp"));
      _taskapp = { ..._taskapp, items: _items };
      localStorage.setItem("taskapp", JSON.stringify(_taskapp));
    },
    edit: function (id) {
      const _items = this.items.map((item) => {
        if (item.id === id) {
          item.isEditing = !item.isEditing;
        }
        return item;
      });
      this.items = [..._items];
    },
  },
};
document.title = "Tasks";
</script>
<style scoped>
.tasks {
  margin: 40px 30px;
}
.tasks__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tasks p {
  margin-top: 0px;
}
img {
  margin: 20px 0;
}
.task-list {
  margin-top: 20px;
}
</style>
