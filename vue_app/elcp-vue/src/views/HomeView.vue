<template>
  <div>
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>
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
  name: "HomeView",
  components: {
    WordList
  },
  data() {
    return {
      searchText: "",
    }
  },
  computed: {
    words() {
      return this.$root.$data.dictionary.filter(word => word.translation.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30%;
}
form {
  display: table;
  width: 100%;
}
i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: non !important;
  width: 100%;
  height: 40px;
}
</style>
