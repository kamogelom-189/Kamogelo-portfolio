const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}


// Show the supplied profile photo when profile.jpg is added beside index.html.
const profilePhoto = document.querySelector("#profilePhoto");
const profilePhotoWrap = document.querySelector("#profilePhotoWrap");
if (profilePhoto && profilePhotoWrap) {
  profilePhoto.addEventListener("load", () => profilePhotoWrap.classList.add("has-photo"));
  profilePhoto.addEventListener("error", () => profilePhotoWrap.classList.remove("has-photo"));
  if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
    profilePhotoWrap.classList.add("has-photo");
  }
}
