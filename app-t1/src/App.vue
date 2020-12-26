<template>
  <v-app>
    <v-main>
      <MainMenu/>
      <ColsMain/>
      <BodyMain/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from '@/components/MainMenu'
import BodyMain from '@/components/BodyMain'
import Footer from '@/components/Footer'
import ColsMain from '@/components/3-cols-main'

export default {
  name: 'App',

  components: {
    MainMenu,
    BodyMain,
    ColsMain,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
