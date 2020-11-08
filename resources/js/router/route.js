import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../components/pages/Home";
import CategoryList from "../components/category/Index";

const route = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/#category',
            component: CategoryList,
            name: 'category-list',
        },
    ]
});


export default route;
