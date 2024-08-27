const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elem = document.querySelectorAll(".elements");
var elem1_img = document.querySelector(".elem1-img");

var elem1 = document.querySelector(".elem1");

elem.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    elem1_img.style.display = "block";
    data = element.getAttribute("data");
    console.log(data);
    elem1_img.style.backgroundImage = `url(${data})`;
  });
  element.addEventListener("mouseleave", () => {
    elem1_img.style.display = "none";
  });
});
const serDescr = document.querySelector("#serDescr");
const page4Serv = document.querySelectorAll(".serv");
const page4Img = document.querySelector(".page3-hero-right");
page4Serv.forEach((element) => {
  element.addEventListener("click", () => {
    const servContent = element.getAttribute("servContent")
    serDescr.textContent = servContent
    
    const serv = element.getAttribute("servData");
    page4Img.style.backgroundImage = `url(${serv})`
    
  });
});

// ------------------------------------------------------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
