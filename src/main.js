import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {library} from "@fortawesome/fontawesome-svg-core";

import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

createApp(App)
    .use(Toast)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
