<script setup>
import quizData from "../data/quizes.json";
import Card from "../components/Card.vue";
import gsap from "gsap";
import { ref, watch } from "vue";

const quizes = ref(quizData);
const search = ref("");

const beforeEnter = (el) => {
  // equivalent to card-enter-from
  el.style.opacity = 0;
  el.style.transform = "translateY(-60px)";
};
const enter = (el) => {
  // equivalent to card-enter-to
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: el.dataset.index * 0.3,
  });
};
const afterEnter = (el) => {
  console.log("after entering");
};
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
      <TransitionGroup
        name="card"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <Card
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :quizProp="quiz"
          :data-index="index"
        />
      </TransitionGroup>
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

/* Transitions  */
/* .card-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.card-enter-active {
  transition: all 0.7s ease;
} */
</style>