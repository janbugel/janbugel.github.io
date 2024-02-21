let lastScrollTop = 0;
let ticking = false;

function onScroll() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.getElementById("header").classList.add("header-hidden");
  } else {
    // Scroll up
    document.getElementById("header").classList.remove("header-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("touchmove", onScroll, { passive: true });