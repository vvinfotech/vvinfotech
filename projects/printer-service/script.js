/* =====================================================
   PRINTER SERVICE MANAGEMENT
   ===================================================== */


/* ================= QUICK ACTION MESSAGE ================= */

function showMessage(message) {

    alert(message);

}


/* ================= SIDEBAR NAVIGATION ================= */

const menuItems = document.querySelectorAll(".sidebar nav a");

menuItems.forEach(item => {

    item.addEventListener("click", function (event) {

        event.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ================= VIEW BUTTONS ================= */

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("This module will be available in the full system.");

    });

});