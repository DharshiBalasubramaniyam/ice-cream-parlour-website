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
        image: "https://www.foodandwine.com/thmb/QnTrAIt3aY1g4ToQEk-jULmKMsQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vanilla-ice-cream-FT-RECIPE0324-cebca493f53c4431a0049ea65bfb4796.jpg",
        rating: 4
    },
    {
        id: "p004",
        name: "Cookies & Cream",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "https://cdn.pixabay.com/photo/2024/06/02/17/02/ice-cream-8804689_640.jpg",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQj6poU-Nf13cdAsACl_LR6VZOby9moLZyAw&s",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOdxCgv2ZN60bu8aWPP8ucYu7FFLjvomnBg&s",
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
        image: "https://theviewfromgreatisland.com/wp-content/uploads/2022/05/honeyfrozenyogurt-3.jpg",
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
        image: "https://www.bhg.com/thmb/5pxByFc-YVW7zOYDJE1WbxhISEw=/1244x0/filters:no_upscale():strip_icc()/RU1994601-1-3d5001b1ab0742829b15a138f6e9c45b.jpg",
        rating: 5
    },
    {
        id: "p020",
        name: "Pistachio",
        flavor_id: "f004",
        off: 1,
        price: 50,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "https://5.imimg.com/data5/YS/LU/MY-56124530/pista-ice-cream-500x500.png",
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
        image: "https://chopnotch.com/wp-content/uploads/Peanut-Butter-Ice-Cream.jpg",
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
        image: "https://willaskitchen.com/cdn/shop/articles/04922be300d14486a23df742c65e569a_1024x-imresizer.jpg?v=1628614038",
        rating: 3
    }
]

export default products_list;
