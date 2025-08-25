// Nav List
document.querySelectorAll('.scroll-to').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent default anchor behavior
      const targetClass = link.getAttribute('data-target');  // Get the target class from the link

      const targetElement = document.querySelector(targetClass);  // Find the element by class
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,  // Scroll to the top of the target element
              behavior: 'smooth'  // Smooth scrolling
          });
      }
  });
});

// Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // Stop observing once it’s visible
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
  
    reveals.forEach(el => observer.observe(el)); // Observe each element
  });


  