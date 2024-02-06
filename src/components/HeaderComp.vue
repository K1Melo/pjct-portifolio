<template>
    <header id="header">
        <p id="abt" class="theme">About</p>
        <p id="pjct" class="theme">Projects</p>
        <p id="ctf" class="theme">Certificates</p>
        <p id="std" class="theme">Studies</p>
        <p id="ctt" class="theme">Contact</p>
    </header>
</template>

<script>

export default {

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
}

#abt,
#pjct,
#ctf,
#std,
#ctt {
    transition: color 0.3s ease-in;
}

@media only screen and (max-width: 650px) {
    header {
        justify-content: start;
        overflow: scroll;
    }

    .theme {
        font-size: 15px;
        padding: 10px 8%;
    }
}
</style>