document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Function to set theme
  function setTheme(theme) {
      if (theme === "light") {
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
      } else {
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
      }
      localStorage.setItem("theme", theme);
  }

  // Check local storage for theme preference
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", function () {
      const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
      setTheme(newTheme);
  });
});
