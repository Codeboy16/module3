import express from 'express';
import 'dotenv/config'
import cors from 'cors';
const app = express();
app.use(cors()); 
app.get("/", (req, res) => {
    res.send("Back-End Code ");
    });
app.get("/about", (req, res) => {
    res.send([
        {
        "id":1,    
        "name":"Rohit Singh",
        "age": 21,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["coding", "reading", "gaming"],
        "skills": ["JavaScript", "Python", "Java", "C++"],
    },
    {
        "id":2,
        "name":"Rohan Roy",
        "age": 21,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["coding", "reading", "gaming"],
        "skills": ["JavaScript", "Python", "Java", "C++"],
    },
    {
        "id":3,
        "name":"Jyoti Gupta",
        "age": 16,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["Cooking", "talking", "gaming"],
        "skills": ["JavaScript"],
    },
    {
        "id":4,
        "name":"Manish Baitha",
        "age": 23,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["coding", "gaming"],
        "skills": ["JavaScript", "Python", "Java", "C++"],
    },
   ]);
    });

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    
    }
);    