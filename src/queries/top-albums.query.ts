import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'

export const useTopAlbumsQuery = (user: Ref<string | null>) =>
  useQuery({
    enabled: computed(() => user.value != null),
    queryKey: ['user.gettopalbums', user],
  })
