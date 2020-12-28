window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabConent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        tabConent.forEach((element, i) => {
            if (i >= a) {
                element.classList.remove("show");
                element.classList.add("hide");
            }

        });
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabConent[b].classList.contains("hide")) {
            tabConent[b].classList.remove("hide");
            tabConent[b].classList.add("show");
        }
    }
    info.addEventListener("click", function (event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    //timer
    let deadline = "2020-11-26";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));
        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector(".hours"),
            minutes = document.querySelector(".minutes"),
            seconds = document.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }
    setClock("timer", deadline);

    // modal
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        popupClose = document.querySelector(".popup-close");

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    popupClose.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    //form

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с Вами свяжемся.",
        failure: "Что-то пошло не так..."
    };
    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    // function sendForm(elem) {}
    // elem.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     elem.appendChild(statusMessage);
    //     let formData = new FormData(elem);
    // });


    // function postData(data) {
    //     return new Promise(function (resolve, reject) {
    //         let request = new XMLHttpRequest();
    //         request.open('POST', 'https://echo.htmlacademy.ru');
    //         request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //         request.addEventListener('readystatechange', function () {
    //             if (request.readyState < 4) {
    //                 resolve();

    //             } else if (request.readyState === 4) {
    //                 if (request.status == 200 && request.status > 300) {
    //                     resolve();
    //                 } else {
    //                     reject();
    //                 }
    //             }
    //         });
    //         request.send(data);
    //     });
    // }

    // function clearInput() {
    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value = '';
    //     }
    // }
    // postData(formData).then(() => statusMessage.innerHTML = message.loading)
    //     .catch(() => statusMessage.innerHTML = message.failure)
    //     .then(() => clearInput);

    // sendForm(form);
    // Slider
    let slideIndex = 1;
    let slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");
    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => {
            item.style.display = "none";
        });
        slides[slideIndex - 1].style.display = "block";

        dots.forEach((item) => {
            item.classList.remove("dot-active");
        });
        dots[slideIndex - 1].classList.add("dot-active");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener("click", function () {
        plusSlides(-1);
    });
    next.addEventListener("click", function () {
        plusSlides(1);
    });
    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
});
