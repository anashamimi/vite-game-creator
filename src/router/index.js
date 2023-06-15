import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharacterList.vue')
    },
    {
      path: '/characters/:id',
      name: 'show-character',
      component: () => import('../views/SingleCharacter.vue')
    },
    //page not found error 404
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import('../views/NotFound.vue')
    }

  ]
})

export { router };