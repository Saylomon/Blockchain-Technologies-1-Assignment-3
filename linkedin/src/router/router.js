import { createRouter, createWebHistory } from 'vue-router'
import RegPage from "@/components/RegPage.vue"
import MainPage from "@/components/MainPage.vue"
import ConnectWallet from "@/components/ConnectWallet.vue"
import UserProfile from "@/components/UserProfile.vue"
import SignPage from "@/components/SignPage.vue"

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/sign-up',
    component: RegPage
  },
  {
    path: '/sign-in',
    component: SignPage
  },
  {
    path: '/connect-wallet',
    component: ConnectWallet
  },
  {
    path: '/user-profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
