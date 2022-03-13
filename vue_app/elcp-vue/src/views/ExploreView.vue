<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('Ponca')" href="#" class="pure-menu-link">Ponca</a></li>
        <li class="pure-menu-item"><a @click="select('Spanish')" href="#" class="pure-menu-link">Spanish</a></li>
        <li class="pure-menu-item"><a @click="select('Russian')" href="#" class="pure-menu-link">Russian</a></li>
      </ul>
    </div>
    <WordList :dictionary="words" />
  </div>
</template>
<script>
import WordList from "./WordList.vue"
export default {
  name: "ExploreView",
  components: {
    WordList
  },
  data() {
    return {
      word: this.word,
      language: "",
    }
  },
  computed: {
    words() {
      return this.$root.$data.dictionary.filter(word => word.language === this.language)
    }
  },
  methods: {
    select(language) {
      this.language = language;
    }
  }
}
</script>