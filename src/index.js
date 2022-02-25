require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./configs/db.js");
const { register, login, newToken } = require("./controllers/auth.controller");
const passport = require("./configs/google-oauth");
const productController = require("./controllers/product.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productController);

app.post("/register", register);
app.post("/login", login);

app.set("view engine", "ejs");
app.use(express.static("public"));

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
    }), 
    (req, res) => {
        const { user } = req;
        const token = newToken(user);
        // return res.send({ user, token });
        return res.render("users/signUp.ejs", { user, token });
    }
);

port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connect();
  console.log(`Express running on port ${port}`);
});