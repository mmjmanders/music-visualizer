import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'
import * as z from 'zod'

const TrackSchema = z.object({
  '@attr': z.object({
    rank: z.number(),
  }),
  artist: z.object({
    name: z.string(),
  }),
  name: z.string(),
  mbid: z.uuid(),
})

export type Track = z.infer<typeof TrackSchema>

type TopTracksQueryResponse = {
  toptracks: {
    track: Track[]
  }
}

export const useTopTracksQuery = (user: Ref<string | null>) =>
  useQuery<TopTracksQueryResponse | null, Error, Track[]>({
    enabled: computed(() => user.value != null),
    queryKey: ['user.gettoptracks', user],
    select: (data) => data?.toptracks?.track || [],
  })
