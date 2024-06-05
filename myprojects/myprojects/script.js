const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

function functionToExecute() {
    document.getElementById("demo").innerHTML = "Hello GymGeek";
  }

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

// ScrollReveal().reveal(".trainer__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const resultDiv = document.getElementById('result');

  if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      let classification = '';

      if (bmi < 18.5) {
          classification = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          classification = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
          classification = 'Overweight';
      } else {
          classification = 'Obesity';
      }

      resultDiv.innerHTML = `Your BMI is ${bmi} (${classification})`;
  } else {
      resultDiv.innerHTML = 'Please enter valid height and weight';
  }
}
