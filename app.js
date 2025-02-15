const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");
const shopsRoutes = require("./routes/shopsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const passport =require("passport")
const { localStrategy ,jwtStrategy} = require("./middleware/passport");


const app = express();
app.use(cors());

app.use(express.json());

app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(usersRoutes);

app.use("/products", productsRoutes);
app.use("/shops", shopsRoutes);
app.use("/media", express.static("media"));

//error middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});
app.use((req, res, next) => {
  res.status(404).json({ message: "path not found" });
});

app.listen(8000);
