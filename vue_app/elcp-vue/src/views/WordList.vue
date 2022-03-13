<template>
<div class="wrapper">
    <div class="words">
        <div class="word" v-for="word in dictionary" :key="word.id">
            <div class="info">
                <h2>{{word.nonEngWord}}</h2>
                <h3>{{word.language}}</h3>
                <p>"{{word.translation}}"</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "WordList",
    props: {
        dictionary: Array
    },
    data() {
        return {
            word: this.word
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
.words {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.word {
    margin: 10px;
    margin-top: 50px;
    width: 200px;
}
.info {
    background-color:aqua;
    color: #000;
    padding: 10px 30px;
    height: 250px;
}
</style>
