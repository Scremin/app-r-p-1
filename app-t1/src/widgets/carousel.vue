<template>
    <div class="ajusteCarousel">
        <v-carousel 
            hide-delimiters 
            height="100%"
            cycle
            interval="5000"
            border-top-right-radius="8px"
            border-bottom-right-radius="8px"
            border-top-left-radius="8px"
            border-bottom-left-radius="8px"
        >
            <v-carousel-item
                v-for="(item,i) in fotos"
                :key="i"
                :src="item.src"
            >
            <v-row 
                class="fill-height"
                align="center" 
                justify="center"
            >
                <span>{{ item.title }}</span>
            </v-row>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
/* transição carousel

                transition="fade-transition"
                reverse-transition="fade-transition"
*/
export default {
    data() {
		return {
			fotos: [
				{ src: require("@/assets/imgCapaP.jpg"), title: "Você está preparada(o) para o seu novo negócio?" },
				{ 
                    src: require("@/assets/imgCapaP.jpg"), 
                    title: "Já conhece o produto que está revolucionando a maneira como nos alimentamos?" 
                }
				//{ src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
				//{ src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg '}
			]
		}
	}
}
</script>

<style>
.ajusteCarousel {
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    margin-block-end: 2%;

    border-top-right-radius: 58px;
    border-bottom-right-radius: 58px;
    border-top-left-radius: 58px;
    border-bottom-left-radius: 58px;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.75);
}
</style>