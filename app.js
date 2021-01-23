// **************Show Pages***************

// Show About page and hides the rest
function showAbout() {
    aboutPage.style.display = "block";
    contactPage.style.display = "none";
    portfolioPage.style.display = "none";
}

// Show Contact page and hides the rest
function showContact() {
    aboutPage.style.display = "none";
    contactPage.style.display = "block";
    portfolioPage.style.display = "none";
}

// Show Portfolio page and hides the rest
function showPortfolio() {
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
    portfolioPage.style.display = "block";
}

// **************Click Events***************
$("#about").on("click", function (e) {
    e.preventDefault();
    showAbout();
})

$("#contact").on("click", function (e) {
    e.preventDefault();
    showContact();
})

$("#portfolio").on("click", function (e) {
    e.preventDefault();
    showPortfolio();
})

// Load page
showAbout();