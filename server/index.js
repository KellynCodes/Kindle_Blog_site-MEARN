const express = require("express");
const next = require("next");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
require("dotenv").config();
require("./passport");

// REQURIE ROUTE
const authRoute = require("./routes/auth");
const userRoute = require("./routes/userRoute");

app
  .prepare()
  .then(() => {
    const Server = express();

    try {
      mongoose
        .connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => console.log(`MongoDb Connected successfully`));
    } catch (error) {
      console.log(error);
    }

    Server.use(
      session({
        secret: "ieji?aiuf8q2oe9i4302aeurie",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true },
      })
    );

    Server.use(
      cors({
        origin: "http://localhost:5000",
      })
    );

    Server.use(passport.initialize());
    Server.use(passport.session());

    Server.use(bodyParser.urlencoded({ extended: true }));
    Server.use(bodyParser.json());

    // Server.use("/", indexRoute);
    Server.use("/auth", authRoute);
    Server.use("/", userRoute);

    Server.all("*", (req, res) => {
      return handle(req, res);
    });

    Server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Server Ready on Port ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
