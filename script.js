// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +  id + ']').classList.add('active'); 
            });
            // active sections for animation on scroll 
            sec.classList.add('show-animate'); 
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');   
        }
     });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Contact me

// Get form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    // Check if any field is empty
    if (fullName === '' || email === '' || mobileNumber === '' || subject === '' || message === '') {
        alert('Please enter all fields');
    } else {
        // Log the form input values
        console.log('Full Name:', fullName);
        console.log('Email Address:', email);
        console.log('Mobile Number:', mobileNumber);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Reset form fields
        form.reset();

        // Show success message
        alert('Message sent successfully!');
    }
});