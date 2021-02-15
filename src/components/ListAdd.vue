<template>
  <v-app id="inspire1">
    <v-card class="mx-auto" width="90%">
      <v-form>
        <v-container>
          <v-row dense>
            <v-col :cols="card.flex">
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(249,215,28,.1), rgba(0,0,0,.0)"
                  height="200px"
                >
                  <v-col cols="12">
                    <v-textarea v-model="card.title" color="teal">
                      <template v-slot:label>
                        <div>Typing</div>
                      </template>
                    </v-textarea>
                  </v-col>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-icon large color="orange darken-2" @click="Write">
                    mdi-arrow-up-bold-box-outline
                  </v-icon>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-app>
</template>

<script>
export default {
  props: {
    index: null,
    modify: {
      type: Boolean,
      default: false,
    },
    card: {
      id: -1,
      title: "",
      src: "",
      flex: "12",
      checked: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    Write() {
      if (this.card.title.length === 0) alert("입력해주세요");
      else {
        console.log("add", this.modify, this.index, this.card);
        this.$emit("WRITE", this.modify, this.index, this.card);
      }
    },
  },
};
</script>

<style>
</style>