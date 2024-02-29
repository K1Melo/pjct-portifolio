<template>
    <div class="studies">
        <div class="container-studies" id="first-container">
            <div class="img-studies">
                <img src="https://www.visaooeste.com.br/wp-content/uploads/2021/05/Etec-Carapicuiba.jpg" alt="">
            </div>
            <div class="left-size">
                <div class="container">
                    <h3 style="color: #7C61E8; font-weight: 100;"><span style="color: #FFFFFF;">04</span> Studies</h3>
                    <div class="informations">
                        <div class="text">
                            <h4>What I’m doing on now</h4>
                            <p>A developer doesn't just live on projects, for my academic training I study at a school with
                                secondary and technical education in systems development, where I'm currently in my second
                                year.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-studies">
            <div class="left-size">
                <div class="container">
                    <div class="informations">
                        <div class="text">
                            <h4>Project I'm currently <br>working on</h4>
                            <p>I'm currently working on a virtual store where the product will be a game also produced by me
                                and my team, if you want to see more about it, take a look at our <a style="font-weight: 500; font-style: italic; color: #FFFFFF;" href="https://github.com/K1Melo/pjct-towerfall-game" target="_blank">github repository</a>
                            </p>
                        </div>
                        <div class="skills" style="margin-top: 5%;">
                            <div class="row">
                                <div class="skill" style="margin-left: 0;">
                                    <p>Java</p>
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
                                    <p>Godot</p>
                                </div>
                                <div class="skill">
                                    <p>JavaScript</p>
                                </div>
                                <div class="skill">
                                    <p>HTML / CSS</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="img-studies">
                <img src="../assets/logoGame.jpeg" alt="" class="game">
            </div>
        </div>
    </div>
</template>

<style>
.studies {
    padding: 5% 0;
    display: flex;
    flex-direction: column;
}

.container-studies {
    display: flex;
}

.img-studies {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    overflow: hidden;

    img {
        height: 100%;
    }

    .game {
        width: 100%;
    }
    
}

@media only screen and (max-width: 912px) {
    .studies {
        padding: 5% 0;
    }


    .container-studies {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #first-container {
        flex-direction: column-reverse;
    }

    .img-studies {
        margin: 5% 0 10% 0;
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>