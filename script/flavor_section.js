import flavors from "./flavor_database.js";

document.addEventListener("DOMContentLoaded", function () {
  const flavorContainer = document.querySelector(".flavors-container");
  
  // Check if the container exists before populating it
  if (flavorContainer) {
    flavorContainer.innerHTML = flavors
      .map(
        (flavor) => `
          <a href="products.html?flavor=${flavor.id}">
            <div class="flavor-item">
              <img src="${flavor.image}" alt="${flavor.name}">
              <h3>${flavor.name}</h3>
            </div>
          </a>
        `
      )
      .join("");
  }
});
