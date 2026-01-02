import { createRouter, createWebHashHistory, type RouteRecordSingleView } from 'vue-router'

export const routes: RouteRecordSingleView[] = [
  {
    path: '/top-tracks',
    name: 'Top tracks',
    component: () => import('@/components/TopTracks.vue'),
  },
  {
    path: '/top-artists',
    name: 'Top artists',
    component: () => import('@/components/TopArtists.vue'),
  },
  {
    path: '/top-albums',
    name: 'Top albums',
    component: () => import('@/components/TopAlbums.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/top-tracks',
    },
    ...routes,
  ],
})

export default router
