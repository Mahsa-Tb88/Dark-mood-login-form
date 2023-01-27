const themeBtns = [...document.querySelectorAll(".theme-btn")];
const themePage = document.querySelector(".theme");

const darkIcon = document.querySelector("[data-theme='dark']");
const lightIcon = document.querySelector("[data-theme='light']");

const themeInLocalstorage = localStorage.getItem("theme");
themeBtns.forEach((item) => item.classList.remove("bg-slate-100"));
themeBtns.forEach((item) => {
  if (item.lastElementChild.textContent == themeInLocalstorage) {
    item.classList.add("bg-slate-100");
  } else if (!themeInLocalstorage) {
    themeBtns[2].classList.add("bg-slate-100");
  }
});

themePage.addEventListener("click", () => {
  if (themePage.nextElementSibling.classList.contains("hidden")) {
    themePage.nextElementSibling.classList.remove("hidden");
    themePage.nextElementSibling.classList.add("flex");
  } else if (themePage.nextElementSibling.classList.contains("flex")) {
    themePage.nextElementSibling.classList.remove("flex");
    themePage.nextElementSibling.classList.add("hidden");
  }
});
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userTheme == "dark") {
  document.documentElement.classList.add("dark");
  themePage.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-5 h-5 stroke-blue-500 darkBtn"
    data-theme="dark"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>`;
} else if (userTheme == "light") {
  document.documentElement.classList.remove("dark");
  themePage.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-5 h-5 stroke-blue-500 lightBtn"
  data-theme="light"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  />
</svg>`;
} else if (!userTheme && systemTheme) {
  document.documentElement.classList.add("dark");
  themePage.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-5 h-5 stroke-gray-400"
  data-theme="system"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
  />
</svg>`;
} else {
  document.documentElement.classList.remove("dark");
  themePage.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-5 h-5 stroke-gray-400"
  data-theme="system"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
  />
</svg>`;
}

themeBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const state = item.lastElementChild.textContent;
    console.log(state);
    themeBtns.forEach((themeBtn) => themeBtn.classList.remove("bg-slate-100"));
    if (state == "dark") {
      document.documentElement.classList.add("dark");
      themePage.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 stroke-blue-500 darkBtn"
        data-theme="dark"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>`;
      //save to localStorage
      const theme = "dark";
      localStorage.setItem("theme", theme);
      //close the tab theme
      themePage.nextElementSibling.classList.add("hidden");
      //make bg
      item.classList.add("bg-slate-100");
    } else if (state == "light") {
      document.documentElement.classList.remove("dark");
      themePage.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 stroke-blue-500 lightBtn"
      data-theme="light"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>`;
      const theme = "light";
      localStorage.setItem("theme", theme);
      themePage.nextElementSibling.classList.add("hidden");
      //make bg
      item.classList.add("bg-slate-100");
    } else if (state == "system") {
      const themeSystem = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (themeSystem) {
        document.documentElement.classList.add("dark");
        themePage.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 stroke-gray-400"
        data-theme="system"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>`;

        //close the tab theme
        themePage.nextElementSibling.classList.add("hidden");
        //make bg
        item.classList.add("bg-slate-100");
        //remove localStorage theme
        localStorage.removeItem("theme");
      } else {
        document.documentElement.classList.remove("dark");
        themePage.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 stroke-gray-400"
        data-theme="system"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>`;
        //close the tab theme
        themePage.nextElementSibling.classList.add("hidden");
        //make bg
        item.classList.add("bg-slate-100");
        //remove localStorage theme
        localStorage.removeItem("theme");
      }
    }
  });
});
