
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
 

  
    const counters = document.querySelectorAll('.count-number');
     counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace(/\D/g, '');
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment) + (target >= 1000 ? 'K+' : '+');
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + (target >= 1000 ? 'K+' : '+');
        }
      };
      updateCount();
    });



const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    accordions.forEach((el) => {
      if (el !== this) {
        el.classList.remove("active");
        el.nextElementSibling.style.maxHeight = null;
        el.nextElementSibling.classList.remove("open");
      }
    });

    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("open");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open");
    }
  });
});