<template>
    <div class="Main panel">

        <div class="panel">

            <button class="">Trabalhe Conosco</button>
            <button class="">Trabalhe Conosco</button>
            <button class="">Trabalhe Conosco</button>

        </div>

    </div>
</template>

<script>
  export default {
    name: 'Topo',

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
    width:100%;

    /*margin-top: 10%;*/
    padding: 4%;

    border: solid green;
    /*background: linear-gradient(to right, rgb(8, 80, 120), rgb(133, 216, 206));

    box-shadow: 0 2px 10px rgba(220, 240, 240, 0.35);*/
}
</style>