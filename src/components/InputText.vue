<template>
  <div class="input-text">
    <label class="input-label">
      {{ label }}
    </label>
    <input
      type="text"
      class="input-box"
      placeholder="placeholder"
      v-model.lazy="model"
    />
  </div>
</template>
<script>
export default {
  name: "InputText",
  props: {
    label: String,
    placeholder: String,
    model: String,
  },
};
</script>
<style scoped>
.input-text {
  margin-top: 20px;
}
.input-box {
  margin-top: 15px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  color: #a4b0cb;
  border: 1px solid #a4b0cb;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
}
</style>
