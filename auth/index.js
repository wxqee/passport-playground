const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const AdminUser = require('./admin-user');

passport.use(new LocalStrategy(
    function(username, password, done) {

        if (username !== AdminUser.username) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        if (password !== AdminUser.password) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, AdminUser);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    const err = null;

    done(err, AdminUser);
});
