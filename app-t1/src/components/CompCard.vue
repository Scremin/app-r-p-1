<template>
  <v-card
    max-width="400"
  >

    <v-app-bar
      dark
      color="rgb(255, 191, 63)"
      class="posiAreaTotal"
    >
      <v-toolbar-title class="ajusteTitulo">O que ouvir?</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-podcast</v-icon>
      </v-btn>

    </v-app-bar>

    <div class="positionCards">
      <span>Região de posicionamento de podcast</span>
    </div>

  </v-card>
</template>

<style scope>
.ajusteTitulo {
   color: rgb(1, 1, 1);
}

.ajusteIcon {
  color: red; /* Não funcional */
}

.positionCards {
  padding: 4%;
}
</style>