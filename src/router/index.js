import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../components/TheHome.vue'
import LoginView from '../components/LoginView.vue'
import RegisterView from '../components/RegisterView.vue'
import ForgotPasswordView from '../components/ForgotPasswordView.vue'
import ChangePassword from '../components/ChangePassword.vue'
import auth from './middlewares/Auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: ForgotPasswordView
    },
    {
      path: '/changePassword',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: {
      middleware: auth,
     },
    },
  ]
})

export default router
