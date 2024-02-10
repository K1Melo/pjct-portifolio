<template>
    <h3 style="color: #7C61E8; font-weight: 100; text-align: center;"><span style="color: #FFFFFF;">02</span> Best projects
    </h3>
    <div class="projects">
        <div class="project">
            <div class="img-pjct quilombolas">
                <div class="open" @click="open('https://pjct-quilombolas.vercel.app/')">
                    <i class="material-symbols-outlined">open_in_new</i>
                </div>
                <img src="../assets/pjct-quilombolas.png" alt="">
            </div>

            <div class="text-pjct">
                <div class="container">
                    <h4>Quilombolas <img src="../assets/github.svg"
                            @click="open('https://github.com/K1Melo/pjct-quilombolas')" />
                    </h4>
                    <p>
                        I worked on most of the quilombolas project with the Vue.js framework for the frontend of the site,
                        and for data persistence in the feedback form at the end of the site we used Node.js together with
                        the express framework and the mongoose data modeling library.</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Vue.js</p>
                        <p class="tec">Node.js</p>
                        <p class="tec">JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project" id="reverse">
            <div class="text-pjct">
                <div class="container">
                    <h4>Space Invaders <img src="../assets/github.svg"
                            @click="open('https://github.com/K1Melo/pjct-space-invaders')" /></h4>
                    <p>My first attempt at developing games in Java, as a challenge, I did it without any type of engine,
                        this project helped me to better understand how graphics libraries work in addition to learning a
                        little about the libGDX framework.</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Java</p>
                        <p class="tec">LibGDX</p>
                        <p class="tec">Game Development</p>
                    </div>
                </div>
            </div>
            <div class="img-pjct" id="space">
                <img src="../assets/pjct-space-invaders.png" alt="">
            </div>
        </div>
        <div class="project">
            <div class="img-pjct">
                <img src="../assets/pjct-space-invaders.png" alt="">
            </div>

            <div class="text-pjct">
                <div class="container">
                    <h4>CRUD API <img src="../assets/github.svg"
                            @click="open('https://github.com/K1Melo/pjct-crud-api')" /></h4>
                    <p>The project that every back end developer should have, a Crud with data persistence, in this project
                        I used my knowledge of Kotlin using spring/spring boot, and postgress as a database, it has a simple
                        graphical interface interconnected with a front end.</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Kotlin</p>
                        <p class="tec">Spring</p>
                        <p class="tec">Spring Boot</p>
                    </div>
                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">PostgreSQL</p>
                        <p class="tec">Vue.js</p>
                        <p class="tec">JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p id="see-more"><span style="cursor: pointer; display: flex; align-items: center;"
            @click="open('https://github.com/K1Melo?tab=repositories')">More Projects on GitHub<i
                class="material-symbols-outlined">open_in_new</i></span></p>
</template>


<script>

export default {
    methods: {
        open(url) {
            window.open(url);
        }
    }
}

</script>


<style>
.projects {

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5% 0;
}

#see-more {
    margin-right: 3%;
    display: flex;
    justify-content: right;
    color: #8D8D8D;

    span {
        transition: color 0.2s linear;
    }

    i {
        margin-left: 7px;
    }
}

#see-more span:hover {
    color: #d6d6d6cc;

}


.project {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    .text-pjct {
        color: #FFFFFF;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4 {
            display: flex;
            align-items: center;
            font-size: 50px;
            font-weight: 300;
            margin: 0 0 5% 0;

            img {
                margin-left: 3%;
                width: 9%;
                cursor: pointer;
                transition: all 0.2s linear;
            }

            img:hover {
                opacity: 0.8;
                transform: scale(1.1);
            }

            img:active {
                opacity: 0.5;
                transform: scale(0.9);
            }
        }

        p {
            font-size: 23px;
            font-weight: 300;
            margin: 0 0 5% 0;
        }

        .technologies {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .tec {
                width: fit-content;

                cursor: pointer;
                border-radius: 2px;
                user-select: none;
                text-align: center;

                transition: all .6s ease-out;

                background-color: #2B2B2B;
                color: #F6F6F6;
                margin: 5px;

                font-size: 15px;
                padding: 5px 20px;

            }

            .tec:hover {
                background-color: #3a3a3a;
                color: #b0b0b0;
            }
        }
    }

    .img-pjct {
        position: relative;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
        width: 50%;
        margin: 5% 0;

        img {
            transition: all 0.2s linear;
            width: 90%;
        }

        img:hover {
            border-radius: 10px;
        }

        .open {
            transition: all 0.2s linear;

            width: 90%;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #2b2b2b6f;
            color: #fff;
            height: 100%;
        }

        .open:hover {
            cursor: pointer;
            border-radius: 5px;
            background-color: #000000ac;
        }
    }


    #space {
        justify-content: start;
    }
}


@media only screen and (max-width: 1160px) {
    .text-pjct {
        h4 {
            font-size: 48px;
        }

        p {
            font-size: 20px;
        }
    }
}

@media only screen and (max-width: 1060px) {
    .text-pjct {
        h4 {
            font-size: 45px;
        }

        p {
            font-size: 18px;
        }
    }
}

@media only screen and (max-width: 912px) {
    .projects {
        flex-direction: column;

        .project {
            flex-direction: column;
        }

        #reverse {
            flex-direction: column-reverse;
        }

        .text-pjct {
            width: 90%;
            text-align: center;

            h4 {
                justify-content: center;
                font-size: 42px;

                img {
                    margin-left: 3%;
                    width: 11%;
                }
            }

            p {
                font-size: 17px;
            }


        }

        .img-pjct {
            width: 100%;
            margin: 10% 0;
            justify-content: center;

            img {
                width: 100%;
            }

            .open {
                width: 100%;
            }
        }


        #space {
            justify-content: center;
        }
    }
}

@media only screen and (max-width: 575px) {
    .text-pjct {
        h4 {
            font-size: 40px;
        }

        p {
            font-size: 16px;
        }

        .technologies {

            .tec {
                margin: 2px;

                font-size: 13px;
                padding: 5px 15px;

            }
        }
    }
}

@media only screen and (max-width: 350px) {
    .text-pjct {
        h4 {
            font-size: 35px;
        }

        p {
            font-size: 16px;
        }
    }

    .projects {
        .text-pjct {

            .technologies {

                .tec {
                    margin: 2px;

                    font-size: 11px;
                    padding: 5px 12px;

                }
            }
        }
    }
}
</style>