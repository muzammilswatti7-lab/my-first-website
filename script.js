// ================= AOS =================

AOS.init({
  duration: 1000,
  once: true
});

// ================= COUNTER =================

const counters = document.querySelectorAll(".result-card h2");

const runCounter = () => {
  counters.forEach(counter => {

    const target = counter.innerText;

    let number = parseInt(target.replace(/\D/g, ""));

    let count = 0;

    let speed = number / 80;

    const update = () => {

      count += speed;

      if (count < number) {

        if (target.includes("$")) {
          counter.innerText = "$" + Math.floor(count) + "M+";
        }

        else if (target.includes("%")) {
          counter.innerText = Math.floor(count) + "%";
        }

        else if (target.includes("+")) {
          counter.innerText = Math.floor(count) + "+";
        }

        requestAnimationFrame(update);

      } else {

        counter.innerText = target;

      }

    };

    update();

  });
};

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      runCounter();

      observer.disconnect();

    }

  });

});

observer.observe(document.querySelector(".results"));
// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});