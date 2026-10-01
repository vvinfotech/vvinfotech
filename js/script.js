/* =========================================
   VETRI VINAYAGA INFOTECH SOLUTIONS
   PORTFOLIO WEBSITE JAVASCRIPT
   ========================================= */


/* =====================================================
   HEADER SHADOW
   ===================================================== */

const header = document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 5px 25px rgba(16, 42, 114, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {

            menuToggle.innerHTML = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Close Menu"
            );

        } else {

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        }

    });


    /* CLOSE MENU AFTER CLICK */

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open Menu"
            );

        });

    });

}


/* =====================================================
   PROJECT DEMO BUTTONS
   ===================================================== */

const demoButtons =
    document.querySelectorAll(".project-btn");


demoButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const href =
            button.getAttribute("href");

        if (!href || href === "#") {

            event.preventDefault();

            alert(
                "Demo project will be connected here soon."
            );

        }

    });

});


/* =====================================================
   WHATSAPP ENQUIRY FORM
   ===================================================== */

function sendWhatsAppMessage(event) {

    event.preventDefault();


    const nameElement =
        document.getElementById("customerName");

    const businessElement =
        document.getElementById("businessName");

    const serviceElement =
        document.getElementById("serviceType");

    const requirementElement =
        document.getElementById("customerRequirement");


    if (
        !nameElement ||
        !businessElement ||
        !serviceElement ||
        !requirementElement
    ) {
        return;
    }


    const name =
        nameElement.value.trim();

    const business =
        businessElement.value.trim();

    const service =
        serviceElement.value;

    const requirement =
        requirementElement.value.trim();


    const message =
        "Hi Vetri Vinayaga InfoTech Solutions,\n\n" +
        "Name: " + name + "\n" +
        "Business: " + business + "\n" +
        "Service: " + service + "\n" +
        "Requirement: " + requirement;


    const whatsappURL =
        "https://wa.me/918148837407?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   CURRENT YEAR
   ===================================================== */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Vetri Vinayaga InfoTech Solutions. All Rights Reserved.";

}