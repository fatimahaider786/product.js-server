import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors()); // Isse frontend ko permission milti hai data lene ki
app.use(express.json());

const products = [
    {
        id: 1,
        title: "Ladies Watch",
        description: "Branded luxury wrist watch",
        price: "150", // Maine price add kar di hai
        imageURL: "https://tse2.mm.bing.net/th/id/OIP.72uQvQ4uVcqYzUPGMIwQwHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: 2,
        title: "Cars",
        description: "The most reliable car in Africa",
        price: "25000",
        imageURL: "https://www.cittoncars.co.za/wp-content/uploads/2024/01/Citton_most-reliable-used-cars.jpg"
    }
];

// Default Route (Check karne ke liye ke server chal raha hai)
app.get("/", (req, res) => {
    res.send("Backend is working! Go to /products to see data.");
});

// Products Route
app.get("/products", (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});