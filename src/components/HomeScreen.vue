<template>
    <div class="home">
        <div class="kotlin">
            <img src="../assets/kotlin.png" alt="">
        </div>
        <div class="presentation">
            <div class="text">
                <h1>HI 👋 MY NAME IS KAUÃ MELO</h1>
                <h2>BACKEND<br>DEVELOPER</h2>
                <div class="media">
                    <div class="sm" @click="open('https://www.linkedin.com/in/kaua-melo/')">
                        <p>LinkedIn<i class="material-symbols-outlined">open_in_new</i></p>
                    </div>
                    <div class="sm" @click="open('https://github.com/K1Melo')">
                        <p>GitHub <i class="material-symbols-outlined">open_in_new</i></p>
                    </div>
                    <div class="sm">
                        <p>CV <i class="material-symbols-outlined">download</i></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="kotlin-cell">
            <img src="../assets/kotlinCell.png" alt="">
        </div>
    </div>
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
.home {
    display: flex;
    align-items: center;
    height: 100vh;
}

.kotlin-cell {
    display: none;
}

.kotlin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    user-select: none;

    img {
        width: 70%;
        opacity: 30%;
    }
}

.presentation {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .text {

        text-align: right;

        h1 {
            font-size: calc(.5vw + 2vh);
            color: #BDBDBD;
        }

        h2 {
            font-size: calc(5vw + 2vh);
            color: #F6F6F6;
        }

        .media {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: right;

            .sm {
                cursor: pointer;
                border-radius: 2px;
                user-select: none;

                transition: all .6s ease-out;

                background-color: #2B2B2B;
                color: #F6F6F6;
                margin: 10px;
                padding: 5px 15px;

                p {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .material-symbols-outlined {
                        margin: 0 0 0 5px;
                    }
                }
            }

            .sm:hover {
                background-color: #3a3a3a;
                color: #b0b0b0;
            }

            .sm:active {
                transition: 0.1s linear;
                background-color: #6e6e6e;
                color: #0d0d0d;
                transform: scale(1.05);
            }
        }
    }
}

@media only screen and (max-width: 1200px) {
    .kotlin {
        width: 40%;

        img {
            width: 90%;
        }
    }

    .presentation {
        width: 60%;

        .text {

            h1 {
                font-size: calc(.4vw + 1.8vh);
            }

            h2 {
                font-size: calc(6vw + 2vh);
            }
        }
    }
}

@media only screen and (max-width: 800px) {

    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    .kotlin {
        display: none;
    }

    .kotlin-cell {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        z-index: -1;

        img {
            opacity: 30%;
            width: 100%;
        }
    }

    .presentation {
        width: 100%;

        .text {

            text-align: center;

            h1 {
                font-size: calc(.6vw + 1.8vh);
            }

            h2 {
                font-size: calc(7vw + 2vh);
            }

            .media {
                justify-content: center;

                .sm {
                    margin: 5px;
                    padding: 5px 15px;

                    p {
                        font-size: 15px;

                        .material-symbols-outlined {
                            margin: 0 0 0 3px;
                            font-size: 15px;
                        }
                    }
                }
            }

        }
    }
}

@media only screen and (max-width: 575px) {

    .presentation {
        width: 100%;

        .text {

            text-align: center;

            h1 {
                font-size: calc(.8vw + 1.8vh);
            }

            h2 {
                font-size: calc(8vw + 3vh);
            }
        }
    }
}

@media only screen and (max-width: 300px) {
    .presentation {
        .text {
            .media {
                .sm {
                    margin: 4px;
                    padding: 4px 14px;

                    p {
                        font-size: 12px;

                        .material-symbols-outlined {
                            margin: 0 0 0 2px;
                            font-size: 12px;
                        }
                    }
                }
            }

        }
    }

}
</style>