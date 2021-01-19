<template>
    <v-app-bar
    color="rgba(1, 1, 1, 0.8)"
    app
    :collapse-on-scroll="!collapseOnScroll"
    :collapse="!collapseOnScroll"
    dark
    scroll-target="#scrolling-techniques-6"
    >
        <v-bottom-navigation
            class="position-menu"
            :value="value"
            color="red"
        >
            <v-img
            class="position-item-menu"
            contain
            :src="require('@/assets/ImgPodebater.png')"
            transition="scale-transition"
            width="10"
            height="60"
            />

            <v-btn
                target="_blank"
                text
                class="position-item-menu"
            >
                <span class="mr-2">HOME</span>
                <v-icon>mdi-home-variant</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
                class="position-item-menu"
            >
                <span class="mr-2">DEBATEDORES</span>
                <v-icon>mdi-boxing-glove</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
                class="position-item-menu"
            >
                <span class="mr-2">O QUE FAZEMOS?</span>
                <v-icon>mdi-comment-question</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
                class="extra_espaco_1 position-item-menu"
            >
                <span class="mr-2">VEM DEBATER COM A GENTE</span>
                <v-icon>mdi-comment-plus-outline</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                target="_blank"
                text
                class="position-item-menu"
            >
                <v-icon>mdi-facebook</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
                class="position-item-menu"
            >
                <v-icon>mdi-instagram</v-icon>
            </v-btn>

            <v-btn
                target="_blank"
                text
                class="position-item-menu"
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
    //<v-img class="mr-2">{{ logo }}</v-img>
    data() {
        return {
            collapseOnScroll: true,
			logo: [
                { src: require("@/assets/ImgPodebater.png") }
            ]
        }
    }
  }
/*
*/
</script>

<style>
.position-menu {
    margin-top: 40px;

    border-top-right-radius: 38px;
    border-bottom-right-radius: 38px;
    border-top-left-radius: 38px;
    border-bottom-left-radius: 38px;

}

.position-item-menu {
    margin-top: 8px;
}

.extra_espaco_1 {
    margin-left: 1%;
}
</style>