window.addEventListener('DOMContentLoaded', () => {
  const headerTitle = document.querySelector('h1');
  headerTitle.style.opacity = 0;
  headerTitle.style.transition = 'opacity 1s ease-in-out';

  setTimeout(() => {
    headerTitle.style.opacity = 1;
  }, 500); // Delay the fade-in for a smoother effect
}); 


window.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about');
  aboutSection.style.opacity = 0;
  aboutSection.style.transition = 'opacity 1s ease-in-out';

  setTimeout(() => {
    aboutSection.style.opacity = 1;
  }, 500); // Delay the fade-in for a smoother effect
});


document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default jump behavior
    const targetId = event.target.getAttribute('href').slice(1); // Get target section ID
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
  });
});


const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);
sections.forEach(section => observer.observe(section));


const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add the 'visible' class when the section is in the viewport
function checkVisibility() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Check visibility when scrolling
window.addEventListener('scroll', checkVisibility);

// Initial check in case sections are already in view
checkVisibility();



// Function to toggle light and dark themes
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Change button icon based on theme
  const themeButton = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark-theme')) {
    themeButton.textContent = '🌞'; // Sun icon for light theme
  } else {
    themeButton.textContent = '🌙'; // Moon icon for dark theme
  }
});
