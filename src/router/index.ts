import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/main-views/home/HomeView.vue";
import AboutView from '@/views/main-views/about-us/AboutUsView.vue'
import TreatmentsView from "@/views/main-views/treatments/TreatmentsView.vue";
import GalleryView from "@/views/main-views/gallery/GalleryView.vue";
import BookNowView from "@/views/main-views/book-now/BookNowView.vue";
import SignInView from "@/views/auth/sign-in/SignInView.vue";
import SignUpView from "@/views/auth/sign-up/SignUpView.vue";
import AdminPanelView from "@/views/admin-panel/AdminPanelView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView,
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: TreatmentsView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/book-now',
      name: 'book-now',
      component: BookNowView,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView,
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: AdminPanelView,
    },
  ],
})

export default router
