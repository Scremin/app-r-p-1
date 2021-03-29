<template>
    <v-row class="ajusteNoticeCard">
      <v-card>
        <v-img
          height="60"
          :src="require('@/assets/imgLogo1.jpg')"
          width="10"
          >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >

            <v-btn
              color="white"
              icon
            >
              <v-icon color="black">mdi-ear-hearing</v-icon>
            </v-btn>

            <v-toolbar-title class="pl-0">
              Conteúdo Recente
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon color="black">mdi-message-bulleted</v-icon>
            </v-btn>
          </v-app-bar>
        </v-img>

        <div class="task-grid">
          <template v-if="tasks.length">
            <Task v-for="task in tasks" :key="task.name" :task="task"></Task>
          </template>
          <p v-else class="no-task">Não há conteúdo recente. :(</p>
        </div>

      </v-card>
    </v-row>
</template>

<script>
import Task from './Task.vue'

export default {
  components: { Task },
  data() {
      return {
        pending: true,
        tasks: [
            {
                name: 'JÁ DEBATEU CONOSCO?',
                pending: false,
                conteudo: "Uma ou duas linhas?",
                pic: require('@/assets/imgLogo1.jpg')
            },
            {
                name: 'CONHECE O TESTE?',
                pending: true,
                conteudo: "Uma ou duas linhas?",
                pic: require('@/assets/imgCapaP.jpg')
            },
            {
                name: 'DEBATE NA COVILHÃ?',
                pending: false,
                conteudo: "Elevadores? Licitações?",
                pic: require('@/assets/imgCapaP.jpg')
            },
            {
                name: 'teste4',
                pending: true,
                conteudo: "uma ou duas linhas?",
                pic: require('@/assets/imgCapaP.jpg')
            },
            {
                name: 'teste5',
                pending: true,
                conteudo: "uma ou duas linhas?",
                pic: require('@/assets/imgCapaP.jpg')
            },
        ]
      }
  }
}
</script>

<style scoped>
.ajusteNoticeCard {
    display: flex;

    /*justify-content: center;
    justify-items: center;
    align-items: center;*/

    /*height: 1%;
    width: 1%;*/
}

.ajusteInterno {
  display: flex;
  /*flex-direction: column;*/
  align-items: start;
  flex-wrap: wrap;

  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
  margin-top: 2%;
}

.task-grid {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #AAA;
  font-size: 7rem;
}
</style>