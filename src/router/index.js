import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: ["/dashboard"],
    name: "dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/groups",
    name: "groups",
    component: () => import("../views/group/Group.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/user/User.vue"),
  },
  {
    path: "/clock",
    name: "clock",
    component: () => import("../views/clock/Clock.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/calendar/Calendar.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
