<template>
    <v-content>
        <div class="Main panel">

            <div class="classe1">
                <div class="">
                    <button class="panel classe2">Quem Somos
                        <hr class="form-aux">
                    </button>
                </div>
            </div>

            <div class="classe1">
                <div class="classe2">
                    <button class="form-element">Trabalhe Conosco</button>
                </div>
            </div>

            <div class="classe1">
                <div class="classe2">
                    <button class="form-element">Nossos Produtos</button>
                </div>
            </div>

        </div>
    <v-content>
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
    display: flex;
    /*flex-direction: column;*/
    justify-content: center;
    align-items: space-around;
    /*flex-wrap: wrap;*/
    align-content: space-around;

    height: 90%;
    width: 100%;

    border: solid green;
    /*background: linear-gradient(to right, rgb(8, 80, 120), rgb(133, 216, 206));*/

    box-shadow: 0 2px 10px rgba(220, 240, 240, 0.35);
}

.classe1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*align-content:space-around;*/

    height: 90%;
    width: 100%;
    /*padding: 10%;*/
    margin: 10px;

    border: solid yellow;
}

.classe2 {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    /*height: 10%;*/
    /*padding: 10%;*/
    /*margin: 10%;*/

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