import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/author",
        name: "Author",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Author.vue")
    },
    {
        path: "/penelitian",
        name: "Penelitian",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/sources/Penelitian.vue")
    },
    {
        path: "/pengabdian",
        name: "Pengabdian",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/sources/Pengabdian.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/auth/Login.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
