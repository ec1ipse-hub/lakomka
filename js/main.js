@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
    font-family: 'NauryzRedKeds';
    src: url('../nauryz_redkeds/NAURYZREDKEDS.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

* {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
}

a:hover,
button:hover,
.logo {
    cursor: url('../img/cherry-svgrepo-com.svg'), auto;
}


h1,
h2,
h3 {
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 500;
    font-style: normal;
}

h2 {
    font-size: 42px;
    padding-bottom: 34px;
}

input:focus {
    border: 2px solid #b90003;
}

/***********header**********/


header {
    background-color: #e1e1e1;
}

.logo {
    display: flex;
    align-items: center;
}

/**********/

.logo h1 {
    font-size: 24px;
    margin: 0;
    color: #333;
    font-family: 'NauryzRedKeds';
    src: url('../nauryz_redkeds/NAURYZREDKEDS.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.area {
    width: 75%;
    margin: auto;
}

/**********/


.nav-bg {
    padding-top: 10px;
    padding-bottom: 10px;
}

header li {
    list-style-type: none;
}

header li a {
    text-decoration: none;
    color: #333;
    transition: .2s;

}

header li a:hover {
    color: #b90003;
    transition: .2s;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.menu-nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5%;
}

.right-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5%;
    width: 45%;
}

.number {
    color: #b90003;
    font-weight: 500;
    transition: .5s;
}

.bi-telephone-fill {
    padding-right: 2%;
    font-size: 16px;
}

.number:hover {
    color: #333;
    font-weight: 500;
    transition: .5s;
}

.contact {
    width: 200px;
}

/***********header************/

/*бургер*/

.burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;
    z-index: 1001;
    transition: all 0.3s ease;
}

.burger-menu span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #333;
    border-radius: 3px;
    transition: all 0.3s ease;
}

.burger-menu:hover.burger-menu span {
    background-color: #b90003;
    transition: all 0.3s ease;
}

.burger-menu.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.burger-menu.active span:nth-child(2) {
    opacity: 0;
}

.burger-menu.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/*бургер*/

/*модальное окно*/

.search-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3333339f;
    z-index: 100;
    justify-content: center;
    align-items: center;
}

.search-modal-content {
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding: 40px;
    background: #ececec;
    border-radius: 20px;
    width: 50%;
}

.search-input {
    width: 100%;
    padding: 10px 10px 10px 10px;
    border: 1px solid #e1e1e1;
    border-radius: 20px;
    font-size: 16px;
}

.search-button {
    width: 30%;
    height: 50px;
    padding: 10px 10px 10px 10px;
    background-color: #b90003;
    color: #ececec;
    border: 1px solid #ececec;
    border-radius: 20px;
    font-size: 16px;
    transition: .5s;
}

.search-button:hover {
    background-color: #333;
    transition: .5s;
}

.close-modal {
    background: none;
    border: none;
    font-size: 24px;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    color: #333;
}

/*модальное окно*/


/***********main**********/


main {
    background-color: #e1e1e1;
    color: #333;
}

/***********home**********/


.page_home {
    position: relative;
    height: 90vh;
    min-height: 600px;
}

