import { createApp } from 'vue'
import '@fontsource-variable/montserrat'
import './main.css'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'

const { VITE_LASTFM_API_URL: apiUrl, VITE_LASTFM_API_KEY: apiKey } = import.meta.env
const defaultQueryFn = async ({ queryKey }: { queryKey: any }) => {
  const res = await fetch(
    `${apiUrl}?format=json&api_key=${apiKey}&method=${queryKey[0]}&user=${queryKey[1]}`,
  )
  return await res.json()
}
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  },
}

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin, vueQueryPluginOptions)

app.mount('#app')
