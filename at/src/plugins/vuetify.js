import Vue from "vue";
import Vuetify, { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.yellow.darken1,
        confirm: colors.lightGreen.darken1,
        edit: colors.lightGreen.darken1,
        cancel: colors.red.darken1,
        delete: colors.red.darken1,
      },
    },
  },
});
