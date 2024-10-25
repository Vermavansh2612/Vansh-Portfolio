document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById('loading');
    setTimeout(() => loading.classList.add('hidden'), 1000);
});
const hamburger = document.getElementById('hamburger');
const colorStripe = document.getElementById('colorStripe');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    colorStripe.classList.toggle('active');
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        colorStripe.classList.remove('active');
    }
}
const toggleBtn = document.getElementById('mode-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    }
});
function viewResume() {
    window.open('Vansh-CV.pdf');
}

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

var modal = document.getElementById('image-modal');
var modalImg = document.getElementById('modal-img');
var closeBtn = document.getElementsByClassName('close')[0];


document.querySelectorAll('.service-item img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex'; 
        modalImg.src = this.src;
    });
});
closeBtn.onclick = function() {
    modal.style.display = 'none'; 
}

modal.onclick = function(e) {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
}



closeBtn.onclick = function() {
    modal.style.display = "none";
};

function viewSample() {
    window.open('Sample.pdf');
}
sections.forEach(section => observer.observe(section));
function initMap() {
    var location = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}