import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBag,
  faTimes,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

library.add(
  faBars,
  faShoppingBag,
  faTimes,
  faChevronRight,
  faInstagram,
  faTwitter,
  faFacebook
);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
