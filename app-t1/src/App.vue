<template>
  <div>
    <v-app id="app">
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
import MainMenu from '@/components/MainMenu' // dentro
//import BodyMain from '@/components/BodyMain'
import Footer from '@/components/Footer' // dentro
//import ColsMain from '@/components/3-cols-main'
import MainPage from '@/components/mainPage' // dentro

export default {
  name: 'App',

  components: {
    //Topo,
    MainMenu, // dentro
    //BodyMain,
    //ColsMain,
    Footer, // dentro
    MainPage // dentro
  },

  data: () => ({
    //
  }),
};
</script>

<style src="./style.scss" lang="scss" scoped />
