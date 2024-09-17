const products_list = [
    {
        id: "p001",
        name: "Chocolate Chip Cookie",
        category: "Regular",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg"
    },
    {
        id: "p002",
        name: "Häagen-Dazs Vanilla",
        category: "Regular",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg"
    },
    {
        id: "p003",
        name: "Homemade Vanilla",
        category: "Regular",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg"
    },
    {
        id: "p004",
        name: "Cookies & Cream",
        category: "Regular",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg"
    },
    {
        id: "p005",
        name: "Sea Salt Caramel Gelato",
        category: "Gelato",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/strawberry.jpg"
    },
    {
        id: "p006",
        name: "Stracciatella Gelato",
        category: "Gelato",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/peanut-butter.jpg"
    },
    {
        id: "p007",
        name: "Pistachio Gelato",
        category: "Gelato",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg"
    },
    {
        id: "p008",
        name: "Mediterranean Mint",
        category: "Gelato",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mint.jpg"
    },
    {
        id: "p009",
        name: "Raspberry Sorbetto",
        category: "Sorbet",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/rainbow.jpg"
    },
    {
        id: "p010",
        name: "Mango Sorbet",
        category: "Sorbet",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg"
    },
    {
        id: "p011",
        name: "Berry Sorbet",
        category: "Sorbet",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/blue berry.jpg"
    },
    {
        id: "p012",
        name: "Lemon Sorbet",
        category: "Sorbet",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg"
    },
    {
        id: "p013",
        name: "Strawberry Sorbet",
        category: "Sorbet",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/strawberry.jpg"
    },
    {
        id: "p014",
        name: "Chocolate Sorbet",
        category: "Sorbet",
        off: 4,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg"
    },
    {
        id: "p015",
        name: "Original Frozen Yogurt",
        category: "Frozen Yogurt",
        off: 25,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/peanut-butter.jpg"
    },
    {
        id: "p016",
        name: "Frozen Yogurt Vanilla Bean",
        category: "Frozen Yogurt",
        off: 10,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg"
    },
    {
        id: "p017",
        name: " Strawberry",
        category: "Frozen Yogurt",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/strawberry.jpg"
    },
    {
        id: "p018",
        name: "Cake Batter",
        category: "Frozen Yogurt",
        off: 12,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/rainbow.jpg"
    },
    {
        id: "p019",
        name: "Greek Yogurt",
        category: "Frozen Yogurt",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg"
    },
    {
        id: "p020",
        name: "Pistachio",
        category: "Frozen Yogurt",
        off: 1,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg"
    },
    {
        id: "p021",
        name: "Fudge Brownie",
        category: "Non Diary/Vegen",
        off: 0,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/blue berry.jpg"
    },
    {
        id: "p022",
        name: "Peanut Butter",
        category: "Non Diary/Vegen",
        off: 3,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/rainbow.jpg"
    },
    {
        id: "p023",
        name: "Mint Chip Dairy-Free",
        category: "Non Diary/Vegen",
        off: 15,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mint.jpg"
    },
    {
        id: "p024",
        name: "Oat Milk Chocolate",
        category: "Non Diary/Vegen",
        off: 8,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg"
    },
]

export default products_list;