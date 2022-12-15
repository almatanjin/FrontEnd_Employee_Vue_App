import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddEmployee from '../components/AddEmployee.vue'
import updateEmployee from '../components/updateEmployee.vue'
import loginVue from '../components/loginVue.vue'
import registervue from '../components/registerVue.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/add',
    name:'addEmployee',
    component:AddEmployee,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/update/:id',
    name:'updateEmployee',
    component:updateEmployee,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/login',
    name:'loginVue',
    component:loginVue
  },
  {
    path:'/registration',
    name:'registerVue',
    component:registervue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  if(to.meta.requiresAuth && !localStorage.getItem('token')){
    return {name :'loginVue'}
  }
  if(to.meta.requiresAuth == false && localStorage.getItem('token')){
    return{name : 'home'}
  }
  
})

export default router
