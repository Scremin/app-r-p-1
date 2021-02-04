<template>
    <v-content>
        <div class="Main panel2">
            
            <div class="classeB panel">
                
                <Carousel
                class="classeCarousel"
                />

                <ConteudoMain
                class="classeCardInf"
                />

                <NoticeCard
                class="classeCardInf"
                />
                
            </div>

            <div class="classeC panel">
                <CompCard
                />
            </div >

        </div>
    </v-content>
</template>

<script>
/* classe C (page right)
            <div class="classeC panel">
                <button class="classe2">Nossos Produtos</button>
                <button class="classe2">Nossos Produtos</button>
                <button class="classe2">Nova linha3</button>
            </div>
*/
import Carousel from '@/widgets/carousel'
import CompCard from '@/components/CompCard'
import ConteudoMain from '@/components/ConteudoMain'
//import TesteCard from '@/components/TesteCard'
import NoticeCard from '@/components/noticeCard'

  export default {
    name: 'MainHome',
    
    components: {
        Carousel,
        CompCard,
        ConteudoMain,
        //TesteCard,
        NoticeCard
    },

    data() {
        return {

        }
    }
  }
</script>

<style scoped>

.panel {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.panel2 {
    /* [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color] */
    box-shadow: 3px 2px 50px 10px rgb(255, 191, 63);
}

.Main {
    /*Linha com 3 items. Linhas espaçadas por space-around.*/
    display: flex;
    /*flex-direction: column;*/

    justify-content: center;
    justify-items: center;
    /*align-content: center;*/
    align-items: center;
    /*flex-wrap: wrap;*/

    height: 100%;
    width: 98%;

    margin: 1%;
    padding: 1%;

    /*border: solid green;*/

    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;

}

.classeB {
    display: flex;
    flex-direction: column;
    
    /*justify-content: center;*/
    /*align-content: start;*/

    /*align-items: center;*/
    /*flex-wrap: wrap;*/ /*QUEBRAR LINHA -> Nessa caso, adicionar coluna para qnt houver overflow.*/

    height: 100%;
    width: 72%;
    padding: 1%;
    margin: 1%;

    /*border: solid yellow;*/
    background-color: rgb(255, 191, 63);

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.classeCarousel {
    display: flex;
    /*flex-direction: column;*/
    
    /*justify-content: center;*/
    /*align-content: start;*/

    /*align-items: center;*/
    /*flex-wrap: wrap;*/ /*QUEBRAR LINHA -> Nessa caso, adicionar coluna para qnt houver overflow.*/
    /*flex-flow: wrap;*/

    height: 10%;
    width: 98%;
    padding: 0.4%;
    margin: 1%;

    /*border: solid yellow;*/
    background-color: rgb(255, 191, 63);

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.classeCardInf {
    display: flex;

    /*height: 20%;*/
    width: 98%;
    padding: 0.4%;
    margin: 1%;
}

.regiaoB_baixa {
    display: flex;

    flex-flow: wrap;
    padding: 0.1%;

    border: solid red;

    height: 100%;
}

.classeA {
    display: flex;

    flex-direction: column;
    /*justify-content: center;
    
    align-items: center;*/
    /*align-content:space-around;*/

    /*flex-flow: wrap;*/

    height: 30%;
    width: 40%;
    /*padding: 10%;*/
    margin: 1%;

    border: solid rgb(236, 4, 159);
    background-color: rgb(34, 30, 21);
}

.classeC {
    display: flex;
    flex-direction: column;

    /*justify-content: start; /* CONTEUDO DENTRO DA REGIÃO AZUL. */
    padding: 1%;

    /*align-items: center;*/
    /*align-content:space-around;*/

    height: 100%;
    width: 28%;
    /*padding: 10%;*/
    margin: 1%;

    /*border: solid blue;*/

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.classe2 {
    display: flex;
    
    justify-content: center;
    align-items: center;

    width: 100%;
    /*height: 10%;*/
    /*padding: 10%;*/
    margin: 1%;

    /*border: solid red; /* TESTE DE POSICIONAMENTO */
    background-color: rgb(255, 191, 63);
}

.form-aux {
    height: 100%;
    align-self: center;
}

.form-element {
    /*outline: none;*/
    font-size: 1.8rem;

    border: 1px solid #FFF;
    /*padding: 5px 10px 8px;*/
    padding: 25%;
    width: 100%;
    height: 100%;

    color: rgba(83, 61, 61, 0.897);
}

button.form-element {
    background-color: rgba(255, 255, 255, 0.4);
    border-top-right-radius: 58px;
    border-bottom-right-radius: 58px;
    border-top-left-radius: 58px;
    border-bottom-left-radius: 58px;
    /*margin-block-end: 10px;*/
}
</style>