<template>
    <v-row class="ajusteNoticeCard">
      <v-card width="100%" height="100%">
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
              Notícias
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

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
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

    justify-content: center;

    /*height: 1%;
    width: 1%;*/
}
</style>