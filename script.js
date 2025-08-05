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

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mainNav.classList.toggle('active');
    });
}

// Left-side navigation toggle
const leftNavBtn = document.getElementById('left-nav-btn');
const leftSideNav = document.getElementById('left-side-nav');
if (leftNavBtn && leftSideNav) {
  leftNavBtn.addEventListener('click', function() {
    leftSideNav.classList.toggle('open');
    if (leftSideNav.classList.contains('open')) {
      leftSideNav.focus();
    }
  });
  // Close nav when clicking outside
  document.addEventListener('click', function(e) {
    if (leftSideNav.classList.contains('open') && !leftSideNav.contains(e.target) && e.target !== leftNavBtn) {
      leftSideNav.classList.remove('open');
    }
  });
  // Close nav on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && leftSideNav.classList.contains('open')) {
      leftSideNav.classList.remove('open');
    }
  });
  // Optional: Close nav after clicking a section
  leftSideNav.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      leftSideNav.classList.remove('open');
    });
  });
}

// Function to show sections
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
        section.classList.remove('active'); // Remove active class
    });

    let activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block"; // Show only the selected section
        setTimeout(() => activeSection.classList.add('active'), 10); // Add active class with a small delay
    } else {
        console.error("Section not found: " + sectionId);
    }
    // Close nav on mobile
    if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
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

