const params = new URLSearchParams(window.location.search);
const currentCategory = params.get("category");

const filters = document.querySelectorAll(".filter-item");

filters.forEach((link) => {
  const category = link.getAttribute("data-category");

  if (
    (currentCategory && category === currentCategory) ||
    (!currentCategory && category === "All")
  ) {
    link.classList.add("active");
  }
});

const toggle = document.getElementById("taxToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach((p) => {
    let basePrice = Number(p.getAttribute("data-price"));
    let finalPrice = toggle.checked ? basePrice * 1.18 : basePrice;

    p.querySelector(".price-value").innerText =
      "Price: ₹" + Math.round(finalPrice).toLocaleString("en-IN");
  });
});
