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
    <ListAdd v-else @WRITE="Write" :card="card" :modify="modify" :index="index" />
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
      modify: false,
      write: false,
      cards: [],
      card: {
        id: 0,
        title: "",
        src: "",
        flex: "12",
        checked: false,
      },
    };
  },
  methods: {
    writebutton() {
      this.write = true;
      this.modify = false;
    },
    Write(m, index, card) {
      console.log("Write", m, index, card);

      let cflex = 6;
      if (card.title.length > 10) cflex = 12;

      if (m) {
        this.cards[index] = card;
        console.log("Write-1", m, index, this.cards[index]);
      } else {
        console.log("Write-2", m, index, this.cards[index]);
        this.cards.push({
          id: Math.random(),
          title: card.title,
          src:
            cflex === 12
              ? "https://cdn.vuetifyjs.com/images/cards/house.jpg"
              : "",
          flex: cflex,
          checked: false,
        });
      }

      this.write = false;
      this.modify = false
      // this.card = null
    },
    love(id) {
      console.log("love");
      this.cards[id].checked = !this.cards[id].checked;
    },
    Delete(id) {
      console.log("Delete");
      this.cards.splice(id, 1);
    },
    Modify(index) {
      console.log("Modify", this.modify, index);
      this.index = index;
      this.card = this.cards[index]
      this.write = true;
      this.modify = true;
    },
  },
};
</script>

<style>
</style>