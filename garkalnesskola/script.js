// Function to scroll the page back to the top
function returnToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the button based on scroll position
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var returnToTopButton = document.getElementById("return-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        returnToTopButton.style.display = "block";
    } else {
        returnToTopButton.style.display = "none";
    }
}
