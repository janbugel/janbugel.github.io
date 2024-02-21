var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // Check if the scroll is within the page bounds
  if (currentScrollPos > 0 && currentScrollPos < document.body.offsetHeight - window.innerHeight) {
    var header = document.getElementById("header"); // Get the header element
    var headerHeight = header.offsetHeight; // Get the dynamic height of the header

    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      // Use the negative of headerHeight to hide the header
      header.style.top = "-" + headerHeight + "px";
    }
  }

  prevScrollpos = currentScrollPos;
}
