// =====================================
// Creating Responsive Navbar
// ===================================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// =====================================
// Creating Sticky Responsive Navbar
// ===================================
// const heroSection2 = document.querySelector(".section-hero")
// const observer = new IntersectionObserver((entries) => {
//   const ent = entries[0];
//   console.log(ent);
//   !ent.isIntersecting
//   ? document.body.classList.add("sticky")
//   : document.body.classList.remove("sticky");
// },{
//   root: null,
//   threshold: 0, 
// });

// observer.observe(heroSection2);

// =====================================
// Creating portfolio tabbed component
// ===================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) =>  curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attribute 
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});

// Swiper Js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  // Scroll to top Button 

  const heroSection = document.querySelector(".header");
  const footerElem = document.querySelector(".section-footer");

  const scrollElement = document.createElement("div"); 
  scrollElement.classList.add("scrollTop-style");

  scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`

  footerElem.after(scrollElement);

  const scrollTop = () => {
    heroSection.scrollIntoView({
      behavior: "smooth"
    });
  }
  scrollElement.addEventListener("click", scrollTop);


  // Smooth Scrolling Effect
  const portfolioSec = document.querySelector(".section-portfolio");
  const contactSec = document.querySelector(".section-contact");
  const serviceSec = document.querySelector(".section-services");
  const aboutSec = document.querySelector(".section-biodata");
  const homeSec = document.querySelector(".section-hero");

  document.querySelector(".portfolio-link").addEventListener("click", () =>{
    portfolioSec.scrollIntoView({behavior: "smooth"})
  });

  document.querySelector(".hireme-btn").addEventListener("click", (e) =>{
    e.preventDefault();
    contactSec.scrollIntoView({behavior: "smooth"});
  });

  document.querySelector(".contact-link").addEventListener("click", (e) =>{
    e.preventDefault();
    contactSec.scrollIntoView({behavior: "smooth"});
  });

  document.querySelector(".hireme").addEventListener("click", (e) =>{
    e.preventDefault();
    contactSec.scrollIntoView({behavior: "smooth"});
  });

  document.querySelector(".home-link").addEventListener("click", (e) =>{
    e.preventDefault();
    homeSec.scrollIntoView({behavior: "smooth"});
  });

  

  const workSection = document.querySelector(".section-work-data");
  const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    console.log(entry);

    // if(entry.isIntersecting == false);
    if(!entry.isIntersecting) return;

    // Animate Number Counter

  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 200;

  counterNum.forEach((curElem) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      // console.log(targetNumber);
      const initialNumber = parseInt(curElem.innerText);
      // console.log(initialNumber);
      const incrementNumber = Math.trunc(targetNumber/speed);
      // console.log(incrementNumber);

      if(initialNumber < targetNumber){
        curElem.innerText = `${initialNumber + incrementNumber}+`;

        setTimeout(updateNumber , 10);
      }
    };

    updateNumber();
  });

  observer.unobserve(workSection);
  }, {
    root:null,
    threshold: 0,
  });

  workObserver.observe(workSection);