import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'
import * as z from 'zod'

const AlbumSchema = z.object({
  '@attr': z.object({
    rank: z.number(),
  }),
  artist: z.object({
    name: z.string(),
  }),
  name: z.string(),
  mbid: z.uuid(),
})

export type Album = z.infer<typeof AlbumSchema>

type TopAlbumsQueryResponse = {
  topalbums: {
    album: Album[]
  }
}

export const useTopAlbumsQuery = (user: Ref<string | null>) =>
  useQuery<TopAlbumsQueryResponse | null, Error, Album[]>({
    enabled: computed(() => user.value != null),
    queryKey: ['user.gettopalbums', user],
    select: (data) => data?.topalbums?.album || [],
  })
