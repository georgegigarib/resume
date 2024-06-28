<template>
  <div class="greetings">
    <h1>{{ t('hello') }}</h1>
    <h1 class="green">{{ msg }}</h1>
    <ThemeSwitch :size="30" />
    <ThemeSwitchTwo :size="30" />
    <h3>
      <div class="bg-accent rounded-xl dark:bg-secondary">
        hola amigo
        <br />
      </div>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <button data-test="button-for-toast" @click="showToast()" class="bg-white">Show Toast</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { toast } from 'vue3-toastify'
import ThemeSwitch from './ThemeSwitch.vue'
import ThemeSwitchTwo from './ThemeSwitchTwo.vue'

const { t } = useI18n()
defineProps<{ msg: string }>()

const showToast = () => {
  toast.success('Hello, Vite + Vue 3!')
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.fondo1 {
  background-color: aqua;
}

.fondo2 {
  background-color: yellow;
}
</style>
