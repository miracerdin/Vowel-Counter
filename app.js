const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");

const vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
const bos = [];
input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    mirac();
  }
});

btn.addEventListener("click", mirac);

function mirac() {
  let sonuc = input.value
    .toLowerCase()
    .split("")
    .filter((x) => vowels.includes(x));
  if (sonuc.length > 0) {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `${input.value} has ${sonuc.length} vowel `;
    input.value = "";
  } else {
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `${input.value} hasn't any vowel `;
  }

  return sonuc.length;
}
// console.log(mirac(input.value));
