<template>
    <footer>
        <div class="footer-medias">
            <img src="../assets/github.svg" alt="">
            <img src="../assets/linkedIn-circle.svg" alt="">
            <img src="../assets/linkedIn-circle.svg" alt="">
        </div>
    </footer>
</template>

<style>

footer {
    height: 30vh;
    background-image: url("../assets/footer-img.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-medias {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

img {
    width: 20%;
}

</style>