window.addEventListener("load", function () {
  var toggles = document.querySelectorAll(".dropdown-toggle");
  toggles.forEach(function(toggle) {
    toggle.addEventListener("click", function() {
      toggle.nextElementSibling.classList.toggle("show");
    })
  })
});
