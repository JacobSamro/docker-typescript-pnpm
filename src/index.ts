import express from "express";
import cors from "cors";
import helmet from "helmet";

// Create express instance
const app = express();

app.use(cors());

app.use(helmet());

app.get("/healthz", (req, res) => res.send("OK"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
