// ----- Auto-writing content on home page -----
const typed = new Typed(".text", {
    strings: ["Frontend Developer.", "CS Engineer.", "UI/UX Designer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ----- Video control -----
document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.getElementById('video-container');
    const videoIframe = document.getElementById('video-iframe');
    const videoSrc = videoIframe.src;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                videoIframe.src = '';
                videoIframe.src = videoSrc;
            }
        });
    }, { threshold: 0 });

    observer.observe(videoContainer);
});

// ----- Greeting auto-write -----
const greetingTyped = new Typed(".greeting", {
    strings: ["<i class='bx bxs-heart'></i> Thank you for Visiting! <i class='bx bxs-heart'></i>"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// ----- More about me tabs -----
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    Array.from(tablinks).forEach(tablink => tablink.classList.remove("active-link"));
    Array.from(tabcontents).forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ----- Toggle More About Me section -----
function toggleMoreAboutMe() {
    const moreAboutMeSection = document.querySelector('.more-about-me');
    const moreAboutMeButton = document.getElementById('more-about-me-btn');

    const isHidden = moreAboutMeSection.style.display === 'none' || moreAboutMeSection.style.display === '';
    moreAboutMeSection.style.display = isHidden ? 'block' : 'none';
    moreAboutMeButton.textContent = isHidden ? 'Less About Me' : 'More About Me';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.more-about-me').style.display = 'none';
});

// ----- Read more/less button function -----
document.querySelectorAll('.btn-read').forEach(button => {
    button.addEventListener('click', () => {
        const invisibleParagraph = button.previousElementSibling;
        const isVisible = !invisibleParagraph.classList.contains('invisible');
        invisibleParagraph.classList.toggle('invisible');
        button.textContent = isVisible ? 'Read More' : 'Read Less';
    });
});

// ----- Form connection to Google Sheets -----
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTm7wnWuCUum7q80k_OH2vNa3ZXLx3X5SL1uRKIGBdUt2B8quYFOLSKdGBTdSlxvR_/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You! For Contacting Me<br>I Will Contact You Soon....";
            setTimeout(() => { msg.innerHTML = ""; }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// ----- Side menu -----
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-250px";
}
