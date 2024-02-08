<template>
    <header id="header">
        <p id="abt" class="theme" @click="scrollTo(0.9)">About</p>
        <p id="pjct" class="theme" @click="scrollTo(1.9)">Projects</p>
        <p id="ctf" class="theme" @click="scrollTo(4.5)">Certificates</p>
        <p id="std" class="theme" @click="scrollTo(5.5)">Studies</p>
        <p id="ctt" class="theme" @click="scrollTo(7.15)">Contact</p>
    </header>
</template>

<script>

export default {
    methods: {
        scrollTo(i) {
            window.scroll({top: innerHeight * i, behavior: "smooth"})
        }
    }
}

</script>

<style>
header {
    user-select: none;
    width: 100%;
    padding: 15px 0;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: #2B2B2B;
    position: fixed;
    top: 0;
    z-index: 99;

    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.theme {
    color: #BDBDBD;
    cursor: pointer;
}

.theme:hover {
    transform: scale(1.05);
    opacity: 0.8;
}

#abt,
#pjct,
#ctf,
#std,
#ctt {
    transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 650px) {
    header {
        justify-content: start;
        overflow-x: scroll;
    }

    .theme {
        font-size: 15px;
        padding: 10px 8%;
    }
}
</style>