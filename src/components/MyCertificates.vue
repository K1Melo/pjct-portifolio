<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

</script>

<template>
    <div class="myCertificates">
        <h3 style="color: #7C61E8; font-weight: 100; text-align: center;"><span style="color: #FFFFFF;">03</span> My
            certificates</h3>
        <div class="certificates">
            <swiper :effect="'cards'" :pagination="{
                dynamicBullets: true,
            }" :grabCursor="true" :loop="true" :modules="[EffectCards, Pagination]">
                <swiper-slide>
                    <img src="../assets/ctf-cs50.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-java.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlin.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlinDio-conhecendo.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlinDio-intro.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlinDio-fluxo.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlinDio-funcoes.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlinDio-orientacao.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-kotlinDio-exceçoes.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-git.png" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/ctf-vue3.png" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style>
.myCertificates {
    overflow: hidden;
    width: 100%;
    padding: 5% 0;
}

.certificates {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5% 0;

}

.swiper {
    height: 60%;
    width: 50%;
}


.swiper-slide {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: all 1s ease-in-out;

    img {
        border-radius: 10px;
        width: 80%;
    }
}

.swiper-slide-active {
    transition: all 1s ease-in-out;
    opacity: 1;

}

@media only screen and (max-width: 1160px) {
    .swiper {
        height: 70%;
        width: 60%;
    }

    .swiper-slide {
        img {
            width: 90%;
        }
    }
}

@media only screen and (max-width: 912px) {

    .myCertificates {
        padding: 10% 0;
    }

    .certificates {
        margin: 10% 0;
    }

    .swiper {
        width: 80%;
    }

    .swiper-slide {
        img {
            width: 90%;
        }
    }
}

@media only screen and (max-width: 500px) {
    .swiper {
        width: 90%;
    }

    .swiper-slide {
        img {
            width: 100%;
        }
    }
}

@media only screen and (max-width: 300px) {

    .myCertificates {

        padding: 15% 0;
    }

    .swiper {
        width: 95%;
    }

    .swiper-slide {
        img {
            width: 100%;
        }
    }
}
</style>