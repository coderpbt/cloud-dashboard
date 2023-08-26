"use strict";
/*---------------------*/
/* 1. dashboard user profile js */
/*---------------------*/
// Constants
const dropdownItems = document.querySelectorAll(".has-dropdown");

// Event handling for dropdown menus
dropdownItems.forEach((item) => {
    const menuItem = item.querySelector("a");

    menuItem.addEventListener("click", function (event) {
        event.preventDefault();
        closeOtherMenus(item);
        item.classList.toggle("active");
    });
});

// Close other active dropdown menus
function closeOtherMenus(clickedItem) {
    dropdownItems.forEach((item) => {
        if (item !== clickedItem && item.classList.contains("active")) {
            item.classList.remove("active");
        }
    });
}

// Event handling for clicking outside dropdowns
document.addEventListener("click", function (event) {
    const target = event.target;
    if (!target.closest(".has-dropdown")) {
        closeOtherMenus(null);
    }
});

/*---------------------*/
/* 2. mobile menu js */
/*---------------------*/

const bars = document.querySelector(".bar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("offcanvas-menu");
  if (sidebar.classList.contains("offcanvas-menu")) {
    document.body.appendChild(overlay);
  } else {
    document.body.removeChild(overlay);
  }
});

// Close the sidebar when clicking outside of it (on the overlay)
overlay.addEventListener("click", () => {
  sidebar.classList.remove("offcanvas-menu");
  document.body.removeChild(overlay);
});
