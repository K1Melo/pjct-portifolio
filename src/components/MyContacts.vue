<template>
    <div class="contact-page">
        <div class="contact-box">
            <div class="left-ctt"></div>
            <div class="right-ctt">
                <h3 style="color: #7C61E8; font-weight: 100; text-align: center;"><span style="color: #FFFFFF; ">04</span>
                    Contact me</h3>
                <input type="text" class="field" placeholder="Your Name">
                <input type="email" class="field" placeholder="example@gmail.com">
                <input type="text" class="field" placeholder="(XX) XXXXX-XXXX">
                <textarea class="field area" placeholder="Message"></textarea>
            </div>
        </div>
    </div>
</template>

<style>
.contact-page {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px 100px;
    width: 100%;
    height: 100vh;
}

.contact-page:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://images7.alphacoders.com/133/1337527.png") no-repeat center;
    background-size: cover;
    z-index: -1;
    filter: blur(25px);

}

.contact-box {
    filter: blur(0);
    width: 80%;
    height: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(60deg, #0a0a0a -80.88%, #111111 100%);
    animation: bgAnimatedGradient 15s infinite linear;
}

.left-ctt {
    user-select: none;
    height: 100%;
    background: url("https://images7.alphacoders.com/133/1337527.png") no-repeat center;
    background-size: cover;
}

.right-ctt {
    user-select: none;

    padding: 25px 40px;

    h3 {
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

}

.field {
    width: 100%;
    padding: 0.5rem 1rem;

    outline: none;
    background-color: #2121210b;
    border: .2px solid #4c4c4c05;
    border-bottom: 2px solid #4c4c4c24;

    font-size: 1rem;
    margin-bottom: 22px;
    transition: .3s;
    border-radius: 10px;
}

.field:hover {
    background-color: #00000024;
}

.field:focus {
    background-color: #4c4c4c24;
    border-bottom: 2px solid rgba(124, 97, 232, 0.5)
}

.area {
    min-height: 30vh;
}

@media screen and (max-width: 880px) {
    .contact-box {
        grid-template-columns: 1fr;
    }

    .left-ctt {
        display: none;
    }
}
</style>