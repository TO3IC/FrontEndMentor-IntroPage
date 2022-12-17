var features = document.querySelector(".features");
var featurebar = document.querySelector(".features-bar");
var featureOpen = false;

features.addEventListener("click", () => {
  if (featureOpen === false) {
    featureOpen = true;
    features.innerHTML = `Features<svg width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;
    featurebar.classList.add("features-active");
  } else {
    features.innerHTML = `Features <svg width="20" height="6" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
        </svg>`;
    featurebar.classList.remove("features-active");
    featureOpen = false
  }
});


