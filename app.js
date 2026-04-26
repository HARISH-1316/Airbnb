if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const DB_URL = process.env.ATLASDB_URL;

const User = require("./Models/User.js");

const methodOverride = require("method-override");

// ejs templates
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// Path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// =======================
// MongoDB
// =======================
mongoose
  .connect(DB_URL)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log(err));

// =======================
// Sessions
// =======================
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

const store = MongoStore.create({
  mongoUrl: DB_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60,
});

store.on("error", (err) => {
  console.log("Error occured in MONGO SESSION STORE: ", err);
});

const sessionOptions = {
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

app.use(session(sessionOptions));

// connect-flash
const flash = require("connect-flash");
app.use(flash());

// Passport
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express Error
const ExpressError = require("./utils/ExpressError.js");

// Routes
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/User.js");

// locals middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  res.locals.search = req.query.search;
  res.locals.category = req.query.category;
  res.locals.sort = req.query.sort;
  next();
});

// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("", userRouter);

// Home route
app.get("/", (req, res) => {
  res.redirect("/listings");
});

// 404 handler
app.use(() => {
  throw new ExpressError(404, "Page not found");
});

// Error handler
app.use((err, req, res, next) => {
  res.render("error.ejs", { err });
});

// =======================
// PORT FIX
// =======================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
