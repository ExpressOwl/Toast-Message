// Dom
const success = document.querySelector(".success");
const warning = document.querySelector(".warning");
const info = document.querySelector(".info");

let toastContainer;

function generateToast({
  //Done as an object because it's easier
  message,
  background = "#00214d",
  color = "#fffffe",
  length = "3000ms",
}) {
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `<p class='toast' 
  style='background-color: ${background};
  color: ${color};
  animation-duration: ${length}'>
  ${message}
  </p>`
  );
  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
}

(function initToast() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class='toast_container'></div>`
  );
  toastContainer = document.querySelector(".toast_container");
  // After making the toast_container div and class we can assign it
})(); // Invoked function ()()

success.addEventListener("click", () => {
  generateToast({
    message: "Works 100% of the time 50% of the time",
    background: "hsl(171 100% 46.1%)",
    color: "hsl(171 100% 13.1%)",
    length: "5000ms",
    // Works but will the toast will stay invisible and populate
    // the page if not removed after clicked, hence line 25
  });
});

warning.addEventListener("click", () => {
  generateToast({
    message: "Are you positive?",
    background: "hsl(350 100% 66.5%)",
    color: "hsl(51 97.8% 12.1%)",
  });
});

info.addEventListener("click", () => {
  generateToast({
    message: "Write that down, write that down!",
    background: "hsl(51 97.8% 65.1%%)",
    color: "hsl(51 97.8% 12.1%)",
    length: "6000ms",
  });
});
