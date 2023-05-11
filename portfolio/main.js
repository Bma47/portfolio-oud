let randomtext = [
  "Bashir Malla Ali ",
    "Software developer",
    "Student aan het Alfa-college",
    "HTML,CSS, Javascript",
    "Arduino Project",
    "Desgin",
    "Let's work together"
];



window.onload = function() {
  DragonNews();
  setInterval(DragonNews, 3000); // تحديث المحتوى كل 30 ثانية
}

function DragonNews() {
    let randomIndex = Math.floor(Math.random() * randomtext.length);
    let dragonNewsElement = document.getElementById("dragonNews");
    dragonNewsElement.innerHTML = randomtext[randomIndex];
    dragonNewsElement.style.color = getRandomColor(); // تحديث لون المحتوى بشكل عشوائي

}



function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

