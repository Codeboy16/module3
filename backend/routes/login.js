import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();
const JWT_SECRET = process.env.SECRET_KEY;
const authMiddlewaker = (req, res, next) => {
  const { email, password } = req.body;
  const data = { email: "operator@gmail.com", password: "12345678" };
  if (email === data.email && password === data.password) {
    const token = jwt.sign(
      { email: data.email, role: "operator" },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({
      message: "Login successful!",
      token,
    });
    // res.json({ token });
    // next();
  } else if (email === "verifier@gmail.com" && password === "12345678") {
    const token = jwt.sign({ email: email, role: "verifier" }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful!",
      token,
    });
  } else if (email === "approver@gmail.com" && password === "12345678") {
    const token = jwt.sign({ email: email, role: "approver" }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful!",
      token,
    });
  } else {
    res.status(400).json({ message: "Login Invalid credentials" });
  }
  if (!email || !password) {
    return res.status(400).send("Email and Password are required.");
  }
};
router.post("/", authMiddlewaker, (req, res) => {
  res.status(200).send({
    message:
      "Login Data Using Post Method " +
      req.body.email +
      " " +
      req.body.password,
    role: "operator",
  });
});

export default router;
