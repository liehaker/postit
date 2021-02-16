<template>
  <v-container>
    <WriteButton @em_write="writebutton" />
    <ListView
      v-if="cards.length > 0 && write === false"
      :cards="cards"
      @love="love"
      @DELETE="Delete"
      @MODIFY="Modify"
    />
    <ListAdd v-else @WRITE="WriteEnd" :card="{ modify, index, title }" />
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
      modify: false,
      index: 0,
      title: "",
      write: false,
      cards: [],
    };
  },
  computed: {},
  methods: {
    writebutton() {
      this.modify = false;
      this.write = true;
    },
    WriteEnd(m, index, title) {
      let cflex = 6;
      if (title.length > 10) cflex = 12;

      if (m) {
        this.cards[index].title = title;
        console.log("Write-1", m, index, this.cards[index].title);
      } else {
        this.cards.push({
          id: Math.random(),
          title: title,
          src:
            cflex === 12
              ? "https://cdn.vuetifyjs.com/images/cards/house.jpg"
              : "",
          flex: cflex,
          checked: false,
        });
      }

      this.write = false;
      this.modify = false;

      this.index = 0;
      this.title = "";
    },
    love(id) {
      this.cards[id].checked = !this.cards[id].checked;
    },
    Delete(id) {
      this.cards.splice(id, 1);
    },
    Modify(index) {
      this.index = index;
      this.title = this.cards[index].title;

      this.write = true;
      this.modify = true;
    },
  },
};
</script>

<style>
</style>