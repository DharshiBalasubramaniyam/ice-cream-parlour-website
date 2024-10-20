const flavors = [
  { id: "f001", name: "Regular", image: "images/regular.jpg" },
  { id: "f002", name: "Gelato", image: "images/gelato.jpg" },
  { id: "f003", name: "Sorbet", image: "images/sorbet.jpg" },
  { id: "f004", name: "Yogurt", image: "images/yogurt.jpg" },
  { id: "f005", name: "Non-Dairy/Vegan", image: "images/vegan.jpg" },
];

document.addEventListener("DOMContentLoaded", function () {
  const flavorContainer = document.querySelector(".flavors-container");
  flavorContainer.innerHTML = flavors
    .map(
      (flavor) => `
          <div class="flavor-item" onclick="window.location.href='products.html?flavor=${flavor.id}'">
              <img src="${flavor.image}" alt="${flavor.name}">
              <h3>${flavor.name}</h3>
          </div>
      `
    )
    .join("");
});
