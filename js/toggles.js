document.addEventListener("DOMContentLoaded", function () {
  const priceToggle = document.getElementById("priceToggle");

  priceToggle.addEventListener("change", function () {
    const priceElements = document.querySelectorAll(".price span");

    priceElements.forEach(function (elem) {
      const monthlyPrice = elem.getAttribute("data-monthly");
      const yearlyPrice = elem.getAttribute("data-yearly");

      if (priceToggle.checked) {
        elem.textContent = yearlyPrice;
      } else {
        elem.textContent = monthlyPrice;
      }
    });
  });
});
