<template>
    <div class="task" :class="stateClass">

        <h3>{{ task.name }}</h3>

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
    .task {
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

    .pending {
        border-left: 12px solid #B73229;
        background-color: rgb(215,25,33);
    }

    .done {
        border-left: 12px solid rgb(252, 208, 120);;
        background-color: rgb(255, 191, 63);
        color: rgb(215,25,33);
    }

    .posiImgCard {
        display: flex;
        align-items: flex-end;
    }

    .posiTextImgCard {
        display: flex;
        color: rgb(255, 191, 63);
        margin-left: 8%;
        font-size: 120%;
    }

</style>