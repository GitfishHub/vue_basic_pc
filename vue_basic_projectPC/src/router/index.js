import Vue from "vue";
import Router from "vue-router";


/**
 * 懒加载的工厂
 * @param {*} path
 */
const lazyLoad = path => () => import(`@/views${path}`);

const Home = lazyLoad("/home"); //主页
const TestOne = lazyLoad("/testone"); //主页
const TestTwo = lazyLoad("/testtwo"); //主页
const Father = lazyLoad("/father"); //主页
// import HelloWorld from '@/views/HelloWorld'

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
    }, {
      path: "/testone",
      component: TestOne,
    },
    {
      path: "/testtwo",
      component: TestTwo,
    },
    {
      path: "/father",
      component: Father,
    },
  ]
});