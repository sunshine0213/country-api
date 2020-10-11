<template>
  <div class="home">
    <div class="home__inner">
      <h1>
        Hello
        <span class="primary-highlight">Bikash!</span>
      </h1>
      <p class="sub-text">26th October 2020</p>
      <img src="@/assets/empty_illustration.svg" class="home__hero-image" />
      <p v-on:click="complete(2)">Your task list for today looks empty</p>
      <Button label="Add a task" />
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
  data: function () {
    return {};
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
