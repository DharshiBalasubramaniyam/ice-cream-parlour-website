const products_list = [
    {
        id: "p001",
        name: "Chocolate Chip Cookie",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Delicious chocolate chip cookie with a classic taste.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p002",
        name: "Häagen-Dazs Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Rich and creamy Häagen-Dazs vanilla ice cream.",
        image: "images/vanilla.jpg", // Corrected image filename
        rating: 5
    },
    {
        id: "p003",
        name: "Homemade Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Smooth and creamy homemade vanilla ice cream.",
        image: "images/homemade-vanilla.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p004",
        name: "Cookies & Cream",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Classic cookies and cream ice cream with real cookie chunks.",
        image: "images/cookies-and-cream.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p005",
        name: "Sea Salt Caramel Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Rich sea salt caramel gelato with a creamy texture.",
        image: "images/sea-salt-caramel.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p006",
        name: "Stracciatella Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Delicious stracciatella gelato with chocolate flakes.",
        image: "images/stracciatella.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p007",
        name: "Pistachio Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Authentic pistachio gelato made with real pistachios.",
        image: "images/pistachio.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p008",
        name: "Mediterranean Mint",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Refreshing Mediterranean mint gelato with a cool finish.",
        image: "images/mediterranean-mint.jpg", // Suggested new image name
        rating: 3
    },
    {
        id: "p009",
        name: "Raspberry Sorbetto",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Fruity raspberry sorbetto made with real raspberries.",
        image: "images/raspberry-sorbetto.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p010",
        name: "Mango Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Tropical mango sorbet made from fresh mangoes.",
        image: "images/mango-sorbet.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p011",
        name: "Berry Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Mixed berry sorbet with a delightful blend of flavors.",
        image: "images/berry-sorbet.jpg", // Suggested new image name
        rating: 3
    },
    {
        id: "p012",
        name: "Lemon Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Zesty lemon sorbet for a refreshing treat.",
        image: "images/lemon-sorbet.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p013",
        name: "Strawberry Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Sweet strawberry sorbet made with real strawberries.",
        image: "images/strawberry-sorbet.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p014",
        name: "Chocolate Sorbet",
        flavor_id: "f003",
        off: 4,
        price: 50,
        description: "Rich chocolate sorbet for chocolate lovers.",
        image: "images/chocolate-sorbet.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p015",
        name: "Original Frozen Yogurt",
        flavor_id: "f004",
        off: 25,
        price: 50,
        description: "Classic frozen yogurt with a creamy texture.",
        image: "images/frozen-yogurt.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p016",
        name: "Frozen Yogurt Vanilla Bean",
        flavor_id: "f004",
        off: 10,
        price: 50,
        description: "Vanilla bean frozen yogurt made with real vanilla.",
        image: "images/vanilla-bean-yogurt.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p017",
        name: "Strawberry Frozen Yogurt",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Strawberry frozen yogurt for a delightful treat.",
        image: "images/strawberry-frozen-yogurt.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p018",
        name: "Cake Batter Frozen Yogurt",
        flavor_id: "f004",
        off: 12,
        price: 50,
        description: "Fun cake batter frozen yogurt that tastes like dessert.",
        image: "images/cake-batter-yogurt.jpg", // Suggested new image name
        rating: 3
    },
    {
        id: "p019",
        name: "Greek Yogurt",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Creamy Greek yogurt for a healthy snack.",
        image: "images/greek-yogurt.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p020",
        name: "Pistachio Frozen Yogurt",
        flavor_id: "f004",
        off: 1,
        price: 50,
        description: "Pistachio frozen yogurt with a rich flavor.",
        image: "images/pistachio-yogurt.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p021",
        name: "Fudge Brownie",
        flavor_id: "f005",
        off: 0,
        price: 50,
        description: "Decadent fudge brownie ice cream with chunks of brownie.",
        image: "images/fudge-brownie.jpg", // Suggested new image name
        rating: 5
    },
    {
        id: "p022",
        name: "Peanut Butter Ice Cream",
        flavor_id: "f005",
        off: 3,
        price: 50,
        description: "Creamy peanut butter ice cream with a rich taste.",
        image: "images/peanut-butter-ice-cream.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p023",
        name: "Mint Chip Dairy-Free",
        flavor_id: "f005",
        off: 15,
        price: 50,
        description: "Refreshing mint chip ice cream that is dairy-free.",
        image: "images/mint-chip.jpg", // Suggested new image name
        rating: 4
    },
    {
        id: "p024",
        name: "Oat Milk Chocolate",
        flavor_id: "f005",
        off: 8,
        price: 50,
        description: "Delicious oat milk chocolate ice cream for a dairy-free treat.",
        image: "images/oat-milk-chocolate.jpg", // Suggested new image name
        rating: 3
    }
];

export default products_list;
