const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const path = require("path")


const app = express()

app.use(express.json())
app.use(express.static("dist"));
app.use(cors({ origin: "https://omkar-yeske-portfolio.onrender.com", credentials: true }))

app.use("/api/form", require("./form.route"))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error", error: err.message })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running..."))
})