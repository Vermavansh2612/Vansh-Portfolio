document.getElementById('downloadResume').addEventListener('click', function() {
    // Replace "resume.pdf" with your actual resume URL or file path
    window.open('documents/Vansh-CV.pdf', '_blank');
 });
 document.getElementById('downloadSample').addEventListener('click', function() {
   // Replace "resume.pdf" with your actual resume URL or file path
   window.open('documents/Samples.pdf', '_blank');
});
 // Smooth scrolling & active nav link functionality
 const navLinks = document.querySelectorAll('.nav-link');
 navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
       e.preventDefault();
       navLinks.forEach(lnk => lnk.classList.remove('active'));
       this.classList.add('active');
       const targetId = this.getAttribute('href').substring(1);
       const targetElement = document.getElementById(targetId);
       if (targetElement) {
          window.scrollTo({
             top: targetElement.offsetTop,
             behavior: 'smooth'
          });
       }
    });
 });
 document.addEventListener("DOMContentLoaded", function() {
   const loading = document.getElementById('loading');
   // Wait 1 second, then fade out the loader
   setTimeout(() => {
     loading.classList.add('hidden');
     // After fade-out transition (0.5s), remove the loader from view
     setTimeout(() => loading.style.display = "none", 500);
   }, 1000);
 });
 
 // Scroll-to-Top Button functionality
 const scrollToTopButton = document.getElementById('scrollToTop');
 window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
       scrollToTopButton.style.display = 'block';
    } else {
       scrollToTopButton.style.display = 'none';
    }
 });
 scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
 });
 
 // Intersection Observer for fade-in & slide-up effects
 const observerOptions = { threshold: 0.2 };
 const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
       if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
       }
    });
 }, observerOptions);
 const sections = document.querySelectorAll('.header, .about, .stats-row, .education-section, .hobbies, .download-resume, .portfolio, .contact, .studies, .download-sample');
 sections.forEach(section => { observer.observe(section); });
 
 // Additional hover effects on nav links using JS
 navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
       this.style.backgroundColor = "#444";
    });
    link.addEventListener('mouseleave', function() {
       if (!this.classList.contains('active')) {
          this.style.backgroundColor = "";
       }
    });
 });