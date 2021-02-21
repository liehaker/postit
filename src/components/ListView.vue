<template>
  <v-app id="inspire">
    <v-card class="mx-auto" width="90%">
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="(card, index) in this.$store.state.cards"
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
                  class="subtitle-1"
                  :class="card.flex === 6 ? 'black--text' : 'white--text'"
                  v-text="card.title"
                ></v-card-title>
              </v-img>
              <v-img
                v-else
                :src="card.src"
                gradient="to bottom, rgba(249,215,28,.1), rgba(0,0,0,.0)"
                height="200px"
              >
                <v-card-title
                  class="subtitle-1"
                  :class="card.flex === 6 ? 'black--text' : 'white--text'"
                  v-text="card.title"
                ></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon
                  small
                  :style="card.checked ? 'color:red' : 'color:gray'"
                  class="pr-2"
                  @click="Love(index)"
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
import Constant from "@/Constant";

export default {
  props: {},
  data() {
    return {};
  },
  created: function () {},
  methods: {
    Delete(index) {
      this.$store.commit(Constant.DELETE, index);
    },
    Modify(index) {
      this.$store.commit(Constant.MODIFY, index);
    },
    Love(index) {
      this.$store.commit(Constant.LOVE, index);
    },
  },
};
</script>
