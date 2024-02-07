<template>
    <footer>
        <div class="footer-medias">
            <div class="social-icons">
                <a href=""><i class="fa-brands fa-instagram" id="instagram"></i></a>
                <p>/</p>
                <a href=""><i class="fa-brands fa-github" id="github"></i></a>
                <p>/</p>
                <a href=""><i class="fa-brands fa-linkedin" id="linkedin"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright &copy; 2024; Designed by <span class="designer">Kauã Fernandes</span></p>
        </div>
    </footer>
</template>

<style>
footer {
    width: 100%;
    padding: 30px 20px;
    background-image: url("../assets/footer-img.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.social-icons {
    display: flex;
    justify-content: center;
    align-items: center;


}

.social-icons p {
    margin: 10px;
    color: #FFF;
}

.social-icons a {
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    border-radius: 50%;

}

.social-icons a i {
    font-size: 1.8em;
    color: #FFF;
    opacity: 0.9;
}

#instagram,
#github,
#linkedin {
    transition: color 0.3s linear;
}

#instagram:hover {
    color: #bb3b66b7;
}

#github:hover {
    color: #d9d9d9b7;
}

#linkedin:hover {
    color: #4f58fab7;
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #FFF;
    padding: 2% 0;
    font-size: 1em;
}

@media only screen and (max-width: 650px) {
    .social-icons a i {
        font-size: 1.5em;
    }

    .footer-bottom {
        font-size: .8em;
    }
}
@media only screen and (max-width: 330px) {
    .social-icons a i {
        font-size: 1.5em;
    }

    .footer-bottom {
        font-size: .6em;
    }
}
</style>