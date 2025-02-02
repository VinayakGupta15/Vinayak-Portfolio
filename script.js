document.addEventListener("DOMContentLoaded", function () {
    // Ensure only the first section is visible on page load
    let sections = document.querySelectorAll(".section");
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? "block" : "none";
    });

    // Typing effect for name
    const typing = document.getElementById("typing");
    if (typing) {
        const textArray = ["Cybersecurity Researcher", "Penetration Tester", "Ethical Hacker"]; // Sliding Description Words 
        let textIndex = 0;
        let charIndex = 0;
        function typeEffect() {
            if (charIndex < textArray[textIndex].length) {
                typing.innerHTML += textArray[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(eraseEffect, 1500);
            }
        }
        function eraseEffect() {
            if (charIndex > 0) {
                typing.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseEffect, 50);
            } else {
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(typeEffect, 500);
            }
        }
        typeEffect();
    }
});

// Function to show sections
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
    });

    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block"; // Show only the selected section
    } else {
        console.error("Section not found: " + sectionId);
    }
}

// Function to open external links
function openLink(url) {
    if (url) {
        window.open(url, "_blank");
    } else {
        console.error("Invalid URL");
    }
}

// Function to toggle internship details
function toggleDetails(internshipId) {
    const details = document.getElementById(internshipId);
    if (details) {
        details.style.display = details.style.display === "block" ? "none" : "block";
    } else {
        console.error("Internship details not found: " + internshipId);
    }
}

