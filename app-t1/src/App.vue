<template>
  <v-app>
    <v-main>
      <MainMenu/>
      <BodyMain/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import BodyMain from '@/components/BodyMain'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    MainMenu,
    BodyMain,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
