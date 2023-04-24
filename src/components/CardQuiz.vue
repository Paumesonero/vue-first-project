<script setup>
import Question from "./Question.vue";
import Header from "./QuizHeader.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import quizes from "../data/quizes.json";
const route = useRoute();

const quizId = Number(route.params.id);
const currentQuestionIndex = ref(0);
const quiz = quizes.find((el) => el.id === quizId);
</script>

<template>
  <div>
    <Header />
    <div>
      <Question :question="quiz.questions[currentQuestionIndex]" />
    </div>
  </div>
</template>
