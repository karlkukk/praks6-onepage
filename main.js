const body = document.body;
const themeButton = document.getElementById("color-theme-btn");
const randomFact = document.getElementById("random-fact");
const blogLink = document.getElementById("bloglink");
const factLink = document.getElementById("factlink");
const blog = document.getElementById("blog");
const facts = document.getElementById("facts");

themeButton.addEventListener("click", function (event) {
  body.classList.toggle("dark-theme");
});

blogLink.addEventListener("click", function (event) {
  blog.style.display = "block";
  facts.style.display = "none";
});

factLink.addEventListener("click", function (event) {
  facts.style.display = "block";
  blog.style.display = "none";
});

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function getFact() {
  fetch(`https://uselessfacts.jsph.pl/random.json?language=en`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.text);
      randomFact.innerHTML = lowerFirstLetter(data.text);
    });
}
getFact();
