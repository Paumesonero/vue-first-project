<script setup>
import Question from "./Question.vue";
import Header from "./QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import quizes from "../data/quizes.json";
const route = useRoute();

const quizId = Number(route.params.id);
const currentQuestionIndex = ref(0);
const quiz = quizes.find((el) => el.id === quizId);

const questionStatus = ref(
  `${currentQuestionIndex.value}/${quiz.questions.length}`
);
watch(
  () => currentQuestionIndex.value,
  () => {
    questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
  }
);
</script>

<template>
  <div>
    <Header :questionStatus="questionStatus" />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>
