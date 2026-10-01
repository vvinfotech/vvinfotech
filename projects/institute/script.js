/* ================= QUICK ACTIONS ================= */

function showMessage(message) {
    alert(message);
}


/* ================= SIDEBAR NAVIGATION ================= */

const menuItems =
    document.querySelectorAll(".sidebar nav a");

menuItems.forEach(item => {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ================= VIEW ALL ================= */

const viewButton =
    document.querySelector(".view-btn");

if (viewButton) {

    viewButton.addEventListener("click", function() {

        alert(
            "Student management module will be available in the full institute system."
        );

    });

}