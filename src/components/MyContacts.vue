<template>
    <div class="contact-page">
        <div class="contact-box">
            <div class="left-ctt"></div>
            <div class="right-ctt">
                <h3 style="color: #7C61E8; font-weight: 100; text-align: center;"><span style="color: #FFFFFF; ">04</span>
                    Contact me</h3>
                <input type="text" class="field" placeholder="Your Name">
                <textarea class="field area" placeholder="Message"></textarea>
                <button type="submit" class="btn">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <span>Enviar</span>
                </button>
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
    background-attachment: fixed;
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

@media screen and (max-width: 912px) {
    .contact-box {
        grid-template-columns: 1fr;
    }

    .left-ctt {
        display: none;
    }
}

@media screen and (max-width: 700px) {
    .contact-box {
        width: 90%;
        height: 70%;
    }

    .right-ctt {
        width: 100%;

    }
}

button {
    width: 100%;
    font-family: inherit;
    font-size: 20px;
    background-color: rgb(21, 21, 21);
    color: rgb(255, 255, 255);
    padding: 0.7em 1em;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
}

button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
    animation: fly-1 0.8s ease-in-out infinite alternate;
}

button:hover svg {
    transform: translateX(-1em) rotate(45deg) scale(1.1);
}

button:hover span {
    transform: translateX(-.5em);
}

button:active {
    border: none;
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}
</style>