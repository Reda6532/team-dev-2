const sections = document.querySelectorAll("#section1, #about");
const links = document.querySelectorAll("nav a");

window.onscroll = function() {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        current = "footer";
    }
    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
};