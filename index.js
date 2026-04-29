import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/products", (req, res) => {
    const Cards = [
        {
            id: 1,
            title: "ladies watch",
            description: "branded luxury wrist watch",
            imageURL: "https://tse2.mm.bing.net/th/id/OIP.72uQvQ4uVcqYzUPGWMlwQwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
            id: 2,
            title: "cars",
            description: "the most reliable car in Africa",
            imageURL: "https://www.cittoncars.co.za/wp-content/uploads/2024/01/Citton_most-reliable-used-cars-in-the-SA-market.jpg",
        },
    ];
    res.send(Cards);
});
const PORT = process.env.PORT || 5050;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is live on port ${PORT}`);
});