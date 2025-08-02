welcomeMessage();

// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Check if the user has scrolled down more than 20px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // If so, display the button
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuItems = document.querySelectorAll('#mobile-menu a');
    
    // Toggle menu ketika tombol hamburger diklik
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        this.innerHTML = mobileMenu.classList.contains('hidden') ? '☰' : '×';
        this.classList.toggle('rotate-90');
    });
    
    // Tutup menu ketika salah satu item diklik
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuButton.innerHTML = '☰';
            menuButton.classList.remove('rotate-90');
        });
    });
});
  
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Function to validate the form input
function validateform() {
    const name = document.getElementById("name-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const phone = document.getElementById("phone-input").value.trim();
    const birthday = document.getElementById("birthday").value.trim();
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("pesan").value.trim();
    const result = document.getElementById("result-form");

    result.textContent = ""; // Clear previous result

    if (!name || !email || !phone || !birthday || !genderChecked || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const gender = genderChecked.value;

    const now = new Date();
    const formattedTime = now.toLocaleString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    // Display the result in the result-form element
    result.innerHTML = `
  <p><strong>Terima kasih, ${name}. Pesan Anda telah dikirim!</strong></p>
  <div class="result-display">
    <div>
    <span class="labels">Waktu</span> <span class="colons">:</span> ${formattedTime}
    </div>
    <div>
    <span class="labels">Nama</span> <span class="colons">:</span> ${name}</div>
    <div>
    <span class="labels">Email</span> <span class="colons">:</span> ${email}</div>
    <div>
    <span class="labels">No. HP</span> <span class="colons">:</span> ${phone}</div>
    <div>
    <span class="labels">Tanggal Lahir</span> <span class="colons">:</span> ${birthday}
    </div>
    <div>
    <span class="labels">Jenis Kelamin</span> <span class="colons">:</span> ${gender}
    </div>
    <div>
    <span class="labels">Pesan</span> <span class="colons">:</span> ${message}
    </div>
  </div>
`;
}

function welcomeMessage() {
    // Prompt the user for their name and display it in the welcome speech element
    const popup = prompt('Please enter your name:');

    // If the user provides a name, update the welcome speech element
    if (popup) {
        // Get the welcome speech element and set its text content to the user's name
        const welcomeElement = document.getElementById('welcome-speech');

        // Update the text content of the welcome speech element with the user's name
        welcomeElement.textContent = popup;
    }
}