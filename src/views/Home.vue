<template>
  <div class="home">
    <div class="home__inner">
      <h1>
        Hello
        <span class="primary-highlight">{{ firstName }}!</span>
      </h1>

      <p class="sub-text">26th October 2020</p>
      <img
        v-if="items.length < 1 && !isAddTask"
        src="@/assets/empty_illustration.svg"
        class="home__hero-image"
      />
      <p v-if="items.length < 1 && !isAddTask">
        Your task list for today looks empty
      </p>
      <Button
        v-if="items.length < 1 && !isAddTask"
        v-bind:onClick="toAddView"
        label="Add a task"
      />

      <router-view />
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  name: "Home",
  components: {
    Button,
  },
  mounted: function () {
    if (this.$router.currentRoute.name) {
      this.isAddTask = true;
    }
  },
  data: function () {
    return {
      firstName: JSON.parse(localStorage.getItem("taskapp")).firstName,
      items: JSON.parse(localStorage.getItem("taskapp")).items,
      isAddTask: false,
    };
  },
  methods: {
    toAddView: function () {
      this.$router.push("/dashboard/add");
    },
  },
};
document.title = "Home";
</script>
<style scoped>
.home {
  margin: 40px 30px;
}
.home__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home p {
  margin-top: 0px;
}
img {
  margin: 20px 0;
}
.task-list {
  margin-top: 20px;
}
</style>
