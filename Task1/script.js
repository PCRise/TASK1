const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const rtext = document.querySelector("#result-text");

  if (height === "" || height < 0 || isNaN(height)) {
    //NaN !== NaN
    results.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    //calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display the results
    results.innerHTML = `BMI = <span>${bmi}</span>`;
    if (bmi <= 18.6) {
      rtext.innerHTML = "YOU ARE UNDER WEIGHT";
      rtext.style.color = "red";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      rtext.innerHTML = "YOU ARE NORMAL";
      rtext.style.color = "green";
    } else {
      rtext.innerHTML = "YOU ARE OVER WEIGHT";
      rtext.style.color = "red";
    }
  }
});

//notes
//NaN !== NaN, use the isNaN() function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
