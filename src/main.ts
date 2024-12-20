import Vue, { createApp, type Plugin } from "vue";

import { FundingAcknowledgement, IconButton, CreditLogos, LocationSelector } from "@cosmicds/vue-toolkit";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BlazeStarNova from "./BlazeStarNova.vue";

import vuetify from "../plugins/vuetify";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { FocusTrap } from "focus-trap-vue";

import BottomSheet from "./BottomSheet.vue";
import BottomNovaSheet from "./BottomNovaSheet.vue";
import BottomUseSheet from "./BottomUseSheet.vue";

import SplashScreen from "./SplashScreen.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import GeolocationButton from "./GeolocationButton.vue";
import TimeDisplay from "./TimeDisplay.vue";
import DateTimePicker from "./DateTimePicker.vue";

import { WWTComponent, wwtPinia } from "@wwtelescope/engine-pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpen,
  faChevronDown,
  faClock,
  faGear,
  faInfo,
  faLocation,
  faLocationDot,
  faPlay,
  faPause,
  faXmark,
  faStop,
  faTimes,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBookOpen);
library.add(faChevronDown);
library.add(faClock);
library.add(faGear);
library.add(faInfo);
library.add(faLocation);
library.add(faLocationDot);
library.add(faPause);
library.add(faPlay);
library.add(faXmark);
library.add(faStop);
library.add(faTimes);
library.add(faVideo);

/** v-hide directive taken from https://www.ryansouthgate.com/2020/01/30/vue-js-v-hide-element-whilst-keeping-occupied-space/ */
// Extract the function out, up here, so I'm not writing it twice
const update = (el: HTMLElement, binding: Vue.DirectiveBinding) => el.style.visibility = (binding.value) ? "hidden" : "";

createApp(BlazeStarNova, {
  wwtNamespace: "vue-ds-template"
})
 
  // Plugins
  .use(wwtPinia as unknown as Plugin<[]>)
  .use(vuetify)

  // Directives
  .directive(
    /**
    * Hides an HTML element, keeping the space it would have used if it were visible (css: Visibility)
    */
    "hide", {
      // Run on initialisation (first render) of the directive on the element
      beforeMount(el, binding, _vnode, _prevVnode) {
        update(el, binding);
      },
      // Run on subsequent updates to the value supplied to the directive
      updated(el, binding, _vnode, _prevVnode) {
        update(el, binding);
      }
    })

  // Components
  .component("WorldWideTelescope", WWTComponent)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('bottom-sheet', BottomSheet)
  .component('bottom-nova-sheet', BottomNovaSheet)
  .component('bottom-use-sheet', BottomUseSheet)
  .component('icon-button', IconButton)
  .component('funding-acknowledgement', FundingAcknowledgement)
  .component('credit-logos', CreditLogos)
  .component('splash-screen', SplashScreen)
  .component('vue-date-picker', VueDatePicker)
  .component('geolocation-button', GeolocationButton)
  .component('location-selector', LocationSelector)
  .component('time-display', TimeDisplay)
  .component('date-time-picker', DateTimePicker)
  .component('focus-trap', FocusTrap)

  // Mount
  .mount("#app");
