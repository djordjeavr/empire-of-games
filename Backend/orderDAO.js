var conn=require('./connection');


module.exports={ 
    
    getAllOrders:function(req,res){
        const userId=req.query.user_id;
       
        conn.query('SELECT product.image,product.name,product.price FROM order_item JOIN product ON order_item.product_id=product.id WHERE user_id=?',userId, 
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
            
          }) 
      }

 }