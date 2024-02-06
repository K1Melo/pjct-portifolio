import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

window.addEventListener("scroll", () => {
    let header = document.getElementById('header')
    let aboutMe = document.getElementById('abt')
    let projects = document.getElementById('pjct')
    let certificates = document.getElementById('ctf')
    let studies = document.getElementById('std')
    let contact = document.getElementById('ctt')

    if (window.scrollY > (window.innerHeight * 0.5)) { header.style.opacity = "1"; aboutMe.style.color = "#7B88FF"; } else { header.style.opacity = "0"; aboutMe.style.color = "#BDBDBD"; }
    if (window.scrollY > (window.innerHeight * 1.5)) { projects.style.color = "#7B88FF"; aboutMe.style.color = "#BDBDBD" } else { projects.style.color = "#BDBDBD"; }
    if (window.scrollY > (window.innerHeight * 4)) { certificates.style.color = "#7B88FF"; projects.style.color = "#BDBDBD" } else { certificates.style.color = "#BDBDBD"; }
    if (window.scrollY > (window.innerHeight * 5)) { studies.style.color = "#7B88FF"; certificates.style.color = "#BDBDBD" } else { studies.style.color = "#BDBDBD"; }
    if (window.scrollY > (window.innerHeight * 6.5)) { contact.style.color = "#7B88FF"; studies.style.color = "#BDBDBD" } else { contact.style.color = "#BDBDBD"; }

})