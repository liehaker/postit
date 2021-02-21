<template>
  <v-container>
    <WriteButton />
    <ListView
      v-if="
        this.$store.state.cards.length > 0 &&
        this.$store.state.writting === false
      "
    />
    <ListAdd v-else />
  </v-container>
</template>

<script>
import WriteButton from "./WriteButton";
import ListView from "./ListView";
import ListAdd from "./ListAdd";

export default {
  components: {
    WriteButton,
    ListView,
    ListAdd,
  },
  data() {
    return {
      index: 0,
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>
