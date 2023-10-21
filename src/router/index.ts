import { createRouter, createWebHashHistory } from "vue-router";
import SingleImg from "@/views/SingleImg.vue";
import MultiImg from "@/views/MultiImg.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "singleimg",
            component: SingleImg
        },
        {
            path: "/multiimg",
            name: "multiimg",
            component: MultiImg
        }
    ]
});

export default router;
