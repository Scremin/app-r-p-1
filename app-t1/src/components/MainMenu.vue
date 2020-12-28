<template>
    <v-app-bar
    absolute
    app
    :collapse-on-scroll="!collapseOnScroll"
    :collapse="!collapseOnScroll"
    color="rgba(100, 100, 100, 0.8)"
    dark
    scroll-target="#scrolling-techniques-6"
    >
        <div class="d-flex align-center">
            <p>TESTE - app-r-p-v1</p>
        </div>
        
        <div class="testCSS1">
            <div>
                <button class="testCSS2">Home-test</button>
            </div>
            <div>
                <button class="testCSS2">Debatedores</button>
            </div>
            <div>
                <button class="testCSS2">O que fazemos?</button>
            </div>
            <div>
                <button class="testCSS2">Vem debater com a gente</button>
            </div>
        </div>

    <v-spacer></v-spacer>

    <v-checkbox
    v-model="collapseOnScroll"
    color="white"
    ></v-checkbox>

    <!-- href="https://github.com/vuetifyjs/vuetify/releases/latest" -->
    <v-btn
        target="_blank"
        text
    >
        <span class="mr-2">Botão - teste</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'MainMenu',

    data() {
        return {
            collapseOnScroll: true
        }
    }
  }
</script>

<style>
.testCSS1 {
    display: flex;
    /*flex-direction: column;
    flex-wrap: wrap;*/

    justify-content: center;
    justify-items: space-between;

    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
    margin-block-end: 5%;
}
.testCSS2 {
    /*display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    justify-content: center;*/
    justify-items: center;

    margin-top: 5%;
    margin-left: 25%;
    margin-right: 25%;
    margin-block-end: 5%;
}
</style>