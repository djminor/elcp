<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('Ponca')" href="#" class="pure-menu-link">Ponca</a></li>
        <li class="pure-menu-item"><a @click="select('Scots Gaelic')" href="#" class="pure-menu-link">Scots Gaelic</a></li>
        <li class="pure-menu-item"><a @click="select('Sesotho')" href="#" class="pure-menu-link">Sesotho</a></li>
        <li class="pure-menu-item"><a @click="select('Chukot')" href="#" class="pure-menu-link">Chukot</a></li>
        <li class="pure-menu-item"><a @click="select('Low Saxon')" href="#" class="pure-menu-link">Low Saxon</a></li>
      </ul>
    </div>
    <WordList :dictionary="words" />
    <div class='footer'>
                <hr>
                <p>Link to GitHub repo:</p>
                <br>
                <a href='https://github.com/djminor/elcp_dir.git'>elcp_vue github</a>
    </div>
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