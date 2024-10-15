const flavors = [
    { name: "Regular", image: "images/regular.jpg" },
    { name: "Gelato", image: "images/gelato.jpg" },
    { name: "Sorbet", image: "images/sorbet.jpg" },
    { name: "Yogurt", image: "images/yogurt.jpg" },
    { name: "Non Dairy/Vegan", image: "images/vegan.jpg" }
];

document.addEventListener('DOMContentLoaded', function() {
    const flavorContainer = document.querySelector('.flavors-container');
    flavorContainer.innerHTML = flavors.map(flavor => `
        <div class="flavor-item">
            <img src="${flavor.image}" alt="${flavor.name}">
            <h3>${flavor.name}</h3>
        </div>
    `).join('');
});