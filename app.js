const express = require("express");
const path = require("node:path");
const indexRoute = require("./routes/indexRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/", indexRoute);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
