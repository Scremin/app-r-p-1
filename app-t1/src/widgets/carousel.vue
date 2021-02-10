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
                <span class="ajusteTituloCarousel">{{ item.title }}</span>
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
				{ src: require("@/assets/imgCapaP.jpg"), title: "Você está preparada(o) para um debate? Ouça!" },
				{ 
                    src: require("@/assets/imgCapaP.jpg"), 
                    title: "Sabe sobre o que falamos?" 
                }
				//{ src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
				//{ src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg '}
			]
		}
	}
}
</script>

<style scope>

/*.text-wrap*/

.ajusteCarousel {
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
    margin-block-end: 2%;

    border-top-right-radius: 58px;
    border-bottom-right-radius: 58px;
    border-top-left-radius: 58px;
    border-bottom-left-radius: 58px;

    font-size: 1.5rem;
    text-justify: wrap;

    display: flex;
    justify-content: center;


    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.75);
}

.ajusteTituloCarousel 
{

    font-size: 2em;
    font-style: bold;
    
    color: rgb(255, 191, 63);
}
</style>