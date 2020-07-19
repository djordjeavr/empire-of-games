var express= require('express');
var app =express();
var PORT = 3000;
var bodyParser=require('body-parser');
var productDAO=require('./productDAO');
const  request  = require('express');
var menuDAO=require('./menuDAO');
var userDAO=require('./UserDAO');
var commentDAO= require('./commentDAO');
var basketDAO=require('./basketDAO');
const orderDAO = require('./orderDAO');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods',
       'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers',
       'Content-Type');
        next();
       });

       app.post('/user/register',userDAO.register);
       app.post('/user/login',userDAO.login);
        
       app.get('/getAllProduct',productDAO.getAllProducts);
       app.get('/all/genres',productDAO.geAllGenres);
       app.get('/all/platforms',productDAO.geAllPlatforms);
       app.get('/all/subcategory/software',menuDAO.getAllSubcategorySoftware);
       app.get('/all/subcategory/gift-cards',menuDAO.getAllSubcategoryGiftCards);
       app.get('/all/games',productDAO.getAllGames);
       app.get('/all/software',productDAO.getAllSoftware);
       app.get('/all/gift-cards',productDAO.getAllGiftCards);
       app.get('/all/devices',productDAO.getAllDevices);
       app.get('/number/games',productDAO.getTotalNumberOfGames);
       app.get('/number/software',productDAO.getTotalNumberOfSoftware);
       app.get('/number/gift-cards',productDAO.getTotalNumberOfGiftCards);
       app.get('/all/categories',productDAO.getAllCategories);
      app.get('/best/customers',userDAO.getBestCustomers);
      app.get('/best/products',productDAO.getBestProducts);

      app.get('/all/companies',productDAO.getAllCompany);
      app.post('/insert/products',productDAO.InsertProductInTable); 
       app.get('/all/product/basket',basketDAO.getAllProductFromBasket);
       app.get('/total_number/products/basket',basketDAO.getTotalNumberOfProductsInBasket);
       app.put('/update/product/sold',basketDAO.updateSoldProduct)
       app.post('/update/poducts/basket',basketDAO.UpdateBasket);
       app.delete('/delete/products/basket',basketDAO.DeleteProductFromBasket)
       app.post('/games/search',productDAO.searchGames);
       app.post('/software/search',productDAO.searchSoftware);
       app.post('/search/gift-cards',productDAO.searchGiftCards);
       app.post('/subcategory/gift-cards/search',productDAO.searchCategoryGiftCard);
       app.post('/subcategory/software/search',productDAO.searchCategorySoftware);
       app.post('/search/products',menuDAO.SearchProducts);
       app.post('/product',productDAO.getProduct);
       app.post('/insert/comment',commentDAO.insertComment);
       app.post('/insert/in-basket',basketDAO.insertInBasket);
       app.get('/commentaries',commentDAO.getAllCommentaries);
       app.get('/all/payment_methods',basketDAO.getAllPaymentMethods);
       app.get('/all/comments',commentDAO.getAllComments);
       app.get('/all/orders',orderDAO.getAllOrders);
       app.post('/insert/features',productDAO.InsertNewFeatures);
       
       app.delete('/delete/product',productDAO.DeleteProduct);
       app.delete('/delete/feature',productDAO.DeleteFeature);
       app.put('/update/product',productDAO.updateProduct);
       app.post('/save/orders',basketDAO.SaveOrdersForUser);
       app.post('/update/user',userDAO.UpdateUser);
       app.get('/all/users',userDAO.getAllUsers);
       app.listen(PORT,function(){
        console.log('Aplication is started');
        
    });