const clickBtn = document.getElementById("clickButton");
const message = document.getElementById("message");
clickBtn.addEventListener("click", () => {
    message.textContent = "Thanks for clicking!";

});

document.getElementById("resetBtn").addEventListener("click",() => {
    message.textContent = "Waiting...";

});

const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    scrollBtn,.style.display = windows.scrolly > 400 ? "block" : "none";

});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    toggleTheme.textContent = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
});

document.addEventListener("contactForm". addEventListener("submit", () => {
    event.preventDefault();
    alert("Thank you for your message!");
    document.getElementById("contactForm").reset();
}));


//Toggle bio details visibility
const bioToggle = document.getElementById('bioToggle');
const bioDetails = document.getElementById('bioDetails');

toggleBio.addEventListener("click", () => {
    if bioDetails;style.display === "none" {
        bioDetails.style.display = "block";
        bioToggle.textContent = "Hide Bio";
    } else {
        bioDetails.style.display = "none";
        bioToggle.textContent = "Show Bio";
    }
});

//Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}