const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Welcome! You are authenticated.",
    user: req.user,
  });
});

module.exports = router;