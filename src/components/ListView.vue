<template>
  <v-app id="inspire">
    <v-card class="mx-auto" width="90%">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="(card, index) in cards"
            :key="card.id"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                v-if="card.checked"
                :src="card.src"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.0)"
                height="200px"
              >
                <v-card-title
                  v-text="card.title"
                  class="subtitle-1"
                  :class="card.flex === 6 ? 'black--text' : 'white--text'"
                ></v-card-title>
              </v-img>
              <v-img
                v-else
                :src="card.src"
                gradient="to bottom, rgba(249,215,28,.1), rgba(0,0,0,.0)"
                height="200px"
              >
                <v-card-title
                  v-text="card.title"
                  class="subtitle-1"
                  :class="card.flex === 6 ? 'black--text' : 'white--text'"
                ></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon
                  small
                  :style="card.checked ? 'color:red' : 'color:gray'"
                  @click="$emit('love', index)"
                  class="pr-2"
                  >mdi-heart</v-icon
                >
                <v-icon
                  small
                  color="blue-grey darken-2"
                  class="pr-2"
                  @click="Modify(index)"
                >
                  mdi-message-text
                </v-icon>
                <v-icon
                  small
                  color="blue-grey darken-2"
                  @click="Delete(index, card)"
                >
                  mdi-minus
                </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
    },
  },
  data() {
    return {

    };
  },
  created: function () {
    console.log("view", this.cards);
  },
  methods: {
    Delete(index) {
      this.$emit("DELETE", index);
    },
    Modify(index) {
      this.$emit("MODIFY", index);
    },
  },
};
</script>