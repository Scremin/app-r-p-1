<template>
    <v-app-bar
    color="rgba(100, 100, 100, 0.8)"
    app
    :collapse-on-scroll="!collapseOnScroll"
    :collapse="!collapseOnScroll"
    dark
    scroll-target="#scrolling-techniques-6"
    >
        <v-bottom-navigation
            :value="value"
            color="red"
        >

            <v-btn
                text
            >
                <span class="mr-2">APP-r-p-v1</span>
            </v-btn>

            <v-btn
                target="_blank"
                text
            >
                <span class="mr-2">HOME</span>
                <v-icon>mdi-home-variant</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
            >
                <span class="mr-2">DEBATEDORES</span>
                <v-icon>mdi-boxing-glove</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
            >
                <span class="mr-2">O QUE FAZEMOS?</span>
                <v-icon>mdi-comment-question</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
            >
                <span class="mr-2">VEM DEBATER COM A GENTE</span>
                <v-icon>mdi-comment-plus-outline</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                target="_blank"
                text
            >
                <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
            >
                <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
            >
                <v-icon>mdi-youtube</v-icon>
            </v-btn>

        </v-bottom-navigation>

    <!-- href="https://github.com/vuetifyjs/vuetify/releases/latest" -->
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
/*
*/
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