<template>
    <v-content>
        <div class="Main panel">

            <div class="classeA panel">
                <button class="classe2">Trabalhe Conosco</button>
                <button class="classe2">Trabalhe Conosco</button>
                <button class="classe2">Trabalhe Conosco</button>

            </div>

            <div class="classeB panel">
                <button class="classe2">Quem Somos</button>
                <button class="classe2">Quem Somos</button>
                <button class="classe2">Trabalhe Conosco</button>
                <button class="classe2">Trabalhe Conosco</button>
                <button class="classe2">Quem Somos</button>
                <button class="classe2">Quem Somos</button>
            </div>

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
    align-content: space-around;
    
    align-items: space-around;
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
    
    /*justify-content: center;*/
    /*align-content: start;*/

    /*align-items: center;*/
    /*flex-wrap: wrap;*/ /*QUEBRAR LINHA -> Nessa caso, adicionar coluna para qnt houver overflow.*/
    flex-flow: wrap;

    height: 90%;
    width: 50%;
    /*padding: 10%;*/
    margin: 1%;

    border: solid yellow;
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