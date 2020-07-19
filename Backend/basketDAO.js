var conn=require('./connection');
function SaveOrderItems(request){
  return new Promise(function(resolve,reject){
    conn.query('INSERT INTO order_item (user_id,product_id,item,payment_method_id)  VALUES  ?',[request],
        function(err,result){
          if(err) return reject(err);
         resolve(result.insertId)
         
     
          })
  })
}
function deleteItemsFromBasket(userid){
return new Promise(function(resolve,reject){
  conn.query(`DELETE FROM basket WHERE user_id=${userid}`,
      function(err,result){
        if(err) return reject(err);
       resolve(result.insertId)
        })
})
}
function getTotalProductsPurchased(userid){
  return new Promise(function(resolve,reject){
    conn.query(`SELECT sum(item) totalProductsPurchased FROM order_item WHERE user_id=${userid}`,
        function(err,result){
          if(err) return reject(err);
         resolve(result[0].totalProductsPurchased);
          })
  })
}
function UpdateTotalProductsPurchasedFromUser(userid,totalProductsPurchased){
  console.log(totalProductsPurchased);
  return new Promise(function(resolve,reject){
    conn.query(`UPDATE user SET totalProductsPurchased=${totalProductsPurchased}   WHERE id=${userid}`,
        function(err,result){
          if(err) return reject(err);
         resolve(result);
          })

  })
}


module.exports={ 
insertInBasket:function(req,res){
  const product=req.body[0];
  const productSold=req.body[1]
  console.log(product);
  conn.query('INSERT INTO basket SET ? ',[product],
  function(err,result){
    if(err) return res.send(err);
    
    conn.query(`UPDATE product SET sold= ${productSold} WHERE id =${product.product_id}`,
    function(err,result){
      if(err) return res.send(err);
      
      })
      res.status(200).json(result[0]);
    })
},
getAllProductFromBasket:function(req,res){
    const userId=req.query.user_id;
    
    conn.query(`SELECT basket.product_id, basket.totalPrice,basket.item, basket.id,basket.item,user.email,product.image,product.name,product.price,product.sold FROM basket JOIN user ON basket.user_id=user.id JOIN product ON basket.product_id=product.id WHERE user_id=${userId}`,
    function(err,result){
      if(err) return res.send(err);
      res.status(200).json(result);
 
      })
  },

getTotalNumberOfProductsInBasket:function(req,res){
  const userId=req.query.user_id;
  conn.query(`SELECT COUNT(id) as totalNumberOfProductsInBasket FROM basket WHERE user_id=${userId}`,
    function(err,result){
      if(err) return res.send(err);
      res.status(200).json(result);
 
      })
},
UpdateBasket:function(req,res){
  const basket=req.body;
  console.log(basket);
  conn.query(`UPDATE basket SET item=${basket.item}, totalPrice=${basket.totalPrice} WHERE user_id=${basket.user_id} AND id=${basket.id}`,
    function(err,result){
      if(err) return res.send(err);
      res.status(200).json(result.InsertId);
 
      })
},
DeleteProductFromBasket:function(req,res){
  const product=req.query;

  conn.query(`DELETE FROM basket WHERE id=${product.id} `,
    function(err,result){
      if(err) return res.send(err)
      
    
      res.status(200).json({message:'successful removal'});
     
    })
      
    },
    getAllPaymentMethods:function(req,res){
    
      conn.query(`SELECT * FROM payment_method`,
        function(err,result){
          if(err) return res.send(err);
          res.status(200).json(result);
     
          })
    },
    SaveOrdersForUser: async function(req,res){
      const request=req.body;
      const products=[request];
      try{
        const orderId= await SaveOrderItems(products);
        const totalProductsPurchased= await getTotalProductsPurchased(products[0][0])
        await  UpdateTotalProductsPurchasedFromUser(products[0][0],totalProductsPurchased);
        res.status(200).json({id:orderId,totalProductsPurchased:totalProductsPurchased});
        await deleteItemsFromBasket(products[0][0]);
        
      }catch(err){
        res.status(500).send(err)
      }
    },
    updateSoldProduct:function(req,res){
      const product=req.body;
      console.log(product);
      conn.query(`UPDATE product SET sold= ${product.sold} WHERE id =${product.product_id}`,
      function(err,result){
        if(err) return res.send(err);
       
        })
    }
    
}