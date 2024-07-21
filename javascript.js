/*-----==========auto writing content on home page===========-----*/
const typed = new Typed(".text", {
        strings: ["Frontend Developer.", "CS Engineer.", "UI/UX Designer."],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    //video-control-----
    document.addEventListener("DOMContentLoaded", function() {
        const videoContainer = document.getElementById('video-container');
        const videoIframe = document.getElementById('video-iframe');
        const videoSrc = videoIframe.src;
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Pause the video when the section is out of view
                    videoIframe.src = '';
                    videoIframe.src = videoSrc;
                }
            });
        }, { threshold: 0 });
    
        observer.observe(videoContainer);
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

    // Toggle display and button text
    var isHidden = moreAboutMeSection.style.display === 'none' || moreAboutMeSection.style.display === '';
    moreAboutMeSection.style.display = isHidden ? 'block' : 'none';
    moreAboutMeButton.textContent = isHidden ? 'Less About Me' : 'More About Me';
}

// Initially hide the section if needed
document.addEventListener('DOMContentLoaded', function() {
    var moreAboutMeSection = document.querySelector('.more-about-me');
    moreAboutMeSection.style.display = 'none'; // Hide the section on page load
});
// =======------Readmoreless button function--------=================================
document.querySelectorAll('.btn-read').forEach(button => {
    button.addEventListener('click', () => {
        const invisibleParagraph = button.previousElementSibling;
        if (invisibleParagraph.classList.contains('invisible')) {
            invisibleParagraph.classList.remove('invisible');
            button.textContent = 'Read Less';
        } else {
            invisibleParagraph.classList.add('invisible');
            button.textContent = 'Read More';
        }
    });
});