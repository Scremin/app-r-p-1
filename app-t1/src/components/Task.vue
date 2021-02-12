<template>
    <div class="task" :class="stateClass">

        <h3 class="posiTextCard">{{ task.name }}</h3>

        <v-img height="15%" :src="task.pic" class="posiImgCard">

            <div class="posiTextImgCard">
                <p>{{ task.conteudo }}</p>
            </div>

        </v-img>

    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        stateClass() {
            return  {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task { /* main task */
        box-sizing: border-box;
        width: 22%;
        height: 250px;
        padding: 10px;
        border-radius: 8px;
        font-size: 100%;
        font-weight: 300;
        cursor: pointer;
        user-select: none;

        display: flex;
        flex-direction: column; /* Coluna com 3 elementos. */
        justify-content: center;
        align-items: center;
    }

    .pending { /* classe atribuída dinamicamente via form */
        border-left: 6px solid #da4237;
        background-color: rgb(215,25,33);
    }

    .done { /* classe atribuída dinamicamente via form */
        border-left: 6px solid rgb(252, 208, 120); /* cor lateral */
        background-color: rgb(255, 191, 63); /* cor principal do card */
        color: rgb(215,25,33); /* cor título */
    }

    .posiTextCard { /* relativo ao texto principal do card */
        margin: 10px;
    }

    .posiImgCard { /* relativo à foto */
        display: flex;
        align-items: flex-end; /* conteúdo ~texto~ na parte de baixo da foto */

        border-top-right-radius: 18px;
        border-bottom-right-radius: 18px;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
    }

    .posiTextImgCard { /* relativo ao que está dentro da foto */
        display: flex;
        margin-left: 8%;
        font-size: 120%;

        color: rgb(255, 191, 63); /* cor do texto dentro da foto */
    }

</style>