<template>
    <header id="header">
        <p id="abt" class="theme">About me</p>
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
    padding: 10px 0;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: #2B2B2B;
    position: fixed;
    top: 0;

    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.theme {
    color: #BDBDBD;
}

#abt, #pjct, #ctf, #std, #ctt {
    transition: color 0.3s ease-in;
}

</style>