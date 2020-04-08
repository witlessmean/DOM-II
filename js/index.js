// Your code goes here

// Your code goes here

const h2HoverColor = document.querySelectorAll("h2");
const h2HoverColorArr = Array.from(h2HoverColor);

///////////////////////////////////////////////////////

const headerImg = document.querySelector("header img");

headerImg.addEventListener("mouseenter", () => {
  headerImg.style.transform = "scale(1.1)";
  headerImg.style.transition = "transform 1s";
});

headerImg.addEventListener("mouseleave", () => {
  headerImg.style.transform = "scale(1)";
});

///////////////////////map-img////////////////////////////

const mapImg = document.querySelector('[src="img/adventure.jpg"]');

// transform: scaleX(-1)

mapImg.addEventListener("mouseenter", () => {
  mapImg.style.transform = "scaleX(-1)";
  mapImg.style.transition = "1s";
});

mapImg.addEventListener("mouseleave", () => {
  mapImg.style.transform = "scaleX(1)";
});

///////////////////////first boat-img///////////////////////////

const firstBoatImg = document.querySelector('[src="img/fun.jpg"]');

firstBoatImg.addEventListener("mouseenter", () => {
  firstBoatImg.style.transform = "scale(-2)";
  firstBoatImg.style.transition = "transform 1s";
});

firstBoatImg.addEventListener("mouseleave", () => {
  firstBoatImg.style.transform = "scale(1)";
});

///////////////////////second boat-img///////////////////////////////

const secondBoatImg = document.querySelector('[src="img/destination.jpg"]');

secondBoatImg.addEventListener("mouseenter", () => {
  secondBoatImg.style.borderRadius = "100px";
  secondBoatImg.style.transition = "2s";
  secondBoatImg.style.border = "dashed 2px black";
});

secondBoatImg.addEventListener("mouseleave", () => {
  secondBoatImg.style.borderRadius = "8px";
});

///////////////////////background/////////////////////////////////

const backgroundColor = document.querySelector("body");

backgroundColor.addEventListener("dblclick", () => {
  backgroundColor.style.backgroundColor = "#A3BBAD";
  backgroundColor.style.transition = "2s";
});

/////////////////////////header////////////////////////////////////////

const header = document.querySelector("header");

header.addEventListener("dblclick", (ev) => {
  header.style.backgroundColor = "#EBC7B7";
  header.style.transition = "2s";
  ev.stopImmediatePropagation();
});

////////////////////////nav-loop//////////////////////////////////////////

document.querySelectorAll("nav a").forEach((el) => {
  el.addEventListener("click", () => {
    el.style.color = "purple";
    el.style.transition = "0.5s";
  });
});

/////////////////////h2loop///////////////////////////////////////////

document.querySelectorAll("h2").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.fontSize = "5rem";
    el.style.color = "#116466";
    el.style.textShadow = "2px 2px #ff0000";
    el.style.transition = "0.5s";
  });
});

//////////////////h4loop/////////////////////////////////////////

document.querySelectorAll("h4").forEach((el) => {
  el.addEventListener("click", () => {
    el.style.transform = "matrix(0.586,0.8,-0.8,0.586,40,30)";
    el.style.fontSize = "10rem";
    el.style.transition = "1s";
    el.style.color = "blue";
  });
});

document.querySelectorAll("h4").forEach((el) => {
    el.addEventListener("dblclick", () => {
    //el.style.transform = "matrix(0.586,0.8,-0.8,0.586,40,30)";
      el.style.fontSize = "2.5rem";
      el.style.transition = "1s";
      el.style.color = "black";
    });
  });

  //looking to invese the matrix here