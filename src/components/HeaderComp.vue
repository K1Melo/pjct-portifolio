<template>
    <header id="header">
        <p class="theme">About me</p>
        <p class="theme">Projects</p>
        <p class="theme">Certificates</p>
        <p class="theme">Studies</p>
        <p class="theme">Contact</p>
    </header>
    <div class="id">

    </div>
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

.id {
    height: 100vh;
}
</style>