import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'

export const useTopArtistsQuery = (user: Ref<string | null>) =>
  useQuery({
    enabled: computed(() => user.value != null),
    queryKey: ['user.gettopartists', user],
  })
