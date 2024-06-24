//TOGGLE NAVBAR ICONS
let iconMenu = document.querySelector("#icon-menu");
let navigation = document.querySelector(".navigation");

iconMenu.onclick = () => {
  iconMenu.classlist.toggle("bx-x");
  navigation.classlist.toggle("active");
};
