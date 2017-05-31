var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');
var passport = require('passport');
var Order = require('../models/order');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next){
    Order.find({user: req.user}, function(err, docs){
        if(err) throw err;
        var cart;
        docs.forEach(function(order){
            cart = new Cart(order.cart);
            order.items = cart.generateArray()
        });
        res.render('user/profile', {orders: docs.reverse()})
    })
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    req.flash('success', 'You are Log Out');
    res.redirect('/');
});

router.use('/', function (req, res, next) {
   next();
});

router.get('/signup', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
    failureRedirect: '/user/signup',
    failureFlash: true
}), function(req, res, next){
    if(req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl)
    } else {
        res.redirect('/user/profile')
    }
});
/*
router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/user/signin',
    failureFlash: true
}), function(req, res, next){
    if(req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl)
    } else {
        res.redirect('/user/profile')
    }
});

router.get('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));
*/
router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0
    })
});

router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/user/signin',
    failureFlash: true
}), function(req, res, next){
    if(req.session.oldUrl) {
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl)
    } else {
        res.redirect('/user/profile')
    }
});
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/')
}

function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()) return next();
    res.redirect('/')
}

module.exports = router;