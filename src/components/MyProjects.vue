<template>
    <h3 style="color: #7C61E8; font-weight: 100; text-align: center;"><span style="color: #FFFFFF;">02</span> Best projects
    </h3>
    <div class="projects">
        <div class="project">
            <div class="img-pjct">
                <img src="../assets/pjct-crud.png" alt="">
            </div>

            <div class="text-pjct">
                <div class="container">
                    <h4>CRUD API <img src="../assets/github.svg" @click="open('https://github.com/K1Melo/pjct-crud-api')" />
                    </h4>
                    <p>The project that every back end developer should have, a Crud with data persistence, in this project
                        I used my knowledge of Kotlin using spring/spring boot, and postgress as a database.</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Java</p>
                        <p class="tec">Spring</p>
                        <p class="tec">Spring Boot</p>
                    </div>
                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">PostgreSQL</p>
                        <p class="tec" style="margin-left: 0;">Maven</p>
                        <p class="tec" style="margin-left: 0;">Docker</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project" id="reverse">
            <div class="text-pjct">
                <div class="container">
                    <h4>Compiler - AmbarC<img src="../assets/github.svg"
                            @click="open('https://github.com/AmbarProject/ambarc_llvm')" /></h4>
                    <p>I developed an energy-efficient compiler using C++ and LLVM. Its smart optimizations reduce power consumption while maintaining high performance. In benchmarks, Ambar outperformed C and was far more efficient than Python. I also presented this project at <span @click="open('https://feteps.cps.sp.gov.br/projetos/ambar-programacao-sustentavel/')"> FETEPS</span>, showcasing its potential for sustainable high-performance computing.</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">C++</p>
                        <p class="tec">LLVM</p>
                        <p class="tec">Docker</p>
                    </div>
                </div>
            </div>
            <div class="img-pjct" id="space">
                <img src="../assets/pjct-ambar-llvm.png" alt="">
            </div>
        </div>
        <div class="project">
            <div class="img-pjct">
                <img src="../assets/pjct-febrace.png" alt="">
            </div>

            <div class="text-pjct">
                <div class="container">
                    <h4>Protein Analyser <span style="cursor: pointer; display: flex; align-items: center; " 
                        @click="open('https://virtual.febrace.org.br/2025/EXA/7417/')"><i
                            class="material-symbols-outlined">open_in_new</i></span>
                    </h4>
                    <p>
                        I developed an in-silico Python pipeline using bioinformatics and machine learning to classify dermonecrotic spider toxins (FLDs). Combining protein descriptors, PCA and clustering, the system revealed toxicity patterns while reducing animal testing. The project highlighted the impact of computational toxicology and was selected for presentation at FEBRACE.</p>

                    <div class="technologies">
                        <p class="tec" style="margin-left: 0;">Python</p>
                        <p class="tec">Scikit-learn</p>
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

.material-symbols-outlined {
    margin: 0 0 0 20px;
    font-size: 30px;
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
        border-radius: 5px;


        img {
            transition: all 0.2s linear;
            width: 90%;
        }

        img:hover {
            border-radius: 20px;
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