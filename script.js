//TOGGLE NAVBAR ICONS
let iconMenu = document.querySelector('#icon-menu');
let navigation = document.querySelector('.navigation');

iconMenu.onclick = () => {
  iconMenu.classList.toggle('bx-x');
  navigation.classList.toggle("active");

};









// //Scroll section
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = Window.scrollY;

//     let offset = sec.offsetTop - 100;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id)
//           .classList.add("active");
//       });
//     }
//   });
// };
