<script setup>
import quizData from "../data/quizes.json";
import Card from "../components/Card.vue";
import { ref, watch } from "vue";

const quizes = ref(quizData);
const search = ref("");

//watches the variable for every change it receives
watch(search, () => {
  quizes.value = quizData.filter((el) =>
    el.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quizProp="quiz" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>