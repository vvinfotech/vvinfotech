```javascript
/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });


    document.querySelectorAll(".main-nav a").forEach(function (link) {

        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
        });

    });

}



/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const customerName =
            document.getElementById("customerName").value.trim();

        const customerPhone =
            document.getElementById("customerPhone").value.trim();

        const serviceType =
            document.getElementById("serviceType").value;

        const vehicleNumber =
            document.getElementById("vehicleNumber").value.trim();

        const address =
            document.getElementById("address").value.trim();


        const message =
            "Hello Namma CarCare Doorstep,%0A%0A" +

            "*New Service Booking Request*%0A%0A" +

            "Name: " + encodeURIComponent(customerName) + "%0A" +

            "Phone: " + encodeURIComponent(customerPhone) + "%0A" +

            "Service: " + encodeURIComponent(serviceType) + "%0A" +

            "Vehicle Number: " + encodeURIComponent(vehicleNumber) + "%0A" +

            "Address: " + encodeURIComponent(address) + "%0A%0A" +

            "Please confirm my service booking.";


        const whatsappNumber = "918148837407";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            message;


        window.open(whatsappURL, "_blank");


        bookingForm.reset();

    });

}



/* ================= FOOTER YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}
```
