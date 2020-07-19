var conn=require('./connection');

module.exports={
    getAllSubcategorySoftware:function(req,res){
        conn.query('SELECT * FROM SUBCATEGORY_SOFTWARE',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          }) 
    },
    getAllSubcategoryGiftCards:function(req,res){
        conn.query('SELECT * FROM SUBCATEGORY_GIFT_CARD',
        function(err,result){
            if(err) return res.send(err);
            res.status(200).json(result);
          }) 
    },
SearchProducts:function(req,res){
   const nameProduct=req.body.name;
   console.log(nameProduct);
   
   conn.query
(`select * from product where name like '%${nameProduct}%' limit 5`,
function(err,result){
if(err) return res.send(err);
res.status(200).json(result);
})
}
}