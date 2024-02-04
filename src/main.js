import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

window.addEventListener("scroll", () => {
    let header = document.getElementById('header')
    if(window.scrollY > (window.innerHeight / 1.5)) {
        header.style.opacity = "1"
    } else {
        header.style.opacity = "0"
    }
})
