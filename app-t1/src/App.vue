<template>
  <div>
    <Topo/>
    <v-app>
      <MainMenu/>
      <v-main class="class_position">
        <ColsMain/>
        <BodyMain/>
      </v-main>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import Topo from '@/components/Topo'
import MainMenu from '@/components/MainMenu'
import BodyMain from '@/components/BodyMain'
import Footer from '@/components/Footer'
import ColsMain from '@/components/3-cols-main'

export default {
  name: 'App',

  components: {
    Topo,
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

<style scoped>
.class_topo_app {
  display: flex;

  margin-top: 10%;
  border: solid violet;
}
.class_position {
  display: flex;
  /*flex-direction: column;*/

  border: solid red;
}
</style>
