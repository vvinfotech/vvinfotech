// ===============================
// STEPSTYLE MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

    });


    document.querySelectorAll(".main-nav a").forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("active");

        });

    });

}