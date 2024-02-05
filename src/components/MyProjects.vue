<template>
    <h3 style="color: #7C61E8; font-weight: 100; text-align: center;"><span style="color: #FFFFFF;">02</span> Best projects
    </h3>
    <div class="projects">
        <div class="project">
            <div class="img-pjct">
                <img src="../assets/macBook.png" alt="">
            </div>

            <div class="text-pjct">
                <div class="container">
                    <h4>Armorfly</h4>
                    <p>Not just a developer but a lover of software development, I started my career when I was just 14y and
                        currently I have built some of my own projects, mainly using Java and Kotlin with
                        Spring/Spring Boot framework for APIs and libGDX for game development</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Kotlin</p>
                        <p class="tec">LibGDX</p>
                        <p class="tec">Game Development</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project" id="reverse">
            <div class="text-pjct">
                <div class="container">
                    <h4>Armorfly</h4>
                    <p>Not just a developer but a lover of software development, I started my career when I was just 14y and
                        currently I have built some of my own projects, mainly using Java and Kotlin with
                        Spring/Spring Boot framework for APIs and libGDX for game development</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Kotlin</p>
                        <p class="tec">LibGDX</p>
                        <p class="tec">Game Development</p>
                    </div>
                </div>
            </div>
            <div class="img-pjct">
                <img src="../assets/fone.png" alt="">
            </div>
        </div>
        <div class="project">
            <div class="img-pjct">
                <img src="../assets/macBook.png" alt="">
            </div>

            <div class="text-pjct">
                <div class="container">
                    <h4>Armorfly</h4>
                    <p>Not just a developer but a lover of software development, I started my career when I was just 14y and
                        currently I have built some of my own projects, mainly using Java and Kotlin with
                        Spring/Spring Boot framework for APIs and libGDX for game development</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Kotlin</p>
                        <p class="tec">LibGDX</p>
                        <p class="tec">Game Development</p>
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
            font-size: 50px;
            font-weight: 300;
            margin: 0 0 5% 0;
        }

        p {
            font-size: 23px;
            font-weight: 300;
            margin: 0 0 5% 0;
        }

        .technologies {
            display: flex;
            align-items: center;
            justify-content: start;

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
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        margin: 5% 0;

        img {
            width: 80%;
        }
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
                font-size: 42px;
            }

            p {
                font-size: 17px;
            }


        }

        .img-pjct {
            width: 100%;
            margin: 10% 0;

            img {
                width: 70%;
            }
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