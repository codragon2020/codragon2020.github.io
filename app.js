// *****************Change CSS**************


function changeCSS(cssFile, cssLinkIndex, backgroundUrl) {
    // cssLinkIndex = 1;
    var jumbotronEl = document.querySelector(".jumbotron")
    jumbotronEl.style.backgroundImage = "url(" + backgroundUrl +")"
    

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    console.log(oldlink, cssLinkIndex)
    var newlink = document.createElement("link");
    console.log(newlink, cssLinkIndex)
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    console.log('running css replace')
}

// **************Show Pages***************

// Show About page and hides the rest
function showAbout() {
    aboutPage.style.display = "block";
    contactPage.style.display = "none";
    portfolioPage.style.display = "none";
    changeCSS('css/style.css', 1, 'images/background-tech-07.jpg');}

// Show Contact page and hides the rest
function showContact() {
    aboutPage.style.display = "none";
    contactPage.style.display = "block";
    portfolioPage.style.display = "none";
    changeCSS('css/contact.css', 1, 'images/background-tech-12.jpg');
}

// Show Portfolio page and hides the rest
function showPortfolio() {
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
    portfolioPage.style.display = "block";
    changeCSS('css/portfolio.css', 1, 'images/background-tech-06.jpg');
}

// **************Click Events***************
$("#about").on("click", function (e) {
    e.preventDefault();
    showAbout();
    localStorage.setItem("lastpage", "about");

})

$("#contact").on("click", function (e) {
    e.preventDefault();
    showContact();
    localStorage.setItem("lastpage", "contact");
})

$("#portfolio").on("click", function (e) {
    e.preventDefault();
    showPortfolio();
    localStorage.setItem("lastpage", "portfolio");
})

// Load page
var lastPage = localStorage.getItem("lastpage")
if (lastPage === "contact") {
    showContact();
} else if (lastPage === "portfolio") {
    showPortfolio()
} else showAbout();

// showAbout();