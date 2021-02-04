<template>
    <v-row class="ajusteNoticeCard">
      <v-card>
        <v-img
          height="8%"
          :src="require('@/assets/imgLogo1.jpg')"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-ear-hearing</v-icon>
            </v-btn>

            <v-toolbar-title class="title white--text pl-0">
              Conteúdo Recente
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-message-bulleted</v-icon>
            </v-btn>
          </v-app-bar>
        </v-img>

          <v-card class="ajusteInterno mx-auto" height="400px" width="50%">
              <v-img  class="white--text align-end" height="200px" width="100%" :src="require('./img_test_card1.jpg')"></v-img>
              <v-card-title class="pb-0">Web Scraping + Software Desktop</v-card-title>
              <v-card-text>
              <br/>
              <div>Web Scraping é a coleta de dados, mineração ou extração de dados de sites existentes na web que permite converter tais dados em informação útil. O resultado da coleta pode ser exibido e utilizado de várias formas.</div>
                  </v-card-text>
              <v-col class="text-right">
                  <v-btn icon>
                      <i class="fa fa-angle-right fa-3x"></i>
                  </v-btn>
              </v-col>
          </v-card>

          <v-card class="ajusteInterno mx-auto" height="400px" width="30%">
              <v-img  class="white--text align-end" height="200px" width="50%" :src="require('./img_test_card1.jpg')"></v-img>
              
              <v-card-title class="pb-0">Web Scraping + Software Desktop (teste)</v-card-title>
              
              <v-card-text>
                <br/>
                <div>Web Scraping é a coleta de dados, mineração ou extração de dados de sites existentes na web que permite converter tais dados em informação útil. O resultado da coleta pode ser exibido e utilizado de várias formas.</div>
              </v-card-text>
              
              <v-col class="text-right">
                  <v-btn icon>
                      <i class="fa fa-angle-right fa-3x"></i>
                  </v-btn>
              </v-col>
          </v-card>
        
      </v-card>
    </v-row>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'Adm1',
          message: `Tenha calma, jovem. Logo logo.. (msg teste)`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John',
          message: 'Fala, quando começam os debates? (msg teste)',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'Adm2',
          message: 'Sejam bem-vinda(o)s à nossa página. (msg teste)',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }),
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
</style>