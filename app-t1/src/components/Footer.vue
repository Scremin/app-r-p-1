<template>
    <v-footer color="rgba(1, 1, 1, 0.8)" class="backFooter" >
        
        <v-img class="mt-4" :src="require('@/assets/Asset5.png')"></v-img>

        <hr class="footers">

        <div>{{ nomeFooter }} &copy; {{ new Date().getFullYear() }}</div>

        <div class="footers">.</div>

        <v-spacer></v-spacer>

        <div><strong>Colaboradores e Parcerias</strong></div>
        <div>IMG</div>

        <v-btn target="_blank" text >
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>

    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            nomeFooter: 'PODEBATER',
            emailInserido: ''
        }
    },
    methods: {
        add() {
            this.emailInserido = ''
        }
    }
}
</script>

<style>

    .aux_img {

        margin-top: 2%;
        margin-left: 2%;
        margin-right: 2%;
        margin-block-end: 2%;

        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.75);
    }

    .backFooter {
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: 4%;
    }

    .footers {
        margin: 10px;
        color: rgba(255, 255, 255, 0.856);
    }

    hr {
        padding: 0px 220px;
    }

    .form-element {
        outline: none;
        font-size: 1.4rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: rgba(255, 255, 255, 0.897);
        margin-top: 10px;
    }

    input.form-element {
        width: 300px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: rgba(130, 185, 10, 0.4);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>
