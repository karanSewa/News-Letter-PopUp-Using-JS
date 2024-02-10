const togglefunction = function () {
  const newsLetter = document.querySelector(".newsLetter");
  newsLetter.classList.toggle("active");
};
document
  .querySelector("#subscribe-btn")
  .addEventListener("click", togglefunction);
document.querySelector(".cross-icon").addEventListener("click", togglefunction);
