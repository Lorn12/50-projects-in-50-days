const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

//EVENTS FOR HOVER EFFECT__________________________________________________________________________________________________

//SPIT-LEFT_______
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

//SPLIT-RIGHT_______
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);

right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
