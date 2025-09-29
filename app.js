// ================== Header Scroll Effect ==================
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Scroll Progress Bar
  const progress = document.getElementById("progress-bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressHeight = (window.scrollY / totalHeight) * 100;
  progress.style.width = progressHeight + "%";
});

// ================== Smooth Scroll ==================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// ================== Contact Form Submission ==================
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
  this.reset();
});

// ================== Skill Cards Animation ==================
const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

skillCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// ================== Project Cards Animation ==================
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

projectCards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  projectObserver.observe(card);
});

// ================== Typing Effect ==================
const typingText = document.querySelector('.hero-content h1 span');
const text = "Vishal Shrivastav";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', function () {
  typingText.innerHTML = '';
  setTimeout(typeWriter, 1000);
});

// ================== Dark/Light Mode Toggle ==================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// ================== Project Filter ==================
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ================== Typing Effect with Multiple Roles ==================
const roles = ["Vishal Shrivastav", "Full Stack Developer", "MERN Stack Expert", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.innerHTML += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}
function eraseRole() {
  if (charIndex > 0) {
    typingElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}
window.addEventListener("load", () => typeRole());
