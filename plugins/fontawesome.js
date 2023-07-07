import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faCaretDown,
  faArrowRight,
  faInfo,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faMapMarkerAlt,
  faCaretDown,
  faArrowRight,
  faInfo,
  faCheck,
  faTimes,
  faDev,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram
);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
