import jwt from "jsonwebtoken"

export const protect = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

export const isExecutive = (req, res, next) => {
  if (req.user.role !== "executive") {
    return res
      .status(403)
      .json({ message: "Forbidden: Only executives can perfom this action" });
  }
  next();
};
