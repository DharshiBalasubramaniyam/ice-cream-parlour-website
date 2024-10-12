const products_list = [
    {
        id: "p001",
        name: "Chocolate Chip Cookie",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p002",
        name: "Häagen-Dazs Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p003",
        name: "Homemade Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg",
        rating: 4
    },
    {
        id: "p004",
        name: "Cookies & Cream",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p005",
        name: "Sea Salt Caramel Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/strawberry.jpg",
        rating: 4
    },
    {
        id: "p006",
        name: "Stracciatella Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/peanut-butter.jpg",
        rating: 5
    },
    {
        id: "p007",
        name: "Pistachio Gelato",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg",
        rating: 4
    },
    {
        id: "p008",
        name: "Mediterranean Mint",
        flavor_id: "f002",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mint.jpg",
        rating: 3
    },
    {
        id: "p009",
        name: "Raspberry Sorbetto",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/rainbow.jpg",
        rating: 4
    },
    {
        id: "p010",
        name: "Mango Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg",
        rating: 5
    },
    {
        id: "p011",
        name: "Berry Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/blue berry.jpg",
        rating: 3
    },
    {
        id: "p012",
        name: "Lemon Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p013",
        name: "Strawberry Sorbet",
        flavor_id: "f003",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/strawberry.jpg",
        rating: 5
    },
    {
        id: "p014",
        name: "Chocolate Sorbet",
        flavor_id: "f003",
        off: 4,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p015",
        name: "Original Frozen Yogurt",
        flavor_id: "f004",
        off: 25,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/peanut-butter.jpg",
        rating: 5
    },
    {
        id: "p016",
        name: "Frozen Yogurt Vanilla Bean",
        flavor_id: "f004",
        off: 10,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg",
        rating: 4
    },
    {
        id: "p017",
        name: "Strawberry",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/strawberry.jpg",
        rating: 4
    },
    {
        id: "p018",
        name: "Cake Batter",
        flavor_id: "f004",
        off: 12,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/rainbow.jpg",
        rating: 3
    },
    {
        id: "p019",
        name: "Greek Yogurt",
        flavor_id: "f004",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg",
        rating: 5
    },
    {
        id: "p020",
        name: "Pistachio",
        flavor_id: "f004",
        off: 1,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg",
        rating: 4
    },
    {
        id: "p021",
        name: "Fudge Brownie",
        flavor_id: "f005",
        off: 0,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/blue berry.jpg",
        rating: 5
    },
    {
        id: "p022",
        name: "Peanut Butter",
        flavor_id: "f005",
        off: 3,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/rainbow.jpg",
        rating: 4
    },
    {
        id: "p023",
        name: "Mint Chip Dairy-Free",
        flavor_id: "f005",
        off: 15,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mint.jpg",
        rating: 4
    },
    {
        id: "p024",
        name: "Oat Milk Chocolate",
        flavor_id: "f005",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg",
        rating: 3
    }
]

export default products_list;
