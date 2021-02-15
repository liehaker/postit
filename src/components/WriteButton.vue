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
export default {
  methods: {
    sendEvent: function () {
      this.$emit("em_write");
    },
  },
};
</script>

<style>
</style>