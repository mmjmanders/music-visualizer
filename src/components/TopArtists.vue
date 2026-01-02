<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { computed, ref } from 'vue'
import { useTopArtistsQuery } from '@/queries'

const { defineField, handleSubmit, meta } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      username: z.string().regex(/^\w+$/i),
    }),
  ),
})

const [username, usernameProps] = defineField('username')

const onSubmit = handleSubmit(() => {
  usernameQueryKey.value = username.value || null
})

const usernameQueryKey = ref<string | null>(null)
const { data } = useTopArtistsQuery(usernameQueryKey)
const isFormValid = computed(() => meta.value.dirty && meta.value.valid)
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl font-bold">Top artists</h1>
    <form @submit.prevent="onSubmit" class="flex gap-2">
      <input
        id="username"
        autocomplete="username"
        placeholder="Username"
        v-model="username"
        v-bind="usernameProps"
        class="px-2 border-orange-400 border-2 rounded-md focus:shadow-orange-200 focus:shadow-md focus:border-orange-400 focus:outline-none"
        :class="{ 'invalid-input': !isFormValid }"
      />
      <button
        type="submit"
        :disabled="!isFormValid"
        class="border-orange-400 border-2 px-2 py-1 rounded-md bg-orange-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus:shadow-md focus:shadow-orange-200 focus:outline-none"
      >
        Submit
      </button>
    </form>
    <div v-if="data">
      <ul class="list-decimal list-inside">
        <li v-for="artist of data" :key="artist.mbid">{{ artist.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
