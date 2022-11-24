import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import store from './store';
import components from "@/components/ui";
import directives from "@/directives";
import VueClipboard from "vue3-clipboard";

import myTranslation from "@/plagins/myTranslation.js";
import EmojiChenge from "@/plagins/EmojiChenge.js";

// import './assets/main.css'

const app = createApp(App)
app.use(VueClipboard, {
  autoSetContainer: true,
  appendToBody: true,
});

app.use(myTranslation);
app.use(EmojiChenge);
app.use(store);

app.use(createPinia())
app.use(router)

components.forEach(component => {
  app.component(component.name, component);
});

directives.forEach(directive => {
  app.directive(directive.name, directive);
});


app.mount('#app')
