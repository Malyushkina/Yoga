window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabConent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabConent.length; i++) {
            tabConent[i].classList.remove("show");
            tabConent[i].classList.add("hide");
        }
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
});
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