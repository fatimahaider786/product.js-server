import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); 
app.use(express.json());

const products = [
    {
        id: 1,
        title: "Ladies Watch",
        description: "Branded luxury wrist watch",
        price: "850",
        imageURL: "https://tse1.explicit.bing.net/th/id/OIP.1fTnRuPqAFztVYzUAu5IJQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
    {
        id: 2,
        title: "Cars",
        description: "The most reliable car in Africa",
        price: "25000000",
        imageURL: "https://tse3.mm.bing.net/th/id/OIP.3foQ1VwX7DFUG0bJWSVZYwHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3" 
    }
];
app.get("/", (req, res) => {
    res.send("Backend is working! Go to /products to see data.");
});
app.get("/products", (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is live on port ${PORT}`);
});