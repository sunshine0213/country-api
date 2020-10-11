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
import { uuid } from "vue-uuid";

import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "Tasks",
  components: {
    TodoItem,
  },
  data: function () {
    return {
      items: [
        {
          id: uuid.v4(),
          task: "Call dad",
          time: "12:30",
          isCompleted: false,
          isEditing: false,
          priority: "high",
        },
        {
          id: uuid.v4(),
          task: "Send CV to peter",
          time: "14:30",
          isCompleted: false,
          isEditing: false,
          priority: "medium",
        },
        {
          id: uuid.v4(),
          task: "Make a video",
          time: "18:30",
          isCompleted: false,
          isEditing: false,
          priority: "low",
        },
      ],
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
