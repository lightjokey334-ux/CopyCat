(function () {
  const toggle = document.getElementById("darkModeToggle");
  if (!toggle) return;

  const stored = localStorage.getItem("gmetrix-dark-mode");
  if (stored === "false") {
    toggle.checked = false;
    document.body.classList.add("light-mode");
  }

  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("gmetrix-dark-mode", "true");
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("gmetrix-dark-mode", "false");
    }
  });
})();
