var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');
var Favourite = require('../models/favourite');
var Comment = require('../models/comment');
var Article = require('../models/article');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
      var chunk = [];
      var size = 2;
      for (var i = 0; i < docs.length; i += size) chunk.push(docs.slice(i, i + size));
      res.render('shop/index', {products: chunk});
  });
});

router.get('/add-to-cart/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {} );

    Product.findById(productId, function(err, product){
        if(err) return res.redirect('/');
        cart.add(product, product.id);
        console.log(cart);
        req.session.cart = cart;
        res.redirect('/')
    })
});

router.get('/shopping-cart', function (req, res, next) {
    if (!req.session.cart) return res.render('shop/shopping-cart', {products: null});
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice})
});

router.get('/add-to-favourite/:id', isLoggedIn, function (req, res, next) {
   var productId = req.params.id;
    Product.findById(productId, function (err, docs) {
        if (err) return res.redirect('/');
        var favourite = new Favourite({
            user: req.user,
            item: docs
        });
        favourite.save(function (err, result) {
            req.flash('success', 'Successfully added to Favourite');
            res.redirect('/')
        });
    });
});

router.get('/remove-from-favourite/:id', function (req, res, next) {
    var productId = req.params.id;
    Favourite.findByIdAndRemove(productId).exec();
    req.flash('success', 'Successfully remove product!');
    res.redirect('/favourite');
});

router.get('/favourite', isLoggedIn, function (req, res, next) {
    Favourite.find({user: req.user}, function (err, docs) {
        if (err) return res.redirect('/');
        res.render('shop/favourite', {items: docs});
    });
});

router.post('/add-comment/:id', isLoggedIn, function (req, res, next) {
    var productId = req.params.id;
    Product.findById(productId, function (err, docs) {
        if (err) return res.redirect('/');
        var comment = new Comment({
            user: req.user,
            item: docs._id,
            name: req.body.name,
            text: req.body.text
        });
        comment.save(function (err, result) {
            if (err) return res.redirect('/');
            req.flash('success', 'Successfully added comment!');
            res.redirect('/')
        })
    });
});

router.get('/show-comment/:id', function (req, res, next) {
    var productId = req.params.id;
    Comment.find({"item": productId}, function (err, docs) {
        if (err) return res.redirect('/favourite');
        var comments = [];
        for (var i = 0; i < docs.length; i++) comments.push(docs[i]);
        Product.findById(productId, function (err, docs) {
            if (err) return res.redirect('/');
            res.render('shop/comment', {comments: comments.reverse(), item: docs.title})
        });
    });
});

router.get('/sort-by/:name', function (req, res, next) {
    var name = req.params.name;
    var chunk = [];
    var size = 2;
    if (name === 'name') {
        Product.find({}).sort({title: 1}).exec(function (err, docs) {
            if (err) throw err;
            for (var i = 0; i < docs.length; i += size) chunk.push(docs.slice(i, i + size));
            res.render('shop/index', {products: chunk});
        });
    } else if (name === 'price-l-h'){
        Product.find({}).sort({price: 1}).exec(function (err, docs) {
            if (err) throw err;
            for (var i = 0; i < docs.length; i += size) chunk.push(docs.slice(i, i + size));
            res.render('shop/index', {products: chunk});
        });
    } else if (name === 'price-h-l'){
        Product.find({}).sort({price: -1}).exec(function (err, docs) {
            if (err) throw err;
            for (var i = 0; i < docs.length; i += size) chunk.push(docs.slice(i, i + size));
            res.render('shop/index', {products: chunk});
        });
    } else return res.redirect('/');
});

router.get('/checkout', isLoggedIn, function (req, res, next) {
    if (!req.session.cart) return res.redirect('/shopping-cart');
    var cart = new Cart(req.session.cart);
    res.render('shop/checkout', {total: cart.totalPrice})
});

router.post('/checkout', isLoggedIn, function(req, res, next){
    if (!req.session.cart) return res.redirect('/shopping-cart');
    var cart = new Cart(req.session.cart);
    var date = new Date();
    var order = new Order({
        user: req.user,
        cart: cart,
        name: req.body.name,
        date: date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear(),
        time: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    });
    order.save(function(err, result){
        console.log(order);
        req.flash('success', 'Successfully bought product!');
        req.session.cart = null;
        res.redirect('/')
    })
});

router.get('/reduce/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {} );

    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart')
});

router.get('/remove/:id', function(req, res, next){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart: {} );

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart')
});

router.get('/article', function (req, res, next) {
    Article.find({}, function (err, docs) {
        if (err) res.redirect('/');
        res.render('shop/article', {article: docs})
    })
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    req.session.oldUrl = req.url;
    res.redirect('/user/signin')
}

module.exports = router;
