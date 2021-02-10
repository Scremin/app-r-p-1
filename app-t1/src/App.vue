<template>
  <div>
    <v-app id="app" class="font-weight-bold">
      <MainMenu/>
      <v-main class="class_position">
        <MainPage/>
      </v-main>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
/* Página de Debate
        <ColsMain/>
        <BodyMain/>
*/
//import Topo from '@/components/Topo'
import MainMenu from '@/components/MainMenu'
//import BodyMain from '@/components/BodyMain'
import Footer from '@/components/Footer'
//import ColsMain from '@/components/3-cols-main'
import MainPage from '@/components/mainPage'

export default {
  name: 'App',

  components: {
    //Topo,
    MainMenu,
    //BodyMain,
    //ColsMain,
    Footer,
    MainPage
  },

  data: () => ({
    //
  }),
};
</script>

<style src="./style.scss" lang="scss" scoped />
