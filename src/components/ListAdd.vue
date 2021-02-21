<template>
  <v-app id="inspire1">
    <v-card class="mx-auto" width="90%">
      <v-form>
        <v-container>
          <v-row dense>
            <v-col :cols="12">
              <v-card>
                <v-img
                  src=""
                  class="white--text align-end"
                  gradient="to bottom, rgba(249,215,28,.1), rgba(0,0,0,.0)"
                  height="200px"
                >
                  <v-col cols="12">
                    <v-textarea v-model="textValue" color="teal">
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
import Constant from "@/Constant";

export default {
  data() {
    return {
      textValue: "",
    };
  },
  created() {
    console.log("Create", this.$store.state.index);
    this.textValue = this.$store.state.modify
      ? this.$store.state.cards[this.$store.state.index].title
      : "";
  },
  methods: {
    Write() {
      if (this.textValue.length === 0) alert("입력해주세요");
      else {
        this.$store.commit(Constant.WRITEITEM, {
          i: this.$store.state.index,
          t: this.textValue,
        });

        this.$store.commit(Constant.WRITTING, false);
      }
    },
  },
};
</script>
