import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.SECRET_KEY;
const verifyToken = (allowRoles) => {
  return (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ error: "Access denied" });
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      // Check role
      if (!allowRoles.includes(decoded.role)) {
        return res.status(403).json({
          error: "Forbidden. You are not authorized for this action.",
        });
      }
      next();
    } catch (err) {
      res.status(400).json({ error: "Invalid token Or Token Expired" });
    }
  };
};

export default verifyToken;
