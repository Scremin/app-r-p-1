<template>
    <v-content>
        <div class="Main panel2">

            <div class="classeA panel">
                <button class="classe2">Teste frases</button>
                <button class="classe2">Qualquer frase</button>
                <button class="classe2">Teste de posicionamento</button>
            </div>

            <v-card class="classeB panel2 overflow-hidden">

                <v-app-bar
                    absolute
                    color="rgba(243, 6, 6, 0.829);"
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
                        
                        <fieldset class="fieldset-border">Esse aqui é o primeiro comentário...
                            <legend class="legend-border">Jorge</legend>
                        </fieldset>
                        
                        <button class="classe3">
                            ALERTA: O comentário x ultrapassou os limites de diálogo pre-definido
                        </button>
                        
                        <fieldset class="fieldset-border">
                            <legend class="legend-border">Osvald</legend>
                            Talvez o x seja y
                        </fieldset>

                        <fieldset class="fieldset-border">
                            <legend class="legend-border">Abigaiu</legend>
                            Acho que não é bem assim..
                        </fieldset>

                        <fieldset class="fieldset-border">
                            <legend class="legend-border">Marco</legend>
                            E como seria?
                        </fieldset>

                        <fieldset class="fieldset-border">
                            <legend class="legend-border">Antonio</legend>
                            diga você..
                        </fieldset>

                        <button class="classe3">Nossos Produtos podem ter um grande nome</button>
                    </v-container>
                </v-sheet>

            </v-card>

            <div class="classeC panel">
                <button target="_blank" class="classe4">Assunto 2</button>
                <button class="classe4">Assunto 3</button>
                <button class="classe4">Assunto 4</button>
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

.panel2 {
    /* [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color] */
    box-shadow: 3px 2px 50px 10px rgb(243, 6, 6);
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

    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;

    /*border: solid green;*/
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

    /*border: solid yellow;*/
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
    padding: 1%;
    margin: 1%;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    /*border: solid rgb(236, 4, 159);*/
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

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    /*border: solid blue;*/
    color: rgba(255, 255, 255, 0.9);
}

.classe2 {
    display: flex;
    
    justify-content: center;
    align-content: center;
    align-items: center;

    width: 100%;
    height: 100px;
    /*padding: 10%;*/
    margin: 1%;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    border: 1px groove red; /* TESTE DE POSICIONAMENTO */

    background-color: rgb(46, 46, 46);
}

.classe4 {
    display: flex;
    
    justify-content: center;
    align-items: center;

    width: 100%;
    /*height: 100%;*/
    /*padding: 10%;*/
    margin: 1%;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    border: 1px groove red; /* TESTE DE POSICIONAMENTO */

    background-color: rgb(46, 46, 46);
}

.classe3 {
    display: flex;
    
    justify-content:flex-start;
    align-items: center;

    /*width: 100%;*/
    /*height: 10%;*/
    /*padding: 10%;*/
    /*margin: 1%;*/
    /*margin-top: 4%;*/

    border: solid red; /* TESTE DE POSICIONAMENTO */
    margin: 1em 0 !important; /* topo=inferior direita=esquerda */
    
    /*border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 16 / 
    2px 2px 2px 2px / 2px 2px 2px 2px round stretch;*/
    
    border-image-source: url("https://mdn.mozillademos.org/files/4127/border.png");
    border-image-slice: 6;
    border-image-repeat: round stretch; /* round ou repeat ou stretch*/
    border-image-width: 2px 2px 2px 2px;
    border-image-outset: 2px 2px 2px 2px; /* distância entre a borda e o retângulo interno à borda */
}

.fieldset-border {
  border: 1px groove rgba(83, 61, 61, 0.2) !important;
  border-style: dashed !important;

  /*border-width: medium;
  border-color: rgba(83, 61, 61, 0.897);*/

  padding: 0 1.4em 1.4em 1.4em !important; /* topo direita inferior esquerda */
  /*margin: 0 0 1em 0 !important;*/ /* topo direita inferior esquerda */

  /*-webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;*/

    border-top-right-radius: 38px;
    border-bottom-right-radius: 38px;
    border-top-left-radius: 38px;
    border-bottom-left-radius: 38px;

}

.fieldset-border .legend-border {
  font-size: 1.2em !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px; /* topo=inferior direita=esquerda */
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