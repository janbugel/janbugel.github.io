var prevScrollpos = window.scrollY;
var scrollDownThreshold = 50; 
var scrollUpThreshold = 10; 

window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (currentScrollPos > 0 && currentScrollPos < document.body.offsetHeight - window.innerHeight) {
    var header = document.getElementById("header");
    var headerHeight = header.offsetHeight;

    // Determine the direction of the scroll
    var isScrollingDown = prevScrollpos < currentScrollPos;
    var isScrollingUp = prevScrollpos > currentScrollPos;
    
    // Determine if the scroll distance exceeds the threshold for the direction of scroll
    var exceedsDownThreshold = isScrollingDown && (currentScrollPos - prevScrollpos >= scrollDownThreshold);
    var exceedsUpThreshold = isScrollingUp && (prevScrollpos - currentScrollPos >= scrollUpThreshold);

    if (exceedsDownThreshold) {
      header.style.top = "-" + headerHeight + "px"; // Hide the header
      prevScrollpos = currentScrollPos;
    } else if (exceedsUpThreshold) {
      header.style.top = "0"; // Show the header
      prevScrollpos = currentScrollPos;
    }
  }
}
