var features = document.querySelector(".features");
var featurebar = document.querySelector(".features-bar");
var companybar = document.querySelector(".company-bar");
var navlinks = document.querySelector(".navlinks");
var hambuger = document.querySelector(".hamburger");
var hambugerclose = document.querySelector(".hamburger-close");
var company = document.querySelector(".company");
var featureOpen = false;
var companyOpen = false;
var NavOpen = false;

features.addEventListener("click", () => {
  if (window.matchMedia("(max-width:768px)").matches) {
    if (featureOpen === false) {
      featureOpen = true;
      features.innerHTML = `Features<svg width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;
      featurebar.style.display = "flex";
      setTimeout(() => {
        featurebar.style.scale = 1;
      }, 300);
    } else {
      features.innerHTML = `Features <svg width="20" height="6" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
      </svg>`;
      featurebar.style.scale = "1 0";
      setTimeout(() => {
        featurebar.style.display = "none";
      }, 350);

      featureOpen = false;
    }
  } else {
    if (featureOpen === false) {
      featureOpen = true;
      features.innerHTML = `Features<svg width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;
      featurebar.classList.add("active");
    } else {
      features.innerHTML = `Features <svg width="20" height="6" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
        </svg>`;
      featurebar.classList.remove("active");
      featureOpen = false;
    }
  }
});

company.addEventListener("click", () => {
  if (window.matchMedia("(max-width:768px)").matches) {
    if (companyOpen === false) {
      companyOpen = true;
      company.innerHTML = `Company<svg width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;
      companybar.style.display = "flex";
      setTimeout(() => {
        companybar.style.scale = 1;
      }, 300);
    } else {
      features.innerHTML = `Company <svg width="20" height="6" xmlns="http://www.w3.org/2000/svg">
      <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
      </svg>`;
      companybar.style.scale = "1 0";
      setTimeout(() => {
        companybar.style.display = "none";
      }, 350);

      companyOpen = false;
    }
  } else {
    if (companyOpen === false) {
      companyOpen = true;
      company.innerHTML = `Company<svg width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>`;
      companybar.classList.add("active");
    } else {
      company.innerHTML = `Company<svg width="20" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" /></svg>`;
      companybar.classList.remove("active");
      companyOpen = false;
    }
  }
});

hambuger.addEventListener("click", () => {
  navlinks.style.translate = "0 0";
  hambuger.style.display = "none";
});

hambugerclose.addEventListener("click", () => {
  navlinks.style.translate = "50vh 0";
  hambuger.style.display = "flex";
});
