import express from 'express';
import 'dotenv/config'
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
    });
app.get("/about", (req, res) => {
    res.send([
        {
        "name":"Rohit Singh",
        "age": 21,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["coding", "reading", "gaming"],
        "skills": ["JavaScript", "Python", "Java", "C++"],
    },
    {
        "name":"Rohan Roy",
        "age": 21,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["coding", "reading", "gaming"],
        "skills": ["JavaScript", "Python", "Java", "C++"],
    },
    {
        "name":"Jyoti Gupta",
        "age": 25,
        "college": "SRM University",
        "branch": "I.T",
        "hobbies": ["Cooking", "talking", "gaming"],
        "skills": ["JavaScript"],
    },
    {
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
    console.log("Server is running on port 3000");
    
    }
);    