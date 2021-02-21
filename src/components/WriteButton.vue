<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-btn icon @click="sendEvent">
        <v-icon large color="red darken-2"> mdi-plus </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import Constant from "@/Constant";

export default {
  methods: {
    sendEvent: function () {
      this.$store.commit(Constant.WRITTING, true);
    },
  },
};
</script>
