import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

const app = express();
app.use(cors());
app.use(express.json());
//The general convention for API urls is to begin it with: /api/<version-number>
app.use("/api/v1/movies", movies);
//Route that doesn't exist
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
