import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Importation des fichiers bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

//Importation du cœur et du composant
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//Importation des icônes spécifiques que vous voulez utiliser
import { faUser, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { fas } from '@fortawesome/free-solid-svg-icons'

//Ajout des icônes à la librairie 
library.add(fas) 

const app = createApp(App)

// Enregistrement global
app.component('font-awesome-icon', FontAwesomeIcon) 

app.use(router)

app.mount('#app')
