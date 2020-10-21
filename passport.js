const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require("./models/User");

const cookieExtractor = req =>{
    let token = null;
    if(req && req.cookies){
        token = req.cookies["acess_token"];
    }
    return token;
}

// authorization to protecting the end points
passport.use(new JwtStrategy({
jwtFromRequest :cookieExtractor,
secretOrKey : "Priscillah"
},(payload,done)=>{
    user.findById({_id : payload.sub},(err,user)=>{
        if(err)
        return done(err,false);
        if(user)
        return done(null,user);
    });
}));

// middleware used for authentication (authenticated local strategy using username and password)
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, usesr) => {
      // something went wrong with the database.
      if (err) return done(err);
      // if no user exists.
      if (!user) return done(null, false);
      // this is going to check if password is correct
      user.comparePassword(password,done);
    });
  })
);
