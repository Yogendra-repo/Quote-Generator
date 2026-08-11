import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import "dotenv/config";

const app = express();
const port = 3000;

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { breweryData: null });
});

app.post("/random", async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { "X-Api-Key": API_KEY }
    });

    const quoteData = {
      quote: response.data[0].quote,
      author: response.data[0].author
    };

    res.render("index.ejs", { breweryData: quoteData });

  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("API Error:", error.response?.data);
    res.status(500).send("Error retrieving quote from API");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});