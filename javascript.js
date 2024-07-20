/*-----==========auto writing content on home page===========-----*/
const typed = new Typed(".text", {
    strings: ["Frontend Developer.", "CS Enginner.", "UI/UX Designer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/*------===================Greeting auto right============================-------*/
const type = new Typed(".greeting", {
    strings: [" <i  class='bx bxs-heart'></i>  Thank you for Visiting ! <i  class='bx bxs-heart'></i>"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/*----=========more about me tabs==========------*/
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/*----========= more about show/hide and chage the name after click on the button ==========------*/

function toggleMoreAboutMe() {
    var moreAboutMeSection = document.querySelector('.more-about-me');
    var moreAboutMeButton = document.getElementById('more-about-me-btn');

    if (moreAboutMeSection.style.display === 'none') {
        // Show the more-about-me section
        moreAboutMeSection.style.display = 'block';
        moreAboutMeButton.textContent = 'Less About Me'; // Change button text
    } else {
        // Hide the more-about-me section
        moreAboutMeSection.style.display = 'none';
        moreAboutMeButton.textContent = 'More About Me'; // Change button text
    }
}
