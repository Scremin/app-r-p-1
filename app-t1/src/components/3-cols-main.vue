<template>
    <v-content>
        <div class="Main panel">

            <div class="classeA panel">
                <button class="classe2">Teste frases</button>
                <button class="classe2">Qualquer frase</button>
                <button class="classe2">Teste de posicionamento</button>
            </div>

            <v-card class="classeB panel overflow-hidden">

                <v-app-bar
                    absolute
                    color="#43a047"
                    dark
                    shrink-on-scroll
                    src="https://picsum.photos/1920/1080?random"
                    scroll-target="#scrolling-techniques-2"
                    scroll-threshold="20"
                >

                    <template v-slot:img="{ props }">
                        <v-img v-bind="props" gradient="to top right, rgba(55,236,186,.7), lightblue"></v-img>
                    </template>

                    <v-btn icon>
                        <v-icon>mdi-information</v-icon>
                    </v-btn>

                    <v-toolbar-title>PODEBATER - ASSUNTO 1</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-app-bar>

                <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600" width="700">
                    <v-container class="position-items-card-center">
                        
                        <fieldset class="fieldset-border">
                            <legend class="legend-border">Teste</legend>
                        </fieldset>
                        
                        <p class="classe3">
                            <span>Nome</span>
                            <br />
                            <span>Nossos Produtos one</span>
                        </p>
                        
                        <button class="classe3">Nossos Produtos</button>
                        <button class="classe3">Nossos Produtos</button>
                        <button class="classe3">Nossos Produtos</button>
                        <button class="classe3">Nossos Produtos</button>
                        <button class="classe3">Nossos Produtos</button>
                        <button class="classe3">Nossos Produtos podem ter um grande nome</button>
                        <button class="classe3">Nossos Produtos</button>
                        <button class="classe3">Nossos Produtos podem ter um grande nome</button>
                    </v-container>
                </v-sheet>

            </v-card>

            <div class="classeC panel">
                <button class="classe2">Nossos Produtos</button>
                <button class="classe2">Nossos Produtos</button>
                <button class="classe2">Nova linha3</button>
            </div>

        </div>
    </v-content>
</template>

<script>
  export default {
    name: 'MainHome',

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

.Main {
    /*Linha com 3 items. Linhas espaçadas por space-around.*/
    display: flex;
    /*flex-direction: column;*/

    /*justify-content: center;*/

    /*align-content: space-around;*/
    /*align-items: space-around;*/

    /*flex-wrap: wrap;*/

    height: 100%;
    width: 98%;

    margin: 1%;

    border: solid green;
    /*background: linear-gradient(to right, rgb(8, 80, 120), rgb(133, 216, 206));

    box-shadow: 0 2px 10px rgba(220, 240, 240, 0.35);*/
}

.classeB {
    display: flex;
    /*flex-direction: column;*/
    
    /*justify-content: left;*/
    /*align-content: start;*/

    /*align-items: center;*/
    /*flex-wrap: wrap;*/ /*QUEBRAR LINHA -> Nessa caso, adicionar coluna para qnt houver overflow.*/
    /*flex-flow: wrap;*/

    height: 90%;
    width: 50%;
    /*padding: 10%;*/
    margin: 1%;

    border: solid yellow;
}

.position-items-card-center{
    display: flex;
    flex-direction: column;
    
    margin-top: 22%;
    width: 100%;
}

.classeA {
    display: flex;

    flex-direction: column;
    /*justify-content: center;
    
    align-items: center;*/
    /*align-content:space-around;*/

    flex-flow: wrap;

    height: 90%;
    width: 25%;
    /*padding: 10%;*/
    margin: 1%;

    border: solid rgb(236, 4, 159);
}

.classeC {
    display: flex;
    flex-direction: column;

    justify-content: start; /* CONTEUDO DENTRO DA REGIÃO AZUL. */
    padding: 1%;

    align-items: center;
    /*align-content:space-around;*/

    height: 90%;
    width: 25%;
    /*padding: 10%;*/
    margin: 1%;

    border: solid blue;
}

.classe2 {
    display: flex;
    
    justify-content: center;
    align-items: center;

    width: 100%;
    /*height: 10%;*/
    /*padding: 10%;*/
    margin: 1%;

    border: solid red; /* TESTE DE POSICIONAMENTO */
}

.classe3 {
    display: flex;
    
    justify-content:flex-start;
    align-items: center;

    width: 100%;
    /*height: 10%;*/
    /*padding: 10%;*/
    margin: 1%;
    margin-top: 4%;

    border: solid red; /* TESTE DE POSICIONAMENTO */
    border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 16 / 
    0px 0px 2px 2px / 2px 2px 2px 2px round stretch;
    /*border-image-source: url("https://mdn.mozillademos.org/files/4127/border.png");*/
    /*border-image-slice: 16;*/
    /*border-image-repeat: stretch;*/ /* round ou repeat ou stretch*/
    /*border-image-width: 90%;*/
    border-image-outset: 6px; /* distância entre a borda e o retângulo interno à borda */
}

.fieldset-border {
  border: 1px groove #ddd !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 0 1.5em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

.fieldset-border .legend-border {
  font-size: 1.2em !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;
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