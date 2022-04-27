import { capitalize } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'

const app = createApp({
    // template:`
    // <h1>Hola mundo</h1>
    // <p>desde app.js</p>
    // `

    data() {
        return {
            quote: 'Im batman',
            author: 'Bruce Wayne'
        }
    },

    methods: {
        changeQuote() {
            console.log('hola mundo');
            this.author = 'Carlos Muñoz'

            this.capitalize()
        },

        capitalize() {
            this.quote = this.quote.toUpperCase()
        },
    },
})

app.mount('#app')