.page {
    background-image: url(../img/Frame\ 153\ \(2\).svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
}

.home_content {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: left;
    flex-direction: column;
    gap: 40px;
    color: #333;
}

.home_action {
    width: 20%;
    color: #333;
    background-color: #e1e1e1;
    padding: 10px;
    font-size: 18px;
    border: solid 1px #333;
    border-radius: 20px;
    transition: .5s;
}

.home_action:hover {
    color: #e1e1e1;
    background-color: #b90003;
    border: solid 1px #b90003;
    transition: .5s;
}

.home_content p {
    font-size: 20px;
    margin: 0;

}

.home_content h2 {
    font-size: 24px;
    margin: 0;
    font-family: 'NauryzRedKeds';
    src: url('../nauryz_redkeds/NAURYZREDKEDS.ttf') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.home_name {
    font-size: 120px;
    font-family: 'NauryzRedKeds';
    src: url('../nauryz_redkeds/NAURYZREDKEDS.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

.home_content p {
    font-size: 20px;
}

.home_text {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.red_kroshka {
    color: #b90003;
}

@keyframes fadeInUpLoop {
    0% {
        opacity: 0;
        transform: translateY(0px);
    }

    50% {
        opacity: 1;
        transform: translateY(30px);
    }

    100% {
        opacity: 0;
        transform: translateY(0px);
    }
}

.home_name {
    animation: fadeInUpLoop 10s ease infinite;
}

.home_text {
    animation: fadeInUpLoop 10s ease 0.3s infinite;
}

.home_action {
    animation: fadeInUpLoop 10s ease 0.5s infinite;
}

.home_content {
    background: #ececec0c;
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(0px);
}

/***********home**********/


/***********information_about**********/

.info_number_about {
    padding: 100px 0px 100px 0px;
}

.title_about {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 60px;
}

.title_about h1 {
    font-size: 38px;
    margin: 0;
    color: #333;
    font-family: 'NauryzRedKeds';
    src: url('../nauryz_redkeds/NAURYZREDKEDS.ttf') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.title_about p {
    font-size: 20px;
}

.counters-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
}

.counter-card {
    border-radius: 20px;
    padding: 40px 30px;
    width: 20%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.041);
    transition: 0.5s ease;
}

.counter-card:hover {
    background-color: #ececec;
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.116);
    transition: 0.5s ease;
}

.counter-value {
    font-size: 58px;
    font-weight: 800;
    margin-bottom: 15px;
    background: #b90003;
    background-clip: text;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}

.counter-title {
    font-size: 18px;
}

.counter-value::after {
    content: "+";
}

/***********information_about**********/




/***********our_confectioner**********/



/***********our_confectionert**********/



/***********our_sets**********/



/***********our_sets**********/


/***********order_cake_form**********/



/***********order_cake_form**********/


/***********order_cake_form**********/



/***********order_cake_form**********/


/***********footer**********/



/***********footer**********/
















/***********header**********/

@media (max-width: 767px) {
    .area {
        width: 90%;
    }

    .nav {
        position: relative;
        align-items: center;
    }

    .burger-menu {
        display: flex;
    }

    .right-bar {
        position: fixed;
        top: 0;
        right: -100%;
        width: 100%;
        height: 100vh;
        background-color: #e1e1e1;
        z-index: 1000;
        transition: right 0.5s ease;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        overflow-y: auto;
    }

    .right-bar.active {
        right: 0;
    }

    .menu-nav {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        padding: 20px;
    }

    .menu-nav li {
        width: 100%;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .menu-nav li:last-child {
        border-bottom: none;
    }

    .menu-nav li a {
        display: block;
        padding: 10px;
        font-size: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .contact {
        width: 100%;
        margin-top: 20px;
    }

    .contact li {
        width: 100%;
        border-bottom: none !important;
    }

    .contact a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 16px;
        padding: 15px;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .contact a:hover {
        color: #333;
        transition: all 0.3s ease;
    }

    body.menu-open {
        overflow: hidden;
    }
}

@media (min-width: 768px) and (max-width: 1279px) {
    .area {
        width: 90%;
    }

    .menu-nav {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .right-bar {
        width: 60%;
    }

    .contact {
        width: auto;
        min-width: 180px;
    }

    .contact a {
        font-size: 14px;
        white-space: nowrap;
    }

    .menu-nav li a {
        white-space: nowrap;
        font-size: 14px;
    }
}

@media (min-width: 1280px) {
    .area {
        width: 75%;
    }

    .menu-nav {
        gap: 5%;
    }

    .right-bar {
        width: 45%;
    }

    .menu-nav li a {
        white-space: nowrap;
    }
}

@media (max-width: 480px) {
    .logo h1 {
        font-size: 20px;
    }

    .menu-nav li a {
        font-size: 16px;
        padding: 12px 5px;
    }

    .contact a {
        font-size: 14px;
        padding: 12px;
    }

    .burger-menu {
        width: 25px;
        height: 18px;
    }
}

/***********header**********/

/***********home**********/

@media (max-width: 767px) {
    .page_home {
        height: 70vh;
        min-height: 500px;
    }

    .home_content {
        width: 90%;
        gap: 25px;
        align-items: center;
        text-align: center;
    }

    .home_name {
        font-size: 48px;
        animation: fadeInUp 8s ease infinite;
    }

    .home_content p {
        font-size: 16px;
    }

    .home_text {
        gap: 8px;
        animation: fadeInUp 8s ease 0.3s infinite;
    }

    .home_action {
        width: 70%;
        font-size: 16px;
        padding: 12px;
        animation: fadeInUp 8s ease 0.5s infinite;
    }



    .home_action {
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (min-width: 768px) and (max-width: 1279px) {
    .page_home {
        height: 80vh;
        min-height: 550px;
    }

    .home_content {
        width: 85%;
        gap: 30px;
    }

    .home_name {
        font-size: 80px;
    }

    .home_content p {
        font-size: 18px;
    }

    .home_action {
        width: 30%;
        font-size: 16px;
        padding: 12px;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(0px);
        }

        50% {
            opacity: 1;
            transform: translateY(20px);
        }

        100% {
            opacity: 0;
            transform: translateY(0px);
        }
    }

    .home_name {
        animation: fadeInUp 9s ease infinite;
    }

    .home_text {
        animation: fadeInUp 9s ease 0.3s infinite;
    }

    .home_action {
        animation: fadeInUp 9s ease 0.5s infinite;
    }
}


@media (min-width: 1280px) {
    .page_home {
        height: 90vh;
        min-height: 600px;
    }

    .home_content {
        width: 80%;
        gap: 40px;
    }

    .home_name {
        font-size: 120px;
    }

    .home_content p {
        font-size: 20px;
    }

    .home_action {
        width: 20%;
        font-size: 18px;
    }
}


@media (max-width: 480px) {
    .page_home {
        height: 65vh;
        min-height: 450px;
    }

    .home_name {
        font-size: 40px;
    }

    .home_content p {
        font-size: 15px;
    }

    .home_action {
        width: 80%;
        font-size: 15px;
        padding: 10px;
    }

    @keyframes fadeInUpMobile {
        0% {
            opacity: 0;
            transform: translateY(0px);
        }

        50% {
            opacity: 1;
            transform: translateY(15px);
        }

        100% {
            opacity: 0;
            transform: translateY(0px);
        }
    }

    .home_name,
    .home_text,
    .home_action {
        animation: fadeInUpMobile 7s ease infinite;
    }

    .home_text {
        animation-delay: 0.2s;
    }

    .home_action {
        animation-delay: 0.4s;
    }
}

@media (max-width: 320px) {
    .page_home {
        height: 60vh;
        min-height: 400px;
    }

    .home_content {
        width: 95%;
        gap: 20px;
    }

    .home_name {
        font-size: 36px;
    }

    .home_content p {
        font-size: 14px;
    }

    .home_action {
        width: 90%;
        font-size: 14px;
        padding: 8px;
    }

    .home_name,
    .home_text,
    .home_action {
        animation: none;
        opacity: 1;
        transform: none;
    }
}

@media (max-height: 500px) and (orientation: landscape) {
    .page_home {
        height: 100vh;
        min-height: auto;
    }

    .home_content {
        gap: 15px;
    }

    .home_name {
        font-size: 36px;
    }

    .home_content p {
        font-size: 14px;
    }

    .home_action {
        width: 30%;
        padding: 8px;
        font-size: 14px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .home_name,
    .home_text,
    .home_action {
        animation: none;
        opacity: 1;
        transform: none;
    }
}

@media (prefers-color-scheme: dark) {
    .home_content {
        color: #f0f0f0;
    }

    .home_action {
        color: #333;
        background-color: rgba(225, 225, 225, 0.9);
        border-color: #f0f0f0;
    }

    .home_action:hover {
        color: #f0f0f0;
        background-color: #b90003;
        border-color: #b90003;
    }
}

@media (max-width: 767px) {
    .page {
        background-image: url(../img/Frame\ 153\ \(2\).svg);
        background-size: cover;
        background-position: center;
    }
}

@media (max-width: 767px) {
    .home_content {
        word-break: break-word;
        overflow-wrap: break-word;
    }

    .home_name {
        word-break: keep-all;
    }
}

@media (max-width: 767px) {
    .home_content {
        padding: 15px;
        backdrop-filter: blur(3px);
    }
}

/***********home**********/

* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* Предотвращает горизонтальный скролл */
}

/***********information_about**********/

@media (max-width: 767px) {
    .info_number_about {
        padding: 60px 0px;
    }

    .title_about {
        margin-bottom: 40px;
        gap: 15px;
    }

    .title_about h1 {
        font-size: 28px;
    }

    .title_about p {
        font-size: 16px;
        padding: 0 15px;
    }

    .counters-container {
        flex-direction: column;
        gap: 20px;
        align-items: center;
        padding: 0 15px;
    }

    .counter-card {
        width: 100%;

        padding: 30px 20px;
        margin: 0 auto;
    }

    .counter-value {
        font-size: 42px;
    }

    .counter-value::after {
        font-size: 36px;
    }

    .counter-title {
        font-size: 16px;
    }

    .counter-card:hover {
        transform: translateY(-5px);
    }


    .counter-card:active {
        background-color: #ececec;
        transform: translateY(-3px);
    }
}


@media (min-width: 768px) and (max-width: 1279px) {
    .area {
        width: 75%;
    }

    .info_number_about {
        padding: 80px 0px;
    }

    .title_about h1 {
        font-size: 34px;
    }

    .title_about p {
        font-size: 18px;
        max-width: 700px;
    }

    .counters-container {
        gap: 30px;
        justify-content: space-around;
    }

    .counter-card {
        width: 30%;
        padding: 35px 25px;
        margin-bottom: 20px;
    }

    .counter-value {
        font-size: 52px;
    }

    .counter-value::after {
        font-size: 44px;
    }

    .counter-title {
        font-size: 17px;
    }



}


@media (min-width: 1280px) {
    .info_number_about {
        padding: 100px 0px;
    }

    .title_about h1 {
        font-size: 38px;
    }

    .title_about p {
        font-size: 20px;
    }

    .counters-container {
        gap: 40px;
        justify-content: center;
        flex-wrap: nowrap;
    }

    .counter-card {
        width: 30%;

        padding: 40px 30px;
    }

    .counter-value {
        font-size: 58px;
    }

    .counter-value::after {
        font-size: 48px;
    }

    .counter-title {
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    .info_number_about {
        padding: 50px 0px;
    }

    .title_about h1 {
        font-size: 24px;
    }

    .title_about p {
        font-size: 15px;
    }

    .counter-card {
        padding: 25px 15px;
        border-radius: 15px;
    }

    .counter-value {
        font-size: 36px;
    }

    .counter-value::after {
        font-size: 30px;
    }

    .counter-title {
        font-size: 15px;
    }
}


@media (max-width: 767px) {
    .counter-card {
        will-change: transform;
        backface-visibility: hidden;
    }
}

/***********information_about**********/




/***********our_confectioner**********/



/***********our_confectionert**********/



/***********our_sets**********/



/***********our_sets**********/


/***********order_cake_form**********/



/***********order_cake_form**********/


/***********order_cake_form**********/



/***********order_cake_form**********/


/***********footer**********/



/***********footer**********/
