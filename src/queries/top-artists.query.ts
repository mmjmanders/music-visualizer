import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'
import * as z from 'zod'

const ArtistSchema = z.object({
  '@attr': z.object({
    rank: z.number(),
  }),
  name: z.string(),
  mbid: z.uuid(),
})

export type Artist = z.infer<typeof ArtistSchema>

type TopAristsQueryResponse = {
  topartists: {
    artist: Artist[]
  }
}

export const useTopArtistsQuery = (user: Ref<string | null>) =>
  useQuery<TopAristsQueryResponse | null, Error, Artist[]>({
    enabled: computed(() => user.value != null),
    queryKey: ['user.gettopartists', user],
    select: (data) => data?.topartists?.artist || [],
  })
