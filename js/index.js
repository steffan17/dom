console.log('skrypt JavaScript2');



const footer = document.getElementById('footer');
const dayField = document.getElementById('day');
const dayMenu = document.getElementById('dayMenu');
const dayMenuButtonNext = document.getElementById('dayMenuButtonNext');




footer.addEventListener("click", () => addDayField());
dayMenuButtonNext.addEventListener("click", () => console.log("dayMenuButtonNext"));

const appMenuButton = document.getElementById('appMenuButton');
const appMenu = document.getElementById('appMenu');
const appMenuBack = document.getElementById('appMenuBack');
appMenuButton.addEventListener("click", () => appMenu.style.visibility='visible');
appMenuBack.addEventListener("click", () => appMenu.style.visibility='hidden');

