<template>
  <div class="landing">
    <div class="landing__inner">
      <img src="@/assets/time_illustration.svg" class="landing__hero-image" />
      <h1>
        Tomorrow never comes
        <span class="primary-highlight">Let’s do</span>
        it today!
      </h1>
      <Button v-if="!isStart" label="Lets do it" v-bind:onClick="onStart" />
      <div v-if="isStart" class="landing__start">
        <InputText
          label="What should I call you?"
          v-bind:model="firstName"
          placeholder="full name"
        />
        <Button v-if="isStart" v-bind:onClick="onReady" label="I'm ready" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Button from "@/components/Button.vue";
import InputText from "@/components/InputText.vue";

const getFromLocal = localStorage.getItem("taskapp");
if (getFromLocal) {
  this.isNewUser = false;
  this.isStart = true;
}

export default {
  name: "Landing",
  components: { Button, InputText },
  data: function () {
    return {
      isNewUser: true,
      isStart: false,
      firstName: "",
    };
  },
  methods: {
    onStart: function () {
      this.isStart = true;
    },
    onReady: function () {
      console.log("I am ready", this.firstName);
    },
  },
};
document.title = "Landing";
</script>
<style scoped>
.landing {
  margin: 40px 30px;
}
.landing__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.landing .landing__hero-image {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
