import { createRouter, createWebHistory } from "vue-router";
import CardQuiz from "../components/CardQuiz.vue"
import QuizesView from "../views/QuizesView.vue"



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: QuizesView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: CardQuiz,
        },
    ]
})
export default router