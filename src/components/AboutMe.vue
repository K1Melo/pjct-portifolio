<template>
    <div class="about-me">
        <div class="left-size">
            <div class="container">
                <h3 style="color: #7C61E8; font-weight: 100;"><span style="color: #FFFFFF;">01</span> About me</h3>
                <div class="informations">
                    <div class="skills">
                        <div class="row">
                            <div class="skill" style="margin-left: 0;">
                                <p>Java</p>
                            </div>
                            <div class="skill">
                                <p>Kotlin</p>
                            </div>
                            <div class="skill">
                                <p>Spring</p>
                            </div>
                            <div class="skill">
                                <p>Spring Boot</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="skill" style="margin-left: 0;">
                                <p>Git</p>
                            </div>
                            <div class="skill">
                                <p>GitHub</p>
                            </div>
                            <div class="skill">
                                <p>C++</p>
                            </div>
                            <div class="skill">
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="skill" style="margin-left: 0;">
                                <p>Python</p>
                            </div>
                            <div class="skill">
                                <p>Docker</p>
                            </div>
                            <div class="skill">
                                <p>Gradle</p>
                            </div>
                            <div class="skill">
                                <p>Maven</p>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <h4>Growing one <br>project at a time</h4>
                        <p>I’m Kauã Melo, a backend developer specializing in Java, driven by high-performance engineering — a medalist in national scientific competitions, AI olympiad finalist, and creator of Ambar, a sustainable programming language.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="img">
            <img src="../assets/img-abt.svg" alt="">
        </div>
    </div>
</template>

<style>
.about-me {

    padding: 5% 0;
    display: flex;
}

.left-size {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container {
    width: 70%;

    display: flex;
    flex-direction: column;
}

.informations {
    margin: 5% 0;
    color: white;
}

.skills {
    margin: 0 0 5% 0;

    .row {
        display: flex;
    }

    .skill {
        cursor: pointer;
        border-radius: 2px;
        user-select: none;

        transition: all .6s ease-out;

        background-color: #2B2B2B;
        color: #F6F6F6;
        margin: 5px;

        p {
            font-size: 15px;
            padding: 5px 20px;
        }
    }

    .skill:hover {
        background-color: #3a3a3a;
        color: #b0b0b0;
    }
}

.text {
    h4 {
        font-size: 50px;
        font-weight: 300;
        line-height: 0.9;
        margin: 0 0 5% 0;
    }

    p {
        width: 85%;
        font-size: 23px;
        font-weight: 300;
    }
}

.img {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 5% 0;

    img {
        width: 80%;
    }
}

@media only screen and (max-width: 1160px) {

    .skills {
        .skill {
            width: fit-content;

            p {
                font-size: 13px;
                padding: 5px 20px;
            }
        }
    }

    .text {
        h4 {
            font-size: 48px;
        }

        p {
            width: 100%;
            font-size: 20px;
        }
    }
}

@media only screen and (max-width: 1060px) {
    .container {
        width: 75%;

        display: flex;
        flex-direction: column;
    }

    .skills {
        .skill {
            width: fit-content;

            p {
                font-size: 13px;
                padding: 5px 15px;
            }
        }
    }

    .text {
        h4 {
            font-size: 45px;
            margin: 0 0 5% 0;
        }

        p {
            width: 100%;
            font-size: 18px;
        }
    }
}

@media only screen and (max-width: 912px) {
    .about-me {
        padding: 5% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    .left-size {
        width: 90%;
    }

    .container {
        width: 80%;
        align-items: center;
    }

    .informations {
        margin: 8% 0;
        text-align: center;
    }

    .skills {
        margin: 0 0 8% 0;

        .row {
            align-items: center;
            justify-content: center;
        }
    }

    .text {
        h4 {
            font-size: 42px;
            margin: 0 0 8% 0;
        }

        p {
            width: 100%;
            font-size: 17px;
        }
    }

    .img {
        margin: 5% 0 10% 0;
        width: 85%;

        img {
            width: 100%;
        }
    }
}

@media only screen and (max-width: 575px) {

    .left-size {
        width: 90%;
    }

    .container {
        width: 100%;
    }

    .informations {
        width: 100%;
    }

    .skills {

        .row {
            .skill {
                margin: 3px;

                p {
                    font-size: 12px;
                    padding: 5px 15px;
                }
            }
        }
    }

    .text {
        h4 {
            font-size: 40px;
        }

        p {
            width: 100%;
            font-size: 16px;
        }
    }
}

@media only screen and (max-width: 350px) {

    .skills {

        .row {
            .skill {
                p {
                    font-size: 10px;
                    padding: 5px 12px;
                }
            }
        }
    }

    .text {
        h4 {
            font-size: 35px;
        }

        p {
            width: 100%;
            font-size: 16px;
        }
    }
}</style>