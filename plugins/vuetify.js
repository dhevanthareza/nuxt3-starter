import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const appTheme = {
    dark: false,
    colors: {
      background: "#F9FBFD",
      surface: "#FFFFFF",
      primary: "#3621C2",
      "primary-darken-1": "#3700B3",
      secondary: "#03DAC6",
      "secondary-darken-1": "#018786",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };

  const vuetify = createVuetify({
    components,
    directives,
    ssr: false,
    theme: {
      defaultTheme: "appTheme",
      themes: { appTheme },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
