/* ================= SEARCH ================= */

function searchProperties() {

    alert(
        "Property search module will be available in the full property management system."
    );

}


/* ================= GENERAL MESSAGE ================= */

function showMessage(message) {

    alert(message);

}


/* ================= NAVIGATION ================= */

const navItems =
    document.querySelectorAll(".top-header nav a");

navItems.forEach(item => {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});