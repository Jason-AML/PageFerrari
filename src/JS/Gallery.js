import {
  animate,
  scroll,
} from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

const items = document.querySelectorAll(".img-container");

// Animate gallery horizontally during vertical scroll
scroll(
  animate(".img-group", {
    transform: ["none", `translateX(-${(items.length - 1) * 100}vw)`],
  }),
  { target: document.querySelector(".img-group-container") }
);
