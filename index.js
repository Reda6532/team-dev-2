const sections = document.querySelectorAll("#section1, #about");
const links = document.querySelectorAll("nav ul li a");

function changeColor() {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
        current = "footer";
    }
    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
}
window.addEventListener("scroll", changeColor);
window.addEventListener("load", changeColor);