import Vue from 'vue'
import Router from 'vue-router'

/**
 * 懒加载的工厂
 * @param {*} path
 */
const lazyLoad = (path) => () => import(`@/views${path}`)

const Home = lazyLoad('/home') //主页
const TestOne = lazyLoad('/testone')
const CancelSpan = lazyLoad('/functionBlock/cancelSpan')
const Father = lazyLoad('/father')
const TreeList = lazyLoad('/vxeTableUse/treeList')
const EleTree = lazyLoad('/elementUse/eleTree')
const TreeListNext = lazyLoad('/vxeTableUse/treeListNext')
const BigList = lazyLoad('/bigList/index')
// import HelloWorld from '@/views/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: '我的',
      meta: { title: '基本信息/我的' }
    },
    {
      path: '/testone',
      component: TestOne,
      name: '测试',
      meta: { title: '基本信息/测试' }
    },
    {
      path: '/cancelspan',
      component: CancelSpan,
      name: '去除标签',
      meta: {
        title: '功能/去除标签'
      }
    },
    {
      path: '/father',
      component: Father
    },
    {
      path: '/treelist',
      component: TreeList,
      name: 'tree1',
      meta: {
        title: 'VxetableUse/tree1'
      }
    },
    {
      path: '/treelistNext',
      component: TreeListNext,
      name: 'tree2',
      meta: {
        title: 'VxetableUse/tree2'
      }
    },
    {
      path: '/ele_tree',
      component: EleTree,
      name: 'tree',
      meta: {
        title: 'ElementUse/tree'
      }
    },
    {
      path: '/biglist',
      component: BigList,
      name: 'bigList',
      meta: {
        title: 'ElementUse/大数据分页'
      }
    }
  ]
})
