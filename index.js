const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    // Scroll to the target section
    target.scrollIntoView({
      behavior: "smooth"
    });

    // Remove the active class from all tab contents
    tabContents.forEach((tc) => {
      tc.classList.remove("filters__active");
    });

    // Add the active class to the target tab content
    target.classList.add("filters__active");

    // Remove the active class from all tabs
    tabs.forEach((t) => {
      t.classList.remove("filter-tab-active");
    });

    // Add the active class to the clicked tab
    tab.classList.add("filter-tab-active");
  });
});



// const tabs = document.querySelectorAll('[data-target]');
// const tabsContents = document.querySelectorAll('[data-content]');

// tabs.forEach(tab => {
//     tab.addEventListener('click', (e) => {
//         const target = document.querySelector(tab.dataset.tabTarget);

//         tabsContents.forEach(tabContent => {
//             tabContent.classList.remove('active');

//         })

//         target.classList.add('active');

//         //loop through 'li' items and remove 'active' class
//         tabs.forEach(tab => {
//               tab.classList.remove('active');
//           })

//        //add 'active' class to clicked 'li' item
//         e.target.classList.add("active");

//     })
// })

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "ri-contrast-2-fill"
    : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "ri-contrast-2-fill" ? "add" : "remove"
  ](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[
    selectedIcon === "ri-contrast-2-fill" ? "add" : "remove"
  ](iconTheme);
  // Update the icon color variables based on the theme
  document.documentElement.style.setProperty(
    "--icon-color-light",
    selectedTheme === "dark" ? "white" : "black"
  );
  document.documentElement.style.setProperty(
    "--icon-color-dark",
    selectedTheme === "dark" ? "black" : "white"
  );
}

// Get the Platzi button element
const platziButton = document.querySelector(".button__grey img");

// Add event listener for theme change
themeButton.addEventListener("click", () => {
  // Check if dark mode is enabled
  const isDarkMode = document.body.classList.contains(darkTheme);
  
  // Update the icon color based on the theme
  if (isDarkMode) {
    platziButton.style.filter = "invert(100%)";
  } else {
    platziButton.style.filter = "none";
  }
});



// Scroll reveal

// import ScrollReveal from 'scrollreveal'

// const sr = ScrollReveal({
//   origin: "top",
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
// });

// sr.reveal(`.profile__border`);
// sr.reveal(`.profile__name`, { delay: 500 });
// sr.reveal(`.profile__proffesion`, { delay: 600 });
// sr.reveal(`.profile__social`, { delay: 700 });
// sr.reveal(`.profile__info-group`, { interval: 100, delay: 800 });
